"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SquareStack } from "lucide-react";
import { logUsage } from "@/lib/logUsage";

interface FormInputs {
  totalTHC: string;
  numUnits: string;
  ingredientCost: string;
  packagingCost: string;
  laborTime: string;
  laborRate: string;
  testingCost: string;
  otherCost: string;
}

interface CalculationResults {
  totalCost: number;
  costPerUnit: number;
  thcPerUnit: number;
  costPerMgTHC: number;
  laborCostPerUnit: number;
  packagingPerUnit: number;
  ingredientPerUnit: number;
}

export default function EdiblesUnitCostCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    totalTHC: "",
    numUnits: "",
    ingredientCost: "",
    packagingCost: "",
    laborTime: "",
    laborRate: "",
    testingCost: "",
    otherCost: "",
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
    setResults(null);
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    const values = {
      totalTHC: parseFloat(inputs.totalTHC) || 0,
      numUnits: parseFloat(inputs.numUnits) || 0,
      ingredientCost: parseFloat(inputs.ingredientCost) || 0,
      packagingCost: parseFloat(inputs.packagingCost) || 0,
      laborTime: parseFloat(inputs.laborTime) || 0,
      laborRate: parseFloat(inputs.laborRate) || 0,
      testingCost: parseFloat(inputs.testingCost) || 0,
      otherCost: parseFloat(inputs.otherCost) || 0,
    };

    const laborCost = (values.laborTime / 60) * values.laborRate;

    const totalCost = 
      values.ingredientCost +
      values.packagingCost +
      laborCost +
      values.testingCost +
      values.otherCost;

    const costPerUnit = totalCost / values.numUnits;
    const thcPerUnit = values.totalTHC / values.numUnits;
    const costPerMgTHC = totalCost / values.totalTHC;
    const laborCostPerUnit = laborCost / values.numUnits;
    const packagingPerUnit = values.packagingCost / values.numUnits;
    const ingredientPerUnit = values.ingredientCost / values.numUnits;

    setResults({
      totalCost,
      costPerUnit,
      thcPerUnit,
      costPerMgTHC,
      laborCostPerUnit,
      packagingPerUnit,
      ingredientPerUnit,
    });
    
    // Log usage
    logUsage("Edibles Unit Cost", inputs, {
      totalCost,
      costPerUnit,
      thcPerUnit,
      costPerMgTHC,
      laborCostPerUnit,
      packagingPerUnit,
      ingredientPerUnit,
    });
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-3 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground";

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border border-border bg-secondary rounded-2xl shadow">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <SquareStack className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">Edibles Cost Per Unit Calculator</h1>
            </div>
            <p className="text-muted-foreground mb-8">
              Use this calculator to estimate the cost per unit of your infused edibles. Input all relevant costs (cannabis, ingredients, labor, packaging, and testing), and the calculator will give you per-unit cost, THC per piece, and cost per milligram of THC.
            </p>

            <form onSubmit={calculateResults} className="space-y-8">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Total THC (mg)
                  </label>
                  <input
                    type="number"
                    name="totalTHC"
                    value={inputs.totalTHC}
                    onChange={handleInputChange}
                    placeholder="Enter total THC content"
                    step="any"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Number of Edible Units
                  </label>
                  <input
                    type="number"
                    name="numUnits"
                    value={inputs.numUnits}
                    onChange={handleInputChange}
                    placeholder="Enter number of pieces"
                    step="any"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Ingredient Cost ($)
                  </label>
                  <input
                    type="number"
                    name="ingredientCost"
                    value={inputs.ingredientCost}
                    onChange={handleInputChange}
                    placeholder="Enter ingredient cost"
                    step="any"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Packaging Cost ($)
                  </label>
                  <input
                    type="number"
                    name="packagingCost"
                    value={inputs.packagingCost}
                    onChange={handleInputChange}
                    placeholder="Enter packaging cost"
                    step="any"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Labor Time (minutes)
                  </label>
                  <input
                    type="number"
                    name="laborTime"
                    value={inputs.laborTime}
                    onChange={handleInputChange}
                    placeholder="Enter labor time"
                    step="any"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Labor Rate ($/hour)
                  </label>
                  <input
                    type="number"
                    name="laborRate"
                    value={inputs.laborRate}
                    onChange={handleInputChange}
                    placeholder="Enter hourly rate"
                    step="any"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Testing Cost ($)
                  </label>
                  <input
                    type="number"
                    name="testingCost"
                    value={inputs.testingCost}
                    onChange={handleInputChange}
                    placeholder="Enter testing cost"
                    step="any"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Other Costs ($) (optional)
                  </label>
                  <input
                    type="number"
                    name="otherCost"
                    value={inputs.otherCost}
                    onChange={handleInputChange}
                    placeholder="Enter other costs"
                    step="any"
                    className={inputClasses}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full sm:w-auto mt-4">
                Calculate
              </Button>

              {results ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Total Cost</p>
                      <p className="text-2xl font-bold text-primary">
                        ${results.totalCost.toFixed(2)}
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Cost Per Piece</p>
                      <p className="text-2xl font-bold text-primary">
                        ${results.costPerUnit.toFixed(2)}
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">THC Per Piece</p>
                      <p className="text-2xl font-bold text-primary">
                        {results.thcPerUnit.toFixed(2)} mg
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Cost Per mg THC</p>
                      <p className="text-2xl font-bold text-primary">
                        ${results.costPerMgTHC.toFixed(4)}
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Labor Cost Per Unit</p>
                      <p className="text-2xl font-bold text-primary">
                        ${results.laborCostPerUnit.toFixed(2)}
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Packaging Cost Per Unit</p>
                      <p className="text-2xl font-bold text-primary">
                        ${results.packagingPerUnit.toFixed(2)}
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Ingredient Cost Per Unit</p>
                      <p className="text-2xl font-bold text-primary">
                        ${results.ingredientPerUnit.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}