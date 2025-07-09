"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Lightbulb, Zap, Clock } from "lucide-react";
import { logUsage } from "@/lib/logUsage";

interface FormInputs {
  fixtureType: string;
  wattsPerFixture: string;
  numberOfFixtures: string;
  lightCycle: "veg" | "flower";
  hoursPerDay: string;
  daysPerMonth: string;
  electricityCost: string;
  growTime: string;
}

interface CalculationResults {
  dailyCost: number;
  monthlyCost: number;
  annualCost: number;
  totalCost: number;
  totalKwh: number;
}

export default function LightingCostCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    fixtureType: "",
    wattsPerFixture: "",
    numberOfFixtures: "",
    lightCycle: "flower",
    hoursPerDay: "12",
    daysPerMonth: "30",
    electricityCost: "",
    growTime: "12",
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleLightCycleChange = (value: "veg" | "flower") => {
    setInputs(prev => ({
      ...prev,
      lightCycle: value,
      hoursPerDay: value === "veg" ? "18" : "12"
    }));
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    const watts = parseFloat(inputs.wattsPerFixture) || 0;
    const fixtures = parseFloat(inputs.numberOfFixtures) || 0;
    const hours = parseFloat(inputs.hoursPerDay) || 0;
    const days = parseFloat(inputs.daysPerMonth) || 0;
    const rate = parseFloat(inputs.electricityCost) || 0;
    const months = parseFloat(inputs.growTime) || 12;

    const totalWatts = watts * fixtures;
    const dailyKwh = (totalWatts * hours) / 1000;
    const monthlyKwh = dailyKwh * days;
    const totalKwh = monthlyKwh * months;

    const dailyCost = dailyKwh * rate;
    const monthlyCost = monthlyKwh * rate;
    const annualCost = monthlyCost * 12;
    const totalCost = monthlyKwh * rate * months;

    setResults({
      dailyCost,
      monthlyCost,
      annualCost,
      totalCost,
      totalKwh
    });
    
    // Log usage
    logUsage("Lighting Cost", inputs, {
      dailyCost,
      monthlyCost,
      annualCost,
      totalCost,
      totalKwh
    });
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-3 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground";

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border border-border bg-secondary rounded-2xl shadow p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-bold">Lighting Cost Calculator</h1>
          </div>
          <p className="text-muted-foreground mb-8">
            Enter your fixture wattage, daily light hours, and power rate to estimate your lighting cost per month and per year.
          </p>

          <form onSubmit={calculateResults} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Fixture Type
                  </div>
                </label>
                <Select
                  value={inputs.fixtureType}
                  onValueChange={(value) => handleSelectChange(value, 'fixtureType')}
                >
                  <SelectTrigger className="w-full bg-background">
                    <SelectValue placeholder="Select fixture type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="led">LED</SelectItem>
                    <SelectItem value="hps">HPS</SelectItem>
                    <SelectItem value="cmh">CMH</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Watts per Fixture
                  </div>
                </label>
                <input
                  type="number"
                  name="wattsPerFixture"
                  value={inputs.wattsPerFixture}
                  onChange={handleInputChange}
                  placeholder="e.g. 650"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Number of Fixtures
                </label>
                <input
                  type="number"
                  name="numberOfFixtures"
                  value={inputs.numberOfFixtures}
                  onChange={handleInputChange}
                  placeholder="e.g. 100"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Light Cycle
                  </div>
                </label>
                <RadioGroup
                  value={inputs.lightCycle}
                  onValueChange={handleLightCycleChange}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="veg" id="veg" />
                    <label htmlFor="veg" className="text-sm">Veg (18 hrs)</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flower" id="flower" />
                    <label htmlFor="flower" className="text-sm">Flower (12 hrs)</label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Hours On Per Day
                </label>
                <input
                  type="number"
                  name="hoursPerDay"
                  value={inputs.hoursPerDay}
                  onChange={handleInputChange}
                  placeholder="e.g. 12"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Days On Per Month
                </label>
                <input
                  type="number"
                  name="daysPerMonth"
                  value={inputs.daysPerMonth}
                  onChange={handleInputChange}
                  placeholder="e.g. 30"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Electricity Cost ($/kWh)
                </label>
                <input
                  type="number"
                  name="electricityCost"
                  value={inputs.electricityCost}
                  onChange={handleInputChange}
                  placeholder="e.g. 0.12"
                  step="0.01"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Grow Time (Months)
                </label>
                <input
                  type="number"
                  name="growTime"
                  value={inputs.growTime}
                  onChange={handleInputChange}
                  placeholder="e.g. 12 (optional)"
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
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Lighting Cost Results</h3>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-background rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Daily Cost</p>
                      <p className="text-lg font-bold text-primary">
                        ${results.dailyCost.toFixed(2)}
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Monthly Cost</p>
                      <p className="text-lg font-bold text-primary">
                        ${results.monthlyCost.toFixed(2)}
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Annual Cost</p>
                      <p className="text-lg font-bold text-primary">
                        ${results.annualCost.toFixed(2)}
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Total kWh</p>
                      <p className="text-lg font-bold text-primary">
                        {results.totalKwh.toFixed(2)} kWh
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-3 sm:col-span-2">
                      <p className="text-xs text-muted-foreground mb-1">Total Cost (Full Grow)</p>
                      <p className="text-xl font-bold text-primary">
                        ${results.totalCost.toFixed(2)}
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
              <li>Check your electricity bill for the exact rate per kWh</li>
              <li>Consider time-of-use rates if your utility offers them</li>
              <li>Factor in cooling costs which can double electricity usage</li>
              <li>LED fixtures typically use 30-50% less power than HPS</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}