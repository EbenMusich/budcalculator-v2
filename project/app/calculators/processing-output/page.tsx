"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PackageCheck } from "lucide-react";

interface FormInputs {
  batchWeight: string;
  materialCost: string;
  gramsPerUnit: string;
  lossPercent: string;
  processingHours: string;
  laborRate: string;
  packagingCost: string;
  testingCost: string;
}

interface CalculationResults {
  adjustedWeight: number;
  units: number;
  laborCost: number;
  totalPackaging: number;
  totalBatchCost: number;
  costPerUnit: number;
}

export default function ProcessingOutputCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    batchWeight: "",
    materialCost: "",
    gramsPerUnit: "",
    lossPercent: "",
    processingHours: "",
    laborRate: "",
    packagingCost: "",
    testingCost: "",
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
      batchWeight: parseFloat(inputs.batchWeight) || 0,
      materialCost: parseFloat(inputs.materialCost) || 0,
      gramsPerUnit: parseFloat(inputs.gramsPerUnit) || 0,
      lossPercent: parseFloat(inputs.lossPercent) || 0,
      processingHours: parseFloat(inputs.processingHours) || 0,
      laborRate: parseFloat(inputs.laborRate) || 0,
      packagingCost: parseFloat(inputs.packagingCost) || 0,
      testingCost: parseFloat(inputs.testingCost) || 0,
    };

    // Adjust weight for loss
    const adjustedWeight = values.batchWeight * (1 - values.lossPercent / 100);

    // Units produced
    const units = adjustedWeight / values.gramsPerUnit;

    // Labor cost
    const laborCost = values.processingHours * values.laborRate;

    // Total packaging cost
    const totalPackaging = values.packagingCost * units;

    // Total cost
    const totalBatchCost = values.materialCost + laborCost + totalPackaging + values.testingCost;

    // Cost per unit
    const costPerUnit = totalBatchCost / units;

    setResults({
      adjustedWeight,
      units,
      laborCost,
      totalPackaging,
      totalBatchCost,
      costPerUnit,
    });
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-3 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground";

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border border-border bg-secondary rounded-2xl shadow">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <PackageCheck className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">Post-Processing Calculator</h1>
            </div>
            <p className="text-muted-foreground mb-8">
              Estimate the cost to produce a finished unit like a 1g jar or 2g vape, factoring in material cost, 
              labor, packaging, testing, and processing losses.
            </p>

            <form onSubmit={calculateResults} className="space-y-8">
              <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Batch Input Weight (grams)
                  </label>
                  <input
                    type="number"
                    name="batchWeight"
                    value={inputs.batchWeight}
                    onChange={handleInputChange}
                    placeholder="Enter batch weight"
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Input Material Cost ($)
                  </label>
                  <input
                    type="number"
                    name="materialCost"
                    value={inputs.materialCost}
                    onChange={handleInputChange}
                    placeholder="Enter material cost"
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Grams Per Unit
                  </label>
                  <input
                    type="number"
                    name="gramsPerUnit"
                    value={inputs.gramsPerUnit}
                    onChange={handleInputChange}
                    placeholder="e.g., 1 for 1g units"
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Estimated Loss (%)
                  </label>
                  <input
                    type="number"
                    name="lossPercent"
                    value={inputs.lossPercent}
                    onChange={handleInputChange}
                    placeholder="Enter loss percentage"
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Post-Processing Time (hours)
                  </label>
                  <input
                    type="number"
                    name="processingHours"
                    value={inputs.processingHours}
                    onChange={handleInputChange}
                    placeholder="Enter processing hours"
                    className={inputClasses}
                    required
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
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Packaging Cost Per Unit ($)
                  </label>
                  <input
                    type="number"
                    name="packagingCost"
                    value={inputs.packagingCost}
                    onChange={handleInputChange}
                    placeholder="Enter packaging cost"
                    className={inputClasses}
                    required
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
                    placeholder="Enter testing cost (optional)"
                    className={inputClasses}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full sm:w-auto mt-4">
                Calculate
              </Button>

              {results && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Adjusted Output Weight</p>
                    <p className="text-2xl font-bold text-primary">
                      {results.adjustedWeight.toFixed(2)} g
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Units Produced</p>
                    <p className="text-2xl font-bold text-primary">
                      {Math.floor(results.units)}
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Labor Cost</p>
                    <p className="text-2xl font-bold text-primary">
                      ${results.laborCost.toFixed(2)}
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Total Packaging Cost</p>
                    <p className="text-2xl font-bold text-primary">
                      ${results.totalPackaging.toFixed(2)}
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Total Batch Cost</p>
                    <p className="text-2xl font-bold text-primary">
                      ${results.totalBatchCost.toFixed(2)}
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Cost Per Unit</p>
                    <p className="text-2xl font-bold text-primary">
                      ${results.costPerUnit.toFixed(2)}
                    </p>
                  </div>
                </motion.div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}