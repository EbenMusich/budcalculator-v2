"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Target } from "lucide-react";
import { logUsage } from "@/lib/logUsage";

interface FormInputs {
  goalType: "revenue" | "units";
  goalValue: string;
  unitsPerBatch: string;
  salePricePerUnit: string;
  materialCostPerUnit: string;
  laborHoursPerBatch: string;
  hourlyWage: string;
}

interface CalculationResults {
  totalUnits: number;
  totalBatches: number;
  totalTimeHours: number;
  estimatedRevenue: number;
  totalCOGS: number;
  laborCost: number;
  grossProfit: number;
  netProfit: number;
}

export default function ProductionGoalPlanner() {
  const [inputs, setInputs] = useState<FormInputs>({
    goalType: "revenue",
    goalValue: "",
    unitsPerBatch: "",
    salePricePerUnit: "",
    materialCostPerUnit: "",
    laborHoursPerBatch: "",
    hourlyWage: "",
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
    setResults(null);
  };

  const handleGoalTypeChange = (value: "revenue" | "units") => {
    setInputs(prev => ({ ...prev, goalType: value, goalValue: "" }));
    setResults(null);
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    const values = {
      goalValue: parseFloat(inputs.goalValue) || 0,
      unitsPerBatch: parseFloat(inputs.unitsPerBatch) || 0,
      salePricePerUnit: parseFloat(inputs.salePricePerUnit) || 0,
      materialCostPerUnit: parseFloat(inputs.materialCostPerUnit) || 0,
      laborHoursPerBatch: parseFloat(inputs.laborHoursPerBatch) || 0,
      hourlyWage: parseFloat(inputs.hourlyWage) || 0,
    };

    let totalUnits: number;
    let estimatedRevenue: number;

    if (inputs.goalType === "revenue") {
      // Goal is revenue, calculate units needed
      estimatedRevenue = values.goalValue;
      totalUnits = values.salePricePerUnit > 0 ? estimatedRevenue / values.salePricePerUnit : 0;
    } else {
      // Goal is units, calculate revenue
      totalUnits = values.goalValue;
      estimatedRevenue = totalUnits * values.salePricePerUnit;
    }

    const totalBatches = values.unitsPerBatch > 0 ? Math.ceil(totalUnits / values.unitsPerBatch) : 0;
    const totalTimeHours = totalBatches * values.laborHoursPerBatch;
    const totalCOGS = totalUnits * values.materialCostPerUnit;
    const laborCost = totalTimeHours * values.hourlyWage;
    const grossProfit = estimatedRevenue - totalCOGS;
    const netProfit = grossProfit - laborCost;

    const calculationResults = {
      totalUnits,
      totalBatches,
      totalTimeHours,
      estimatedRevenue,
      totalCOGS,
      laborCost,
      grossProfit,
      netProfit,
    };

    setResults(calculationResults);

    // Log usage with all inputs and results
    logUsage("Production Goal Planner", {
      goalType: inputs.goalType,
      goalValue: values.goalValue,
      unitsPerBatch: values.unitsPerBatch,
      salePricePerUnit: values.salePricePerUnit,
      materialCostPerUnit: values.materialCostPerUnit,
      laborHoursPerBatch: values.laborHoursPerBatch,
      hourlyWage: values.hourlyWage,
    }, {
      totalUnits,
      totalBatches,
      totalTimeHours,
      estimatedRevenue,
      totalCOGS,
      laborCost,
      grossProfit,
      netProfit,
    });
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-4 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground border-border";

  const isFormValid = () => {
    return (
      parseFloat(inputs.goalValue) > 0 &&
      parseFloat(inputs.unitsPerBatch) > 0 &&
      parseFloat(inputs.salePricePerUnit) > 0 &&
      parseFloat(inputs.materialCostPerUnit) >= 0 &&
      parseFloat(inputs.laborHoursPerBatch) >= 0 &&
      parseFloat(inputs.hourlyWage) >= 0
    );
  };

  const formatCurrency = (value: number) => `$${value.toFixed(2)}`;
  const formatNumber = (value: number) => value.toFixed(2);

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border border-border bg-secondary rounded-2xl shadow">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">Production Goal Planner</h1>
            </div>
            <p className="text-muted-foreground mb-8">
              Plan your production targets and calculate the resources needed to achieve your revenue or unit goals. 
              Get detailed cost breakdowns and profitability insights.
            </p>

            <form onSubmit={calculateResults} className="space-y-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-foreground mb-4">
                    Goal Type
                  </label>
                  <RadioGroup
                    value={inputs.goalType}
                    onValueChange={handleGoalTypeChange}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="revenue" id="revenue" />
                      <label htmlFor="revenue" className="text-sm font-medium">Revenue Goal</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="units" id="units" />
                      <label htmlFor="units" className="text-sm font-medium">Unit Goal</label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="goalValue" className="block text-lg font-medium text-foreground mb-2">
                      {inputs.goalType === "revenue" ? "Target Revenue ($)" : "Target Units"}
                    </label>
                    <div className="relative">
                      {inputs.goalType === "revenue" && (
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      )}
                      <input
                        id="goalValue"
                        type="number"
                        name="goalValue"
                        value={inputs.goalValue}
                        onChange={handleInputChange}
                        placeholder={inputs.goalType === "revenue" ? "Enter target revenue" : "Enter target units"}
                        min="0"
                        step={inputs.goalType === "revenue" ? "0.01" : "1"}
                        required
                        className={inputs.goalType === "revenue" ? `pl-8 ${inputClasses}` : inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="unitsPerBatch" className="block text-lg font-medium text-foreground mb-2">
                      Units per Batch
                    </label>
                    <input
                      id="unitsPerBatch"
                      type="number"
                      name="unitsPerBatch"
                      value={inputs.unitsPerBatch}
                      onChange={handleInputChange}
                      placeholder="Enter units per batch"
                      min="1"
                      step="1"
                      required
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="salePricePerUnit" className="block text-lg font-medium text-foreground mb-2">
                      Sale Price per Unit ($)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <input
                        id="salePricePerUnit"
                        type="number"
                        name="salePricePerUnit"
                        value={inputs.salePricePerUnit}
                        onChange={handleInputChange}
                        placeholder="Enter sale price"
                        min="0"
                        step="0.01"
                        required
                        className={`pl-8 ${inputClasses}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="materialCostPerUnit" className="block text-lg font-medium text-foreground mb-2">
                      Material Cost per Unit ($)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <input
                        id="materialCostPerUnit"
                        type="number"
                        name="materialCostPerUnit"
                        value={inputs.materialCostPerUnit}
                        onChange={handleInputChange}
                        placeholder="Enter material cost"
                        min="0"
                        step="0.01"
                        required
                        className={`pl-8 ${inputClasses}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="laborHoursPerBatch" className="block text-lg font-medium text-foreground mb-2">
                      Labor Hours per Batch
                    </label>
                    <input
                      id="laborHoursPerBatch"
                      type="number"
                      name="laborHoursPerBatch"
                      value={inputs.laborHoursPerBatch}
                      onChange={handleInputChange}
                      placeholder="Enter labor hours"
                      min="0"
                      step="0.1"
                      required
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="hourlyWage" className="block text-lg font-medium text-foreground mb-2">
                      Hourly Wage ($)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <input
                        id="hourlyWage"
                        type="number"
                        name="hourlyWage"
                        value={inputs.hourlyWage}
                        onChange={handleInputChange}
                        placeholder="Enter hourly wage"
                        min="0"
                        step="0.01"
                        required
                        className={`pl-8 ${inputClasses}`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-md shadow transition"
                disabled={!isFormValid()}
              >
                Calculate Production Plan
              </Button>

              {results ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6 mt-8"
                >
                  <Card className="border border-border bg-muted/50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-6">Production Plan Results</h3>
                      
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-background rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Total Units</p>
                          <p className="text-2xl font-bold text-primary">
                            {formatNumber(results.totalUnits)}
                          </p>
                        </div>

                        <div className="bg-background rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Total Batches</p>
                          <p className="text-2xl font-bold text-primary">
                            {results.totalBatches}
                          </p>
                        </div>

                        <div className="bg-background rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Total Time</p>
                          <p className="text-2xl font-bold text-primary">
                            {formatNumber(results.totalTimeHours)} hrs
                          </p>
                        </div>

                        <div className="bg-background rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Estimated Revenue</p>
                          <p className="text-2xl font-bold text-primary">
                            {formatCurrency(results.estimatedRevenue)}
                          </p>
                        </div>

                        <div className="bg-background rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Total COGS</p>
                          <p className="text-2xl font-bold text-primary">
                            {formatCurrency(results.totalCOGS)}
                          </p>
                        </div>

                        <div className="bg-background rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Labor Cost</p>
                          <p className="text-2xl font-bold text-primary">
                            {formatCurrency(results.laborCost)}
                          </p>
                        </div>

                        <div className="bg-background rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Gross Profit</p>
                          <p className={`text-2xl font-bold ${
                            results.grossProfit >= 0 ? 'text-green-500' : 'text-red-500'
                          }`}>
                            {formatCurrency(results.grossProfit)}
                          </p>
                        </div>

                        <div className="bg-background rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Net Profit</p>
                          <p className={`text-2xl font-bold ${
                            results.netProfit >= 0 ? 'text-green-500' : 'text-red-500'
                          }`}>
                            {formatCurrency(results.netProfit)}
                          </p>
                        </div>
                      </div>

                      {results.netProfit < 0 ? (
                        <div className="mt-6 bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                          <p className="text-destructive font-medium">Negative Net Profit</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Your total costs exceed revenue. Consider reducing material costs, labor hours, or increasing sale price.
                          </p>
                        </div>
                      ) : null}

                      {results.netProfit >= 0 && results.netProfit / results.estimatedRevenue < 0.1 ? (
                        <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                          <p className="text-yellow-600 dark:text-yellow-400 font-medium">Low Profit Margin</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Your net profit margin is below 10%. Consider optimizing costs or pricing strategy.
                          </p>
                        </div>
                      ) : null}

                      {results.netProfit / results.estimatedRevenue >= 0.2 ? (
                        <div className="mt-6 bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                          <p className="text-green-600 dark:text-green-400 font-medium">Healthy Profit Margin</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Excellent profitability! Your net profit margin is above 20%.
                          </p>
                        </div>
                      ) : null}
                    </CardContent>
                  </Card>
                </motion.div>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}