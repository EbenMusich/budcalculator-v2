"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FlaskConical } from "lucide-react";

interface FormInputs {
  inputWeight: string;
  materialCostPerLb: string;
  solventUsed: string;
  solventCostPerLb: string;
  mediaCost: string;
  minutes: string;
  laborRate: string;
  equipmentCost: string;
  yield1: string;
  yield2: string;
}

interface CalculationResults {
  materialCostPerGram: number;
  materialCost: number;
  solventCost: number;
  laborCost: number;
  totalCost: number;
  totalOutput: number;
  costPerGram: number;
  costPerKg: number;
  costPerLiter: number;
  yieldPercent: number;
}

export default function ExtractionCostCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    inputWeight: "",
    materialCostPerLb: "",
    solventUsed: "",
    solventCostPerLb: "",
    mediaCost: "",
    minutes: "",
    laborRate: "",
    equipmentCost: "",
    yield1: "",
    yield2: "",
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
      inputWeight: parseFloat(inputs.inputWeight) || 0,
      materialCostPerLb: parseFloat(inputs.materialCostPerLb) || 0,
      solventUsed: parseFloat(inputs.solventUsed) || 0,
      solventCostPerLb: parseFloat(inputs.solventCostPerLb) || 0,
      mediaCost: parseFloat(inputs.mediaCost) || 0,
      minutes: parseFloat(inputs.minutes) || 0,
      laborRate: parseFloat(inputs.laborRate) || 0,
      equipmentCost: parseFloat(inputs.equipmentCost) || 0,
      yield1: parseFloat(inputs.yield1) || 0,
      yield2: parseFloat(inputs.yield2) || 0,
    };

    // Convert material cost per lb to per gram
    const materialCostPerGram = values.materialCostPerLb / 453.592;

    // Total material cost
    const materialCost = values.inputWeight * materialCostPerGram;

    // Total solvent cost
    const solventCost = values.solventUsed * values.solventCostPerLb;

    // Labor cost
    const laborCost = (values.minutes / 60) * values.laborRate;

    // Total cost
    const totalCost = materialCost + solventCost + values.mediaCost + laborCost + values.equipmentCost;

    // Total output (yield1 + yield2)
    const totalOutput = values.yield1 + values.yield2;

    // Results
    const costPerGram = totalOutput > 0 ? totalCost / totalOutput : 0;
    const costPerKg = costPerGram * 1000;
    const costPerLiter = costPerKg; // estimated for simplicity
    const yieldPercent = values.inputWeight > 0 ? (totalOutput / values.inputWeight) * 100 : 0;

    setResults({
      materialCostPerGram,
      materialCost,
      solventCost,
      laborCost,
      totalCost,
      totalOutput,
      costPerGram,
      costPerKg,
      costPerLiter,
      yieldPercent,
    });
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-3 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground";

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border border-border bg-secondary rounded-2xl shadow">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <FlaskConical className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">Extraction Cost Calculator</h1>
            </div>
            <p className="text-muted-foreground mb-8">
              This calculator helps estimate the cost of extracting concentrates from cannabis flower or trim. 
              Enter material, solvent, labor, and yield data to get per-gram, per-kg, and yield efficiency metrics.
            </p>

            <form onSubmit={calculateResults} className="space-y-8">
              <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Input Weight (g)
                  </label>
                  <input
                    type="number"
                    name="inputWeight"
                    value={inputs.inputWeight}
                    onChange={handleInputChange}
                    placeholder="Enter input weight"
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Material Cost per Pound ($)
                  </label>
                  <input
                    type="number"
                    name="materialCostPerLb"
                    value={inputs.materialCostPerLb}
                    onChange={handleInputChange}
                    placeholder="Enter material cost per lb"
                    className={inputClasses}
                    required
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
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Solvent Cost Per lb ($)
                  </label>
                  <input
                    type="number"
                    name="solventCostPerLb"
                    value={inputs.solventCostPerLb}
                    onChange={handleInputChange}
                    placeholder="Enter solvent cost per lb"
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Filter Media / Consumables ($)
                  </label>
                  <input
                    type="number"
                    name="mediaCost"
                    value={inputs.mediaCost}
                    onChange={handleInputChange}
                    placeholder="Enter consumables cost"
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Processing Time (minutes)
                  </label>
                  <input
                    type="number"
                    name="minutes"
                    value={inputs.minutes}
                    onChange={handleInputChange}
                    placeholder="Enter processing time"
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
                    placeholder="Enter labor rate"
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Equipment / Testing Cost ($)
                  </label>
                  <input
                    type="number"
                    name="equipmentCost"
                    value={inputs.equipmentCost}
                    onChange={handleInputChange}
                    placeholder="Enter equipment cost (optional)"
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Yield Type 1 (g)
                  </label>
                  <input
                    type="number"
                    name="yield1"
                    value={inputs.yield1}
                    onChange={handleInputChange}
                    placeholder="Enter primary yield"
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Yield Type 2 (g)
                  </label>
                  <input
                    type="number"
                    name="yield2"
                    value={inputs.yield2}
                    onChange={handleInputChange}
                    placeholder="Enter secondary yield"
                    className={inputClasses}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                Calculate
              </Button>

              {results && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Total Cost of Run</p>
                    <p className="text-2xl font-bold text-primary">
                      ${results.totalCost.toFixed(2)}
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Cost Per Gram</p>
                    <p className="text-2xl font-bold text-primary">
                      ${results.costPerGram.toFixed(2)}
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Yield Percentage</p>
                    <p className="text-2xl font-bold text-primary">
                      {results.yieldPercent.toFixed(2)}%
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Cost Per Kilogram</p>
                    <p className="text-2xl font-bold text-primary">
                      ${results.costPerKg.toFixed(2)}
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Cost Per Liter (est)</p>
                    <p className="text-2xl font-bold text-primary">
                      ${results.costPerLiter.toFixed(2)}
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