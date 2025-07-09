"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Calculator, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logUsage } from "@/lib/logUsage";

interface FormInputs {
  labor: string;
  rent: string;
  utilities: string;
  nutrients: string;
  supplies: string;
  trimCost: string;
  yieldGrams: string;
  plants: string;
  lights: string;
}

interface CalculationResults {
  costPerGram: number;
  costPerPound: number;
  costPerPlant: number | string;
  costPerLight: number | string;
}

export default function CostPerUnitCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    labor: "",
    rent: "",
    utilities: "",
    nutrients: "",
    supplies: "",
    trimCost: "",
    yieldGrams: "",
    plants: "",
    lights: "",
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    const values = {
      labor: parseFloat(inputs.labor) || 0,
      rent: parseFloat(inputs.rent) || 0,
      utilities: parseFloat(inputs.utilities) || 0,
      nutrients: parseFloat(inputs.nutrients) || 0,
      supplies: parseFloat(inputs.supplies) || 0,
      trimCost: parseFloat(inputs.trimCost) || 0,
      yieldGrams: parseFloat(inputs.yieldGrams) || 0,
      plants: parseFloat(inputs.plants) || 0,
      lights: parseFloat(inputs.lights) || 0,
    };

    const totalCost = values.labor + values.rent + values.utilities + 
                     values.nutrients + values.supplies + values.trimCost;
    
    const costPerGram = values.yieldGrams > 0 ? totalCost / values.yieldGrams : 0;
    const costPerPound = costPerGram * 453.592;
    const costPerPlant = values.plants > 0 ? totalCost / values.plants : "—";
    const costPerLight = values.lights > 0 ? totalCost / values.lights : "—";

    setResults({
      costPerGram,
      costPerPound,
      costPerPlant,
      costPerLight,
    });
    
    // Log usage
    logUsage("Cost Per Unit", inputs, {
      costPerGram,
      costPerPound,
      costPerPlant,
      costPerLight,
    });
  };

  const isValidInput = (value: string) => {
    const num = parseFloat(value);
    return value === "" || (num >= 0);
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-3 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground";

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border border-border bg-secondary rounded-2xl shadow p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-bold">Cost-Per-Unit Calculator</h1>
          </div>
          <p className="text-muted-foreground mb-8">
            Calculate your true cost per gram and pound of flower to make informed pricing decisions.
          </p>

          <form onSubmit={calculateResults} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Labor Cost ($)
                  </div>
                </label>
                <input
                  type="number"
                  name="labor"
                  value={inputs.labor}
                  onChange={handleInputChange}
                  placeholder="Enter labor cost"
                  step="0.01"
                  min="0"
                  className={`${inputClasses} ${
                    !isValidInput(inputs.labor) ? 'ring-1 ring-destructive' : ''
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Rent ($)
                  </div>
                </label>
                <input
                  type="number"
                  name="rent"
                  value={inputs.rent}
                  onChange={handleInputChange}
                  placeholder="Enter rent cost"
                  step="0.01"
                  min="0"
                  className={`${inputClasses} ${
                    !isValidInput(inputs.rent) ? 'ring-1 ring-destructive' : ''
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Utilities ($)
                  </div>
                </label>
                <input
                  type="number"
                  name="utilities"
                  value={inputs.utilities}
                  onChange={handleInputChange}
                  placeholder="Enter utilities cost"
                  step="0.01"
                  min="0"
                  className={`${inputClasses} ${
                    !isValidInput(inputs.utilities) ? 'ring-1 ring-destructive' : ''
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Nutrients ($)
                  </div>
                </label>
                <input
                  type="number"
                  name="nutrients"
                  value={inputs.nutrients}
                  onChange={handleInputChange}
                  placeholder="Enter nutrients cost"
                  step="0.01"
                  min="0"
                  className={`${inputClasses} ${
                    !isValidInput(inputs.nutrients) ? 'ring-1 ring-destructive' : ''
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Supplies ($)
                  </div>
                </label>
                <input
                  type="number"
                  name="supplies"
                  value={inputs.supplies}
                  onChange={handleInputChange}
                  placeholder="Enter supplies cost"
                  step="0.01"
                  min="0"
                  className={`${inputClasses} ${
                    !isValidInput(inputs.supplies) ? 'ring-1 ring-destructive' : ''
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Trim Costs ($)
                  </div>
                </label>
                <input
                  type="number"
                  name="trimCost"
                  value={inputs.trimCost}
                  onChange={handleInputChange}
                  placeholder="Enter trim costs"
                  step="0.01"
                  min="0"
                  className={`${inputClasses} ${
                    !isValidInput(inputs.trimCost) ? 'ring-1 ring-destructive' : ''
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Yield (grams)
                </label>
                <input
                  type="number"
                  name="yieldGrams"
                  value={inputs.yieldGrams}
                  onChange={handleInputChange}
                  placeholder="Enter yield in grams"
                  step="0.01"
                  min="0"
                  className={`${inputClasses} ${
                    !isValidInput(inputs.yieldGrams) ? 'ring-1 ring-destructive' : ''
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  # of Plants (optional)
                </label>
                <input
                  type="number"
                  name="plants"
                  value={inputs.plants}
                  onChange={handleInputChange}
                  placeholder="Enter number of plants"
                  step="1"
                  min="0"
                  className={`${inputClasses} ${
                    !isValidInput(inputs.plants) ? 'ring-1 ring-destructive' : ''
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  # of Lights (optional)
                </label>
                <input
                  type="number"
                  name="lights"
                  value={inputs.lights}
                  onChange={handleInputChange}
                  placeholder="Enter number of lights"
                  step="1"
                  min="0"
                  className={`${inputClasses} ${
                    !isValidInput(inputs.lights) ? 'ring-1 ring-destructive' : ''
                  }`}
                />
              </div>
            </div>

            <Button type="submit" className="w-full sm:w-auto">
              Calculate Cost Metrics
            </Button>

            {results ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Cost Metrics</h3>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-background rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Cost per Gram</p>
                      <p className="text-lg font-bold text-primary">
                        ${results.costPerGram.toFixed(2)}
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Cost per Pound</p>
                      <p className="text-lg font-bold text-primary">
                        ${results.costPerPound.toFixed(2)}
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Cost per Plant</p>
                      <p className="text-lg font-bold text-primary">
                        {typeof results.costPerPlant === 'number' 
                          ? `$${results.costPerPlant.toFixed(2)}` 
                          : results.costPerPlant}
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Cost per Light</p>
                      <p className="text-lg font-bold text-primary">
                        {typeof results.costPerLight === 'number' 
                          ? `$${results.costPerLight.toFixed(2)}` 
                          : results.costPerLight}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </form>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Tips for Accurate Calculations</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Include all operational costs: labor, utilities, supplies, etc.</li>
              <li>Account for seasonal yield variations in your estimates</li>
              <li>Consider market prices when setting target prices</li>
              <li>Regular recalculation is recommended as costs and yields change</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}