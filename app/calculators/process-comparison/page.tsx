"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale as Scales, CheckCircle2, Clock, DollarSign, Users, Package } from "lucide-react";
import { logUsage } from "@/lib/logUsage";

interface FormInputs {
  units: string;
  timeA: string;
  timeB: string;
  rateA: string;
  rateB: string;
  workersA: string;
  workersB: string;
  consumableA: string;
  consumableB: string;
}

interface CalculationResults {
  processA: {
    totalTime: number;
    laborCost: number;
    consumables: number;
    totalCost: number;
    costPerUnit: number;
  };
  processB: {
    totalTime: number;
    laborCost: number;
    consumables: number;
    totalCost: number;
    costPerUnit: number;
  };
  comparison: {
    timeSaved: number;
    timeDiffPct: number;
    costSaved: number;
    costDiffPct: number;
    recommend: "A" | "B";
  };
}

export default function ProcessComparisonCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    units: "",
    timeA: "",
    timeB: "",
    rateA: "",
    rateB: "",
    workersA: "",
    workersB: "",
    consumableA: "",
    consumableB: "",
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
      units: parseFloat(inputs.units) || 0,
      timeA: parseFloat(inputs.timeA) || 0,
      timeB: parseFloat(inputs.timeB) || 0,
      rateA: parseFloat(inputs.rateA) || 0,
      rateB: parseFloat(inputs.rateB) || 0,
      workersA: parseFloat(inputs.workersA) || 0,
      workersB: parseFloat(inputs.workersB) || 0,
      consumableA: parseFloat(inputs.consumableA) || 0,
      consumableB: parseFloat(inputs.consumableB) || 0,
    };

    // Process A calculations
    const totalTimeA = (values.units * values.timeA) / 60;
    const laborCostA = totalTimeA * values.workersA * values.rateA;
    const consumablesA = values.units * values.consumableA;
    const totalCostA = laborCostA + consumablesA;
    const costPerUnitA = totalCostA / values.units;

    // Process B calculations
    const totalTimeB = (values.units * values.timeB) / 60;
    const laborCostB = totalTimeB * values.workersB * values.rateB;
    const consumablesB = values.units * values.consumableB;
    const totalCostB = laborCostB + consumablesB;
    const costPerUnitB = totalCostB / values.units;

    // Comparison calculations
    const timeSaved = totalTimeA - totalTimeB;
    const timeDiffPct = (timeSaved / totalTimeA) * 100;
    const costSaved = totalCostA - totalCostB;
    const costDiffPct = (costSaved / totalCostA) * 100;

    const calculationResults = {
      processA: {
        totalTime: totalTimeA,
        laborCost: laborCostA,
        consumables: consumablesA,
        totalCost: totalCostA,
        costPerUnit: costPerUnitA,
      },
      processB: {
        totalTime: totalTimeB,
        laborCost: laborCostB,
        consumables: consumablesB,
        totalCost: totalCostB,
        costPerUnit: costPerUnitB,
      },
      comparison: {
        timeSaved,
        timeDiffPct,
        costSaved,
        costDiffPct,
        recommend: (totalCostA > totalCostB ? "B" : "A") as "A" | "B",
      },
    };

    setResults(calculationResults);

    // Log usage with all inputs and results
    logUsage("Process Comparison", {
      units: values.units,
      timeA: values.timeA,
      timeB: values.timeB,
      rateA: values.rateA,
      rateB: values.rateB,
      workersA: values.workersA,
      workersB: values.workersB,
      consumableA: values.consumableA,
      consumableB: values.consumableB,
    }, {
      processA: {
        totalTime: totalTimeA,
        laborCost: laborCostA,
        consumables: consumablesA,
        totalCost: totalCostA,
        costPerUnit: costPerUnitA,
      },
      processB: {
        totalTime: totalTimeB,
        laborCost: laborCostB,
        consumables: consumablesB,
        totalCost: totalCostB,
        costPerUnit: costPerUnitB,
      },
      comparison: {
        timeSaved,
        timeDiffPct,
        costSaved,
        costDiffPct,
        recommend: calculationResults.comparison.recommend,
      },
    });
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-3 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground";

  const ProcessInputs = ({ process }: { process: "A" | "B" }) => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-muted-foreground" />
        <label className="block text-sm font-medium">
          Time per Unit (min)
        </label>
      </div>
      <input
        type="number"
        name={`time${process}`}
        value={inputs[`time${process}` as keyof FormInputs]}
        onChange={handleInputChange}
        placeholder="e.g. 1.5"
        step="0.01"
        required
        className={inputClasses}
      />

      <div className="flex items-center gap-2">
        <DollarSign className="w-4 h-4 text-muted-foreground" />
        <label className="block text-sm font-medium">
          Labor Cost per Hour
        </label>
      </div>
      <input
        type="number"
        name={`rate${process}`}
        value={inputs[`rate${process}` as keyof FormInputs]}
        onChange={handleInputChange}
        placeholder="e.g. 18"
        step="0.01"
        required
        className={inputClasses}
      />

      <div className="flex items-center gap-2">
        <Users className="w-4 h-4 text-muted-foreground" />
        <label className="block text-sm font-medium">
          # of Workers
        </label>
      </div>
      <input
        type="number"
        name={`workers${process}`}
        value={inputs[`workers${process}` as keyof FormInputs]}
        onChange={handleInputChange}
        placeholder="e.g. 2"
        step="1"
        required
        className={inputClasses}
      />

      <div className="flex items-center gap-2">
        <Package className="w-4 h-4 text-muted-foreground" />
        <label className="block text-sm font-medium">
          Consumable Cost per Unit
        </label>
      </div>
      <input
        type="number"
        name={`consumable${process}`}
        value={inputs[`consumable${process}` as keyof FormInputs]}
        onChange={handleInputChange}
        placeholder="e.g. 0.20"
        step="0.01"
        required
        className={inputClasses}
      />
    </div>
  );

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border border-border bg-secondary rounded-2xl shadow">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scales className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">Process Comparison</h1>
            </div>
            <p className="text-muted-foreground mb-8">
              Compare two different processes side by side to see time, labor, and material cost differences. 
              Helpful for evaluating jarring, filling, extraction methods, and more.
            </p>

            <form onSubmit={calculateResults} className="space-y-8">
              <div className="bg-muted rounded-lg p-4">
                <label className="block text-sm font-medium mb-2">
                  Units in Batch
                </label>
                <input
                  type="number"
                  name="units"
                  value={inputs.units}
                  onChange={handleInputChange}
                  placeholder="e.g. 100"
                  step="0.01"
                  required
                  className={inputClasses}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className={`border ${results?.comparison.recommend === "A" ? "border-primary" : "border-border"}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold">Process A</h2>
                      {results?.comparison.recommend === "A" ? (
                        <div className="flex items-center gap-1 text-primary">
                          <CheckCircle2 className="w-5 h-5" />
                          <span className="font-medium">Recommended</span>
                        </div>
                      ) : null}
                    </div>
                    <ProcessInputs process="A" />
                  </CardContent>
                </Card>

                <Card className={`border ${results?.comparison.recommend === "B" ? "border-primary" : "border-border"}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold">Process B</h2>
                      {results?.comparison.recommend === "B" ? (
                        <div className="flex items-center gap-1 text-primary">
                          <CheckCircle2 className="w-5 h-5" />
                          <span className="font-medium">Recommended</span>
                        </div>
                      ) : null}
                    </div>
                    <ProcessInputs process="B" />
                  </CardContent>
                </Card>
              </div>

              <Button type="submit" className="w-full md:w-auto">
                Compare Processes
              </Button>

              {results ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border border-border">
                      <CardContent className="p-4">
                        <h3 className="font-medium mb-4">Process A Summary</h3>
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            Total Time: <span className="text-foreground font-medium">{results.processA.totalTime.toFixed(1)} hrs</span>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Total Cost: <span className="text-foreground font-medium">${results.processA.totalCost.toFixed(2)}</span>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Cost per Unit: <span className="text-foreground font-medium">${results.processA.costPerUnit.toFixed(2)}</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border border-border">
                      <CardContent className="p-4">
                        <h3 className="font-medium mb-4">Process B Summary</h3>
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            Total Time: <span className="text-foreground font-medium">{results.processB.totalTime.toFixed(1)} hrs</span>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Total Cost: <span className="text-foreground font-medium">${results.processB.totalCost.toFixed(2)}</span>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Cost per Unit: <span className="text-foreground font-medium">${results.processB.costPerUnit.toFixed(2)}</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border border-border">
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-4">Comparison Results</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Time Difference</p>
                          <p className="text-xl font-bold text-primary">
                            {Math.abs(results.comparison.timeSaved).toFixed(1)} hrs
                            <span className="text-sm font-normal text-muted-foreground ml-2">
                              ({Math.abs(results.comparison.timeDiffPct).toFixed(1)}% {results.comparison.timeSaved > 0 ? "faster" : "slower"})
                            </span>
                          </p>
                        </div>

                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Cost Difference</p>
                          <p className="text-xl font-bold text-primary">
                            ${Math.abs(results.comparison.costSaved).toFixed(2)}
                            <span className="text-sm font-normal text-muted-foreground ml-2">
                              ({Math.abs(results.comparison.costDiffPct).toFixed(1)}% {results.comparison.costSaved > 0 ? "cheaper" : "more expensive"})
                            </span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-primary bg-primary/5">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold">
                          Recommendation: Process {results.comparison.recommend}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {results.comparison.recommend === "A" 
                          ? "Process A is more efficient in terms of overall cost and time."
                          : "Process B is more efficient in terms of overall cost and time."}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : null}
            </form>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Tips for Accurate Calculations</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use actual logged times from multiple batches for each process</li>
                <li>Always use the same unit count and product type when comparing runs</li>
                <li>Include all labor costs — even setup/cleanup — for both processes</li>
                <li>Keep consumable cost estimates realistic by reviewing invoices</li>
                <li>Double-check worker count inputs to reflect who's active per process</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}