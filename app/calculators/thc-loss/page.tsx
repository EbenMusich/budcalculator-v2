"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ThermometerSun } from "lucide-react";
import { logUsage } from "@/lib/logUsage";

interface FormInputs {
  weight: string;
  thcPercent: string;
  decarbLoss: number[];
  infusionLoss: string;
  bakingLoss: string;
  numPieces: string;
}

interface CalculationResults {
  startingTHC: number;
  thcAfterDecarb: number;
  thcAfterInfusion: number;
  finalTHCInBatch: number;
  thcPerPiece: number;
  totalLoss: number;
}

export default function THCLossCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    weight: "",
    thcPercent: "",
    decarbLoss: [15],
    infusionLoss: "",
    bakingLoss: "",
    numPieces: "",
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
    setResults(null);
  };

  const handleSliderChange = (value: number[]) => {
    setInputs(prev => ({ ...prev, decarbLoss: value }));
    setResults(null);
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    const values = {
      weight: parseFloat(inputs.weight) || 0,
      thcPercent: parseFloat(inputs.thcPercent) || 0,
      decarbLoss: inputs.decarbLoss[0] || 15,
      infusionLoss: parseFloat(inputs.infusionLoss) || 0,
      bakingLoss: parseFloat(inputs.bakingLoss) || 0,
      numPieces: parseFloat(inputs.numPieces) || 0,
    };

    // 1. Convert THC % to milligrams of THC
    const startingTHC = values.weight * (values.thcPercent / 100) * 1000;

    // 2. Apply decarb loss
    const thcAfterDecarb = startingTHC * (1 - values.decarbLoss / 100);

    // 3. Apply infusion loss
    const thcAfterInfusion = thcAfterDecarb * (1 - values.infusionLoss / 100);

    // 4. Apply baking loss
    const finalTHCInBatch = thcAfterInfusion * (1 - values.bakingLoss / 100);

    // 5. Per piece dosage
    const thcPerPiece = finalTHCInBatch / values.numPieces;

    // 6. THC Loss (%)
    const totalLoss = 100 - (finalTHCInBatch / startingTHC) * 100;

    const calculationResults = {
      startingTHC,
      thcAfterDecarb,
      thcAfterInfusion,
      finalTHCInBatch,
      thcPerPiece,
      totalLoss,
    };

    setResults(calculationResults);

    // Log usage with all inputs and results
    logUsage("THC Loss", {
      weight: values.weight,
      thcPercent: values.thcPercent,
      decarbLoss: values.decarbLoss,
      infusionLoss: values.infusionLoss,
      bakingLoss: values.bakingLoss,
      numPieces: values.numPieces,
    }, {
      startingTHC,
      thcAfterDecarb,
      thcAfterInfusion,
      finalTHCInBatch,
      thcPerPiece,
      totalLoss,
    });
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-3 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground";

  const isFormValid = () => {
    return (
      parseFloat(inputs.weight) > 0 &&
      parseFloat(inputs.thcPercent) > 0 &&
      parseFloat(inputs.infusionLoss) >= 0 &&
      parseFloat(inputs.bakingLoss) >= 0 &&
      parseFloat(inputs.numPieces) > 0
    );
  };

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border border-border bg-secondary rounded-2xl shadow">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <ThermometerSun className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">THC Loss Calculator</h1>
            </div>
            <p className="text-muted-foreground mb-8">
              This calculator estimates how much THC is lost during the process of making edibles when using{" "}
              <span className="italic font-medium">flower as the starting material</span>. It accounts for 
              decarboxylation, infusion, and cooking losses to help you calculate final potency and yield.
            </p>

            <form onSubmit={calculateResults} className="space-y-8">
              <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Starting Material Weight (g)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={inputs.weight}
                    onChange={handleInputChange}
                    placeholder="Enter weight in grams"
                    step="0.01"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    THC Percentage of Flower (%)
                  </label>
                  <input
                    type="number"
                    name="thcPercent"
                    value={inputs.thcPercent}
                    onChange={handleInputChange}
                    placeholder="Enter THC percentage"
                    step="0.01"
                    min="0"
                    max="100"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12">
                  <label className="block text-sm font-medium mb-4">
                    Decarb Loss ({inputs.decarbLoss[0]}%)
                  </label>
                  <div className="px-3">
                    <Slider
                      value={inputs.decarbLoss}
                      onValueChange={handleSliderChange}
                      max={50}
                      min={0}
                      step={1}
                      className="w-full [&>span:first-child]:h-2 [&>span:first-child]:bg-muted-foreground/30 [&_[data-orientation=horizontal]]:bg-green-500 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[role=slider]]:bg-green-500 [&_[role=slider]]:border-2 [&_[role=slider]]:border-white [&_[role=slider]]:shadow-md"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0%</span>
                      <span>25%</span>
                      <span>50%</span>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Infusion Loss (%)
                  </label>
                  <input
                    type="number"
                    name="infusionLoss"
                    value={inputs.infusionLoss}
                    onChange={handleInputChange}
                    placeholder="Enter infusion loss percentage"
                    step="0.01"
                    min="0"
                    max="100"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Cooking/Baking Loss (%)
                  </label>
                  <input
                    type="number"
                    name="bakingLoss"
                    value={inputs.bakingLoss}
                    onChange={handleInputChange}
                    placeholder="Enter baking loss percentage"
                    step="0.01"
                    min="0"
                    max="100"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Number of Final Pieces
                  </label>
                  <input
                    type="number"
                    name="numPieces"
                    value={inputs.numPieces}
                    onChange={handleInputChange}
                    placeholder="Enter number of pieces"
                    step="1"
                    min="1"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full sm:w-auto"
                disabled={!isFormValid()}
              >
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
                      <p className="text-sm text-muted-foreground mb-1">Total Starting THC</p>
                      <p className="text-2xl font-bold text-primary">
                        {results.startingTHC.toFixed(2)} mg
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">THC After Decarb</p>
                      <p className="text-2xl font-bold text-primary">
                        {results.thcAfterDecarb.toFixed(2)} mg
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">THC After Infusion</p>
                      <p className="text-2xl font-bold text-primary">
                        {results.thcAfterInfusion.toFixed(2)} mg
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Final THC in Batch</p>
                      <p className="text-2xl font-bold text-primary">
                        {results.finalTHCInBatch.toFixed(2)} mg
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">THC Per Piece</p>
                      <p className="text-2xl font-bold text-primary">
                        {results.thcPerPiece.toFixed(2)} mg
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Total THC Loss</p>
                      <p className={`text-2xl font-bold ${
                        results.totalLoss > 50 ? 'text-destructive' : 'text-primary'
                      }`}>
                        {results.totalLoss.toFixed(2)}%
                      </p>
                    </div>
                  </div>

                  {results.totalLoss > 60 ? (
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                      <p className="text-destructive font-medium">High THC Loss Detected</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your total THC loss is quite high. Consider optimizing your decarboxylation, 
                        infusion, or baking processes to retain more potency.
                      </p>
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