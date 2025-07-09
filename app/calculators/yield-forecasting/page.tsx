"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Calculator, Lightbulb, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { logUsage } from "@/lib/logUsage";

type Mode = 'light' | 'plant' | 'canopy';
type Unit = 'g' | 'lb';

interface FormInputs {
  mode: Mode;
  harvestsPerYear: string;
  lights: string;
  yieldPerLight: string;
  unitLight: Unit;
  plants: string;
  yieldPerPlant: string;
  unitPlant: Unit;
  canopyArea: string;
  yieldPerArea: string;
  unitArea: Unit;
  trimRatio: string;
  salePrice: string;
}

interface CalculationResults {
  totalYield: number;
  usableFlower: number;
  trim: number;
  annualYield: number;
  annualRevenue: number | null;
}

export default function YieldForecastCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    mode: 'light',
    harvestsPerYear: "",
    lights: "",
    yieldPerLight: "",
    unitLight: 'lb',
    plants: "",
    yieldPerPlant: "",
    unitPlant: 'lb',
    canopyArea: "",
    yieldPerArea: "",
    unitArea: 'lb',
    trimRatio: "",
    salePrice: "",
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const isValidInput = (value: string) => {
    const num = parseFloat(value);
    return value === "" || (num >= 0);
  };

  const convertToLbs = (value: number, unit: Unit): number => {
    return unit === 'g' ? value / 453.592 : value;
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    const values = {
      harvestsPerYear: parseFloat(inputs.harvestsPerYear) || 0,
      lights: parseFloat(inputs.lights) || 0,
      yieldPerLight: parseFloat(inputs.yieldPerLight) || 0,
      plants: parseFloat(inputs.plants) || 0,
      yieldPerPlant: parseFloat(inputs.yieldPerPlant) || 0,
      canopyArea: parseFloat(inputs.canopyArea) || 0,
      yieldPerArea: parseFloat(inputs.yieldPerArea) || 0,
      trimRatio: parseFloat(inputs.trimRatio) || 0,
      salePrice: parseFloat(inputs.salePrice) || 0,
    };

    let baseYield = 0;

    switch (inputs.mode) {
      case 'light':
        baseYield = values.lights * convertToLbs(values.yieldPerLight, inputs.unitLight);
        break;
      case 'plant':
        baseYield = values.plants * convertToLbs(values.yieldPerPlant, inputs.unitPlant);
        break;
      case 'canopy':
        baseYield = values.canopyArea * convertToLbs(values.yieldPerArea, inputs.unitArea);
        break;
    }

    const trimRatio = values.trimRatio / 100;
    const usableFlower = baseYield * (1 - trimRatio);
    const trim = baseYield * trimRatio;
    const annualYield = baseYield * values.harvestsPerYear;
    const annualRevenue = values.salePrice ? annualYield * values.salePrice : null;

    const calculationResults = {
      totalYield: baseYield,
      usableFlower,
      trim,
      annualYield,
      annualRevenue,
    };

    setResults(calculationResults);

    // Log usage with all inputs and results
    logUsage("Yield Forecast", {
      mode: inputs.mode,
      harvestsPerYear: values.harvestsPerYear,
      lights: values.lights,
      yieldPerLight: values.yieldPerLight,
      unitLight: inputs.unitLight,
      plants: values.plants,
      yieldPerPlant: values.yieldPerPlant,
      unitPlant: inputs.unitPlant,
      canopyArea: values.canopyArea,
      yieldPerArea: values.yieldPerArea,
      unitArea: inputs.unitArea,
      trimRatio: values.trimRatio,
      salePrice: values.salePrice,
    }, {
      totalYield: baseYield,
      usableFlower,
      trim,
      annualYield,
      annualRevenue,
    });
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-3 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground";

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border border-border bg-secondary rounded-2xl shadow p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-bold">Yield Forecast Calculator</h1>
          </div>
          <p className="text-muted-foreground mb-8">
            Project your harvest yields based on different metrics and calculate potential revenue.
          </p>

          <form onSubmit={calculateResults} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Mode selector */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Select Forecasting Mode
                </label>
                <Select
                  value={inputs.mode}
                  onValueChange={(value) => handleSelectChange(value, 'mode')}
                >
                  <SelectTrigger className="w-full bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Per Light
                      </div>
                    </SelectItem>
                    <SelectItem value="plant">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Per Plant
                      </div>
                    </SelectItem>
                    <SelectItem value="canopy">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" />
                        Per Canopy Area
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Harvests per year */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Number of Harvests per Year
                </label>
                <input
                  type="number"
                  name="harvestsPerYear"
                  value={inputs.harvestsPerYear}
                  onChange={handleInputChange}
                  placeholder="e.g. 4"
                  className={inputClasses}
                />
              </div>

              {/* Per Light inputs */}
              {inputs.mode === 'light' && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Number of Lights
                      </div>
                    </label>
                    <input
                      type="number"
                      name="lights"
                      value={inputs.lights}
                      onChange={handleInputChange}
                      placeholder="e.g. 20"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Yield per Light
                    </label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="number"
                        name="yieldPerLight"
                        value={inputs.yieldPerLight}
                        onChange={handleInputChange}
                        placeholder="e.g. 1.5"
                        step="0.01"
                        className={`flex-1 ${inputClasses}`}
                      />
                      <Select
                        value={inputs.unitLight}
                        onValueChange={(value) => handleSelectChange(value, 'unitLight')}
                      >
                        <SelectTrigger className="w-20 bg-background">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="g">g</SelectItem>
                          <SelectItem value="lb">lb</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </>
              )}

              {/* Per Plant inputs */}
              {inputs.mode === 'plant' && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Number of Plants
                      </div>
                    </label>
                    <input
                      type="number"
                      name="plants"
                      value={inputs.plants}
                      onChange={handleInputChange}
                      placeholder="e.g. 100"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Yield per Plant
                    </label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="number"
                        name="yieldPerPlant"
                        value={inputs.yieldPerPlant}
                        onChange={handleInputChange}
                        placeholder="e.g. 0.5"
                        step="0.01"
                        className={`flex-1 ${inputClasses}`}
                      />
                      <Select
                        value={inputs.unitPlant}
                        onValueChange={(value) => handleSelectChange(value, 'unitPlant')}
                      >
                        <SelectTrigger className="w-20 bg-background">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="g">g</SelectItem>
                          <SelectItem value="lb">lb</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </>
              )}

              {/* Per Canopy inputs */}
              {inputs.mode === 'canopy' && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" />
                        Canopy Area (sq ft)
                      </div>
                    </label>
                    <input
                      type="number"
                      name="canopyArea"
                      value={inputs.canopyArea}
                      onChange={handleInputChange}
                      placeholder="e.g. 1000"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Yield per Sq Ft
                    </label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="number"
                        name="yieldPerArea"
                        value={inputs.yieldPerArea}
                        onChange={handleInputChange}
                        placeholder="e.g. 1.2"
                        step="0.01"
                        className={`flex-1 ${inputClasses}`}
                      />
                      <Select
                        value={inputs.unitArea}
                        onValueChange={(value) => handleSelectChange(value, 'unitArea')}
                      >
                        <SelectTrigger className="w-20 bg-background">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="g">g</SelectItem>
                          <SelectItem value="lb">lb</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </>
              )}

              {/* Trim ratio */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Trim Ratio (%) (optional)
                </label>
                <input
                  type="number"
                  name="trimRatio"
                  value={inputs.trimRatio}
                  onChange={handleInputChange}
                  placeholder="e.g. 15"
                  min="0"
                  max="100"
                  className={inputClasses}
                />
              </div>

              {/* Sale price */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Estimated Sale Price per Pound (optional)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    type="number"
                    name="salePrice"
                    value={inputs.salePrice}
                    onChange={handleInputChange}
                    placeholder="e.g. 1500"
                    step="0.01"
                    className={`pl-8 ${inputClasses}`}
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full sm:w-auto">
              Calculate
            </Button>

            {results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Yield Forecast Results</h3>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-background rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Total Yield (per harvest)</p>
                      <p className="text-lg font-bold text-primary">
                        {results.totalYield.toFixed(2)} lbs
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Usable Flower</p>
                      <p className="text-lg font-bold text-primary">
                        {results.usableFlower.toFixed(2)} lbs
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Trim</p>
                      <p className="text-lg font-bold text-primary">
                        {results.trim.toFixed(2)} lbs
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Annual Yield</p>
                      <p className="text-lg font-bold text-primary">
                        {results.annualYield.toFixed(2)} lbs
                      </p>
                    </div>

                    {results.annualRevenue !== null ? (
                      <div className="bg-background rounded-lg p-3 sm:col-span-2">
                        <p className="text-xs text-muted-foreground mb-1">Potential Annual Revenue</p>
                        <p className="text-xl font-bold text-primary">
                          ${results.annualRevenue.toFixed(2)}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            )}
          </form>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Tips for Accurate Forecasting</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use conservative estimates based on your actual historical yields</li>
              <li>Account for seasonal variations and environmental factors</li>
              <li>Factor in potential crop losses due to pests, disease, or quality issues</li>
              <li>Consider market price fluctuations when planning revenue projections</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}