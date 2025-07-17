"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Candy } from "lucide-react";
import { logUsage } from "@/lib/logUsage";

interface FormInputs {
  numGummies: string;
  dosagePerGummy: string;
  distillatePotency: string;
}

interface RecipeResults {
  totalTHCNeededMg: number;
  distillateRequired: number;
  recipe: {
    part1: Array<{ name: string; value: string }>;
    part2: Array<{ name: string; value: string }>;
    part3: Array<{ name: string; value: string }>;
  };
}

export default function GummyRecipeCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    numGummies: "",
    dosagePerGummy: "",
    distillatePotency: "",
  });

  const [results, setResults] = useState<RecipeResults | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
    setResults(null);
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    const numGummies = parseFloat(inputs.numGummies) || 0;
    const dosagePerGummy = parseFloat(inputs.dosagePerGummy) || 0;
    const distillatePotency = parseFloat(inputs.distillatePotency) || 0;

    const totalTHCNeededMg = numGummies * dosagePerGummy;
    const thcPerGram = distillatePotency / 100 * 1000;
    const distillateRequired = totalTHCNeededMg / thcPerGram;

    // Fixed base recipe = 1000 gummies at 10mg
    const scale = numGummies / 1000;
    const dosageScale = dosagePerGummy / 10;

    const multiply = (base: number) => (base * scale * dosageScale).toFixed(2);

    const recipe = {
      part1: [
        { name: "Water (Part 1)", value: multiply(446.15) },
        { name: "Sugar", value: multiply(1221.05) },
        { name: "Corn Syrup", value: multiply(528.34) },
      ],
      part2: [
        { name: "Water (Part 2)", value: multiply(680.97) },
        { name: "Gelatin", value: multiply(234.82) },
        { name: "Sorbitol", value: multiply(42.27) },
      ],
      part3: [
        { name: "Water (Flavoring)", value: multiply(50.49) },
        { name: "Citric Acid", value: multiply(25.83) },
        { name: "Flavoring", value: multiply(14.09) },
        { name: "Coloring", value: multiply(5.87) },
        { name: "THC Distillate Required", value: distillateRequired.toFixed(2) },
      ]
    };

    setResults({
      totalTHCNeededMg,
      distillateRequired,
      recipe,
    });
    
    // Log usage
    logUsage("Gummy Recipe Generator", inputs, {
      totalTHCNeededMg,
      distillateRequired,
      recipe,
    });
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-3 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground";

  const isFormValid = () => {
    return (
      parseFloat(inputs.numGummies) > 0 &&
      parseFloat(inputs.dosagePerGummy) > 0 &&
      parseFloat(inputs.distillatePotency) > 0
    );
  };

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border border-border bg-secondary rounded-2xl shadow">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Candy className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">Gummy Recipe Generator</h1>
            </div>
            <p className="text-muted-foreground mb-8">
              Enter your desired number of gummies and dosage per gummy to generate a full infused gummy recipe. 
              The calculator will scale all ingredients automatically based on lab-tested distillate potency.
            </p>

            <form onSubmit={calculateResults} className="space-y-8">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-4">
                  <label className="block text-sm font-medium mb-2">
                    Number of Gummies
                  </label>
                  <input
                    type="number"
                    name="numGummies"
                    value={inputs.numGummies}
                    onChange={handleInputChange}
                    placeholder="Enter number of gummies"
                    step="1"
                    min="1"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-4">
                  <label className="block text-sm font-medium mb-2">
                    Dosage per Gummy (mg)
                  </label>
                  <input
                    type="number"
                    name="dosagePerGummy"
                    value={inputs.dosagePerGummy}
                    onChange={handleInputChange}
                    placeholder="Enter dosage per gummy"
                    step="0.1"
                    min="0.1"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="col-span-12 sm:col-span-4">
                  <label className="block text-sm font-medium mb-2">
                    Distillate Potency (%)
                  </label>
                  <input
                    type="number"
                    name="distillatePotency"
                    value={inputs.distillatePotency}
                    onChange={handleInputChange}
                    placeholder="Enter distillate potency"
                    step="0.1"
                    min="1"
                    max="100"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full sm:w-auto mt-4"
                disabled={!isFormValid()}
              >
                Calculate
              </Button>

              {results ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <Card className="border border-border bg-muted/50">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        📋 Gummy Recipe
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-primary">Part 1 - Sugar Syrup Base</h3>
                          <div className="grid gap-2">
                            {results.recipe.part1.map((ingredient, index) => (
                              <div key={index} className="flex justify-between items-center py-2 px-3 bg-background rounded-lg">
                                <span className="font-medium">{ingredient.name}</span>
                                <span className="text-primary font-bold">{ingredient.value} g</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-primary">Part 2 - Gelatin Phase</h3>
                          <div className="grid gap-2">
                            {results.recipe.part2.map((ingredient, index) => (
                              <div key={index} className="flex justify-between items-center py-2 px-3 bg-background rounded-lg">
                                <span className="font-medium">{ingredient.name}</span>
                                <span className="text-primary font-bold">{ingredient.value} g</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-primary">Part 3 - Flavor & THC</h3>
                          <div className="grid gap-2">
                            {results.recipe.part3.map((ingredient, index) => (
                              <div key={index} className="flex justify-between items-center py-2 px-3 bg-background rounded-lg">
                                <span className={`font-medium ${ingredient.name.includes('THC') ? 'text-green-400' : ''}`}>
                                  {ingredient.name}
                                </span>
                                <span className={`font-bold ${ingredient.name.includes('THC') ? 'text-green-400' : 'text-primary'}`}>
                                  {ingredient.value} g
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                          <p className="text-sm">
                            <span className="font-medium">Total THC Needed:</span> {results.totalTHCNeededMg.toFixed(2)} mg
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border bg-muted/50">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        🧾 Infused Gummy Preparation Directions
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-primary">🧪 Equipment Needed</h3>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>Precision scale</li>
                            <li>Non-stick saucepan or double boiler</li>
                            <li>Immersion blender or high-shear mixer</li>
                            <li>Candy thermometer</li>
                            <li>Silicone spatula</li>
                            <li>Gummy molds</li>
                            <li>Syringe/dropper</li>
                            <li>Refrigerator</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-primary">🔥 Instructions</h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium mb-2">Part 1 – Sugar Syrup Base</h4>
                              <ol className="list-decimal list-inside space-y-1 text-muted-foreground ml-4">
                                <li>In a saucepan, combine: Water (Part 1), Sugar, Corn Syrup</li>
                                <li>Heat on medium-low to ~75–85°C, stir constantly until fully dissolved</li>
                                <li>Do not boil</li>
                              </ol>
                            </div>

                            <div>
                              <h4 className="font-medium mb-2">Part 2 – Gelatin Phase</h4>
                              <ol className="list-decimal list-inside space-y-1 text-muted-foreground ml-4" start={4}>
                                <li>In a separate container, bloom Gelatin in Water (Part 2) with Sorbitol</li>
                                <li>Let sit 5–10 min, then gently warm to ~60°C until liquid</li>
                              </ol>
                            </div>

                            <div>
                              <h4 className="font-medium mb-2">Part 3 – Flavor & THC</h4>
                              <ol className="list-decimal list-inside space-y-1 text-muted-foreground ml-4" start={6}>
                                <li>Add Water (Flavoring), Citric Acid, Flavoring, Coloring, and pre-warmed THC Distillate</li>
                                <li>Emulsify with blender (30–60 seconds)</li>
                              </ol>
                            </div>

                            <div>
                              <h4 className="font-medium mb-2">Final Blend</h4>
                              <ol className="list-decimal list-inside space-y-1 text-muted-foreground ml-4" start={8}>
                                <li>Combine all parts, stir slowly, hold mixture at ~70–75°C</li>
                                <li>Fill molds using syringe</li>
                                <li>Chill for 2 hours, cure 24–48 hrs (optional)</li>
                              </ol>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                          <p className="text-yellow-600 dark:text-yellow-400 font-medium text-sm">
                            ⚠️ Safety Note: Always ensure proper temperature control and use food-grade equipment. 
                            Test final products for potency and consistency before distribution.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : null}
            </form>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Tips for Accurate Calculations</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use lab-tested potency values for distillate or concentrate when possible</li>
                <li>Always measure distillate in milligrams or grams — not by volume</li>
                <li>Make sure the total batch size accounts for liquid loss during heating or mixing</li>
                <li>Test a small batch first if you're unsure how your mold or emulsifier behaves</li>
                <li>For consistent dosing, stir well before pouring and avoid overfilling molds</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}