"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, AlertTriangle } from "lucide-react";
import { logUsage } from "@/lib/logUsage";

interface FormInputs {
  batchSize: string;
  solventUsed: string;
  solventRecovered: string;
  solventCostPerLb: string;
  systemCost: string;
}

interface CalculationResults {
  recoveryEfficiency: number;
  solventLost: number;
  costOfLostSolvent: number;
  totalSolventCost: number;
  costPerGram: number;
}

export default function SolventRecoveryCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    batchSize: "",
    solventUsed: "",
    solventRecovered: "",
    solventCostPerLb: "",
    systemCost: "",
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
      batchSize: parseFloat(inputs.batchSize) || 0,
      solventUsed: parseFloat(inputs.solventUsed) || 0,
      solventRecovered: parseFloat(inputs.solventRecovered) || 0,
      solventCostPerLb: parseFloat(inputs.solventCostPerLb) || 0,
      systemCost: parseFloat(inputs.systemCost) || 0,
    };

    const recoveryEfficiency = (values.solventRecovered / values.solventUsed) * 100;
    const solventLost = values.solventUsed - values.solventRecovered;
    const costOfLostSolvent = solventLost * values.solventCostPerLb;
    const totalSolventCost = costOfLostSolvent + values.systemCost;
    const costPerGram = values.batchSize > 0 ? totalSolventCost / values.batchSize : 0;

    const calculationResults = {
      recoveryEfficiency,
      solventLost,
      costOfLostSolvent,
      totalSolventCost,
      costPerGram,
    };

    setResults(calculationResults);

    // Log usage with all inputs and results
    logUsage("Solvent Recovery", {
      batchSize: values.batchSize,
      solventUsed: values.solventUsed,
      solventRecovered: values.solventRecovered,
      solventCostPerLb: values.solventCostPerLb,
      systemCost: values.systemCost,
    }, {
      recoveryEfficiency,
      solventLost,
      costOfLostSolvent,
      totalSolventCost,
      costPerGram,
    });
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-3 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground";

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border border-border bg-secondary rounded-2xl shadow">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">Solvent Recovery Calculator</h1>
            </div>
            <p className="text-muted-foreground mb-8">
              Estimate your solvent recovery efficiency, loss, and related cost per batch. Track how much solvent is lost 
              and how it impacts your overall processing cost.
            </p>

            <form onSubmit={calculateResults} className="space-y-8">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Batch Size (g)
                  </label>
                  <input
                    type="number"
                    name="batchSize"
                    value={inputs.batchSize}
                    onChange={handleInputChange}
                    placeholder="Enter batch size"
                    step="0.01"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Solvent Used (lbs)
                  </label>
                  <input
                    type="number"
                    name="solventUsed"
                    value={inputs.solventUsed}
                    onChange={handleInputChange}
                    placeholder="Enter solvent amount"
                    step="0.01"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Solvent Recovered (lbs)
                  </label>
                  <input
                    type="number"
                    name="solventRecovered"
                    value={inputs.solventRecovered}
                    onChange={handleInputChange}
                    placeholder="Enter recovered amount"
                    step="0.01"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Solvent Cost per lb ($)
                  </label>
                  <input
                    type="number"
                    name="solventCostPerLb"
                    value={inputs.solventCostPerLb}
                    onChange={handleInputChange}
                    placeholder="Enter cost per lb"
                    step="0.01"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Recovery System Cost ($)
                  </label>
                  <input
                    type="number"
                    name="systemCost"
                    value={inputs.systemCost}
                    onChange={handleInputChange}
                    placeholder="Enter system cost"
                    step="0.01"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                Calculate
              </Button>

              {results ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Recovery Efficiency</p>
                      <p className="text-2xl font-bold text-primary">
                        {results.recoveryEfficiency.toFixed(2)}%
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Solvent Lost</p>
                      <p className="text-2xl font-bold text-primary">
                        {results.solventLost.toFixed(2)} lbs
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Cost of Lost Solvent</p>
                      <p className="text-2xl font-bold text-primary">
                        ${results.costOfLostSolvent.toFixed(2)}
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Total Solvent-Related Cost</p>
                      <p className="text-2xl font-bold text-primary">
                        ${results.totalSolventCost.toFixed(2)}
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Cost per Gram of Material</p>
                      <p className={`text-2xl font-bold ${
                        results.costPerGram > 1 ? 'text-destructive' : 'text-primary'
                      }`}>
                        ${results.costPerGram.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {results.recoveryEfficiency < 85 ? (
                    <div className="flex items-start gap-3 bg-destructive/10 text-destructive rounded-lg p-4">
                      <AlertTriangle className="w-5 h-5 mt-0.5" />
                      <div>
                        <p className="font-medium">Low Recovery Efficiency</p>
                        <p className="text-sm mt-1">
                          Your recovery rate is below the recommended 85%. Consider checking your recovery system 
                          for leaks or optimizing your process parameters.
                        </p>
                      </div>
                    </div>
                  ) : null}
                </motion.div>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}