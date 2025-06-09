"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Droplet } from "lucide-react";

interface FormInputs {
  thcPercent: string;
  cannabisWeight: string;
  flowerType: string;
  decarbMethod: string;
  solventType: string;
  customSolventEfficiency: string;
  totalSolvent: string;
  amountUsed: string;
  servings: string;
}

interface CalculationResults {
  totalTHC: number;
  thcPerServing: number;
  potencyPerGram: number;
}

export default function InfusionDosageCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    thcPercent: "",
    cannabisWeight: "",
    flowerType: "Whole Flower",
    decarbMethod: "No",
    solventType: "Butter (~80%)",
    customSolventEfficiency: "80",
    totalSolvent: "",
    amountUsed: "",
    servings: "",
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
    setResults(null);
  };

  const handleSelectChange = (value: string, name: string) => {
    setInputs(prev => ({ ...prev, [name]: value }));
    setResults(null);
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    const decarbMap = {
      "Already Decarbed": 1.0,
      "Yes - Oven Method (~85%)": 0.85,
      "Yes - Mason Jar Method (~80%)": 0.80,
      "No": 0.877,
    };

    const solventMap = {
      "Butter (~80%)": 0.80,
      "Coconut Oil (~85%)": 0.85,
      "Olive Oil (~80%)": 0.80,
      "MCT Oil (~85%)": 0.85,
      "Alcohol (~95%)": 0.95,
      "Walnut Oil (~80%)": 0.80,
      "Avocado Oil (~80%)": 0.80,
      "Grapeseed Oil (~80%)": 0.80,
    };

    const values = {
      thcPercent: parseFloat(inputs.thcPercent) || 0,
      cannabisWeight: parseFloat(inputs.cannabisWeight) || 0,
      totalSolvent: parseFloat(inputs.totalSolvent) || 0,
      amountUsed: parseFloat(inputs.amountUsed) || 0,
      servings: parseFloat(inputs.servings) || 0,
      customSolventEfficiency: parseFloat(inputs.customSolventEfficiency) || 80,
    };

    const decarbFactor = decarbMap[inputs.decarbMethod as keyof typeof decarbMap] || 0.877;
    const infusionEfficiency = inputs.solventType === "Custom (enter % below)" 
      ? values.customSolventEfficiency / 100
      : solventMap[inputs.solventType as keyof typeof solventMap] || 0.80;

    // Calculate total THC in cannabis
    const totalTHCmg = values.cannabisWeight * (values.thcPercent / 100) * 1000 * decarbFactor;

    // THC infused into batch
    const infusedTHC = totalTHCmg * infusionEfficiency;

    // Potency per gram/ml of infused oil
    const potencyPerGram = infusedTHC / values.totalSolvent;

    // Total THC in recipe
    const thcInRecipe = potencyPerGram * values.amountUsed;

    // THC per serving
    const thcPerServing = thcInRecipe / values.servings;

    setResults({
      totalTHC: infusedTHC,
      thcPerServing,
      potencyPerGram,
    });
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-3 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground";

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border border-border bg-secondary rounded-2xl shadow">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Droplet className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">Infusion Dosage Calculator</h1>
            </div>
            <p className="text-muted-foreground mb-8">
              Calculate THC or CBD dosage per piece from your infused oil or butter. Includes optional decarb loss and portion size dosing.
            </p>

            <form onSubmit={calculateResults} className="space-y-8">
              <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    THC %
                  </label>
                  <input
                    type="number"
                    name="thcPercent"
                    value={inputs.thcPercent}
                    onChange={handleInputChange}
                    placeholder="Enter THC percentage"
                    step="0.01"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Cannabis Weight (grams)
                  </label>
                  <input
                    type="number"
                    name="cannabisWeight"
                    value={inputs.cannabisWeight}
                    onChange={handleInputChange}
                    placeholder="Enter weight in grams"
                    step="0.01"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Flower Type
                  </label>
                  <Select
                    value={inputs.flowerType}
                    onValueChange={(value) => handleSelectChange(value, 'flowerType')}
                  >
                    <SelectTrigger className="w-full bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Whole Flower">Whole Flower</SelectItem>
                      <SelectItem value="Trim">Trim</SelectItem>
                      <SelectItem value="Kief">Kief</SelectItem>
                      <SelectItem value="Concentrate">Concentrate (RSO, Distillate)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Decarb Method
                  </label>
                  <Select
                    value={inputs.decarbMethod}
                    onValueChange={(value) => handleSelectChange(value, 'decarbMethod')}
                  >
                    <SelectTrigger className="w-full bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="No">No</SelectItem>
                      <SelectItem value="Already Decarbed">Already Decarbed</SelectItem>
                      <SelectItem value="Yes - Oven Method (~85%)">Yes - Oven Method (~85%)</SelectItem>
                      <SelectItem value="Yes - Mason Jar Method (~80%)">Yes - Mason Jar Method (~80%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Solvent Type
                  </label>
                  <Select
                    value={inputs.solventType}
                    onValueChange={(value) => handleSelectChange(value, 'solventType')}
                  >
                    <SelectTrigger className="w-full bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Butter (~80%)">Butter (~80%)</SelectItem>
                      <SelectItem value="Coconut Oil (~85%)">Coconut Oil (~85%)</SelectItem>
                      <SelectItem value="Olive Oil (~80%)">Olive Oil (~80%)</SelectItem>
                      <SelectItem value="MCT Oil (~85%)">MCT Oil (~85%)</SelectItem>
                      <SelectItem value="Alcohol (~95%)">Alcohol (~95%)</SelectItem>
                      <SelectItem value="Walnut Oil (~80%)">Walnut Oil (~80%)</SelectItem>
                      <SelectItem value="Avocado Oil (~80%)">Avocado Oil (~80%)</SelectItem>
                      <SelectItem value="Grapeseed Oil (~80%)">Grapeseed Oil (~80%)</SelectItem>
                      <SelectItem value="Custom (enter % below)">Custom (enter % below)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {inputs.solventType === "Custom (enter % below)" && (
                  <div className="col-span-12 sm:col-span-6">
                    <label className="block text-sm font-medium mb-2">
                      Custom Solvent Efficiency (%)
                    </label>
                    <input
                      type="number"
                      name="customSolventEfficiency"
                      value={inputs.customSolventEfficiency}
                      onChange={handleInputChange}
                      placeholder="Enter efficiency percentage"
                      min="0"
                      max="100"
                      step="0.1"
                      required
                      className={inputClasses}
                    />
                  </div>
                )}

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Total Infused Solvent (g/ml)
                  </label>
                  <input
                    type="number"
                    name="totalSolvent"
                    value={inputs.totalSolvent}
                    onChange={handleInputChange}
                    placeholder="Enter total solvent amount"
                    step="0.01"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Amount Used in Recipe (g/ml)
                  </label>
                  <input
                    type="number"
                    name="amountUsed"
                    value={inputs.amountUsed}
                    onChange={handleInputChange}
                    placeholder="Enter amount used"
                    step="0.01"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Number of Servings
                  </label>
                  <input
                    type="number"
                    name="servings"
                    value={inputs.servings}
                    onChange={handleInputChange}
                    placeholder="Enter number of servings"
                    step="1"
                    required
                    className={inputClasses}
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
                  className="grid sm:grid-cols-3 gap-4"
                >
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Total THC in Batch</p>
                    <p className="text-2xl font-bold text-primary">
                      {results.totalTHC.toFixed(2)} mg
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">THC per Serving</p>
                    <p className="text-2xl font-bold text-primary">
                      {results.thcPerServing.toFixed(2)} mg
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Potency per g/ml</p>
                    <p className="text-2xl font-bold text-primary">
                      {results.potencyPerGram.toFixed(2)} mg
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