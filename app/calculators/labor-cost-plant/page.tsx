"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { logUsage } from "@/lib/logUsage";

interface FormInputs {
  laborHours: string;
  wage: string;
  plants: string;
  targetRate: string;
}

interface CalculationResults {
  totalCost: number;
  costPerPlant: number;
  hoursPerPlant: number;
  plantsPerHour: number;
  efficiency: "efficient" | "warning" | "inefficient";
}

const EfficiencyIndicator = ({ efficiency, costPerPlant }: { efficiency: string; costPerPlant: number }) => {
  const indicators = {
    efficient: {
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      text: "Efficient Operation",
      description: "Cost per plant is within optimal range"
    },
    warning: {
      icon: AlertTriangle,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
      text: "Review Recommended",
      description: "Cost per plant is slightly elevated"
    },
    inefficient: {
      icon: XCircle,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
      text: "Efficiency Improvement Needed",
      description: "Cost per plant exceeds target threshold"
    }
  };

  const indicator = indicators[efficiency as keyof typeof indicators];
  const Icon = indicator.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start gap-3 p-4 rounded-lg ${indicator.bgColor} ${indicator.borderColor} border`}
    >
      <Icon className={`w-5 h-5 ${indicator.color} mt-0.5`} />
      <div>
        <p className={`font-medium ${indicator.color}`}>{indicator.text}</p>
        <p className="text-sm text-muted-foreground">{indicator.description}</p>
        <p className="text-sm mt-1">
          Current cost: <span className="font-medium">${costPerPlant.toFixed(2)}/plant</span>
        </p>
      </div>
    </motion.div>
  );
};

export default function LaborCostCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    laborHours: "",
    wage: "",
    plants: "",
    targetRate: "",
  });

  const [targetRateError, setTargetRateError] = useState<string>("");
  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "targetRate") {
      const numValue = parseFloat(value);
      if (value && (isNaN(numValue) || numValue < 0 || numValue > 100)) {
        setTargetRateError("Please enter a number between 0 and 100");
      } else {
        setTargetRateError("");
      }
    }
    
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (targetRateError) return;
    
    const hours = parseFloat(inputs.laborHours) || 0;
    const wage = parseFloat(inputs.wage) || 0;
    const plants = parseFloat(inputs.plants) || 0;

    const totalCost = hours * wage;
    const costPerPlant = plants > 0 ? totalCost / plants : 0;
    const hoursPerPlant = plants > 0 ? hours / plants : 0;
    const plantsPerHour = hours > 0 ? plants / hours : 0;

    let efficiency: "efficient" | "warning" | "inefficient";
    if (costPerPlant <= 1.50) {
      efficiency = "efficient";
    } else if (costPerPlant <= 2.00) {
      efficiency = "warning";
    } else {
      efficiency = "inefficient";
    }

    setResults({
      totalCost,
      costPerPlant,
      hoursPerPlant,
      plantsPerHour,
      efficiency,
    });
    
    // Log usage
    logUsage("Labor Cost Plant", inputs, {
      totalCost,
      costPerPlant,
      hoursPerPlant,
      plantsPerHour,
      efficiency,
    });
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-3 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground";

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border border-border bg-secondary rounded-2xl shadow">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">Labor Cost per Plant</h1>
            </div>
            <p className="text-muted-foreground mb-8">
              Calculate labor costs per plant and identify efficiency opportunities in your cultivation process.
            </p>

            <form onSubmit={calculateResults} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="laborHours" className="block text-sm font-medium">
                    Total Labor Hours
                  </label>
                  <input
                    id="laborHours"
                    type="number"
                    name="laborHours"
                    value={inputs.laborHours}
                    onChange={handleInputChange}
                    placeholder="Enter total hours"
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="wage" className="block text-sm font-medium">
                    Avg Hourly Wage ($)
                  </label>
                  <input
                    id="wage"
                    type="number"
                    name="wage"
                    value={inputs.wage}
                    onChange={handleInputChange}
                    placeholder="Enter hourly wage"
                    step="0.01"
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="plants" className="block text-sm font-medium">
                    Total Plant Count
                  </label>
                  <input
                    id="plants"
                    type="number"
                    name="plants"
                    value={inputs.plants}
                    onChange={handleInputChange}
                    placeholder="Enter number of plants"
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="targetRate" className="block text-sm font-medium">
                    Target Rate (%)
                  </label>
                  <input
                    id="targetRate"
                    type="number"
                    name="targetRate"
                    value={inputs.targetRate}
                    onChange={handleInputChange}
                    placeholder="Enter target rate (0-100)"
                    min="0"
                    max="100"
                    step="0.1"
                    className={`${inputClasses} ${targetRateError ? 'ring-red-500' : ''}`}
                  />
                  {targetRateError && (
                    <p className="text-sm text-red-500 mt-1">{targetRateError}</p>
                  )}
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full sm:w-auto"
                disabled={!!targetRateError}
              >
                Calculate
              </Button>
            </form>

            {results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 space-y-6"
              >
                <EfficiencyIndicator 
                  efficiency={results.efficiency} 
                  costPerPlant={results.costPerPlant} 
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Total Labor Cost</p>
                    <p className="text-2xl font-bold text-primary">
                      ${results.totalCost.toFixed(2)}
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Labor Cost Per Plant</p>
                    <p className="text-2xl font-bold text-primary">
                      ${results.costPerPlant.toFixed(2)}
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Labor Hours Per Plant</p>
                    <p className="text-2xl font-bold text-primary">
                      {results.hoursPerPlant.toFixed(2)} hrs
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Plants Per Hour</p>
                    <p className="text-2xl font-bold text-primary">
                      {results.plantsPerHour.toFixed(2)}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Tips for Accurate Calculations</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use actual logged labor hours from multiple batches, not estimates.</li>
              <li>Only include labor time directly tied to plant work (e.g. pruning, defoliation, transplanting).</li>
              <li>Divide total time by only the plants handled during that session — not total in room.</li>
              <li>Track break time separately to avoid inflating costs.</li>
              <li>Update labor rate as wages or staffing structures change.</li>
            </ul>
          </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}