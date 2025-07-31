"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FlaskConical } from "lucide-react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { logUsage } from "@/lib/logUsage";

type Mode = "simple" | "advanced";
type Material = "flower" | "concentrate";
type ConcentrateType = keyof typeof CONCENTRATES;

const CONCENTRATES = {
  "Pure THC Isolate": { thca: 0.99, massFactor: 1.0 },
  "Shatter":          { thca: 0.80, massFactor: 0.95 },
  "Live Resin":       { thca: 0.70, massFactor: 0.9 },
  "Crude Oil":        { thca: 0.60, massFactor: 0.85 },
} as const;

interface FormInputs {
  mode: Mode;
  material: Material;
  weight: string;
  thca: string;
  thcaPreset: string;
  cbda: string;
  efficiency: string;
  moistureLoss: string;
  degradation: string;
  concentrateType: ConcentrateType | "";
}

interface CalculationResults {
  activatedTHC: number;
  activatedCBD: number;
  finalPotency: number;
  finalWeight: number;
  moistureLoss: number;
  degradationLoss: number;
}

const THCA_PRESETS = {
  "Low": "12",
  "Medium": "18",
  "High": "25",
  "Premium": "30",
  "Custom": "custom"
};

export default function DecarboxylationCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    mode: "simple",
    material: "flower",
    weight: "",
    thca: "",
    thcaPreset: "",
    cbda: "",
    efficiency: "87",
    moistureLoss: "7",
    degradation: "",
    concentrateType: "",
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
    setResults(null);
  };

  const handleSelectChange = (value: string, name: string) => {
    setInputs(prev => {
      const newInputs = { ...prev, [name]: value };
      
      if (name === 'thcaPreset') {
        if (value === 'Custom') {
          newInputs.thca = '';
        } else {
          newInputs.thca = THCA_PRESETS[value as keyof typeof THCA_PRESETS];
        }
      }
      
      // Auto-fill THCA percentage when concentrate type changes
      if (name === 'concentrateType' && value in CONCENTRATES) {
        const concentrateInfo = CONCENTRATES[value as ConcentrateType];
        newInputs.thca = (concentrateInfo.thca * 100).toString();
      }
      
      return newInputs;
    });
    setResults(null);
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    const weight = parseFloat(inputs.weight) || 0;
    let thca = parseFloat(inputs.thca) || 0;
    const cbda = parseFloat(inputs.cbda) || 0;
    const efficiency = parseFloat(inputs.efficiency) || 87;
    const moistureLoss = parseFloat(inputs.moistureLoss) || 7;
    const degradation = parseFloat(inputs.degradation) || 0;

    // Apply concentrate type adjustments if applicable
    let adjustedWeight = weight;
    if (inputs.material === "concentrate" && inputs.concentrateType in CONCENTRATES) {
      const concentrateInfo = CONCENTRATES[inputs.concentrateType as ConcentrateType];
      adjustedWeight *= concentrateInfo.massFactor;
      thca = concentrateInfo.thca * 100; // Convert to percentage
    }

    // Convert percentages to decimals
    const thcaDecimal = thca / 100;
    const cbdaDecimal = cbda / 100;
    const efficiencyDecimal = efficiency / 100;
    const moistureLossDecimal = moistureLoss / 100;
    const degradationDecimal = degradation / 100;

    // Calculate weight after moisture loss
    const weightAfterMoisture = adjustedWeight * (1 - moistureLossDecimal);

    // Convert THCA to THC (molecular weight ratio ~0.877)
    const potentialTHC = thcaDecimal * 0.877;
    const potentialCBD = cbdaDecimal * 0.877;

    // Calculate activated amounts considering efficiency and degradation
    const activatedTHC = weightAfterMoisture * potentialTHC * efficiencyDecimal * (1 - degradationDecimal) * 1000; // mg
    const activatedCBD = weightAfterMoisture * potentialCBD * efficiencyDecimal * (1 - degradationDecimal) * 1000; // mg

    // Calculate final potency (total cannabinoids / final weight)
    const totalActiveCannabinoids = (activatedTHC + activatedCBD) / 1000; // back to grams
    const finalPotency = (totalActiveCannabinoids / weightAfterMoisture) * 100;

    setResults({
      activatedTHC,
      activatedCBD,
      finalPotency,
      finalWeight: weightAfterMoisture,
      moistureLoss: adjustedWeight - weightAfterMoisture,
      degradationLoss: totalActiveCannabinoids * degradationDecimal,
    });
    
    // Log usage
    logUsage("Decarboxylation Calculator", inputs, {
      activatedTHC,
      activatedCBD,
      finalPotency,
      finalWeight: weightAfterMoisture,
      moistureLoss: adjustedWeight - weightAfterMoisture,
      degradationLoss: totalActiveCannabinoids * degradationDecimal,
    });
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-3 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground";

  return (
    <>
      <Head>
        <link rel="canonical" href="https://budcalculator.com/calculators/decarboxylation-calculator" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Decarboxylation Calculator",
            "url": "https://budcalculator.com/calculators/decarboxylation-calculator",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Estimate THC activation and cannabinoid conversion with this cannabis decarb calculator. Build more accurate potencies by accounting for heat loss.",
            "creator": {
              "@type": "Organization",
              "name": "BUD Calculator"
            },
            "offers": {
              "@type": "Offer",
              "price": "0.00",
              "priceCurrency": "USD"
            }
          })
        }} />
      </Head>
      <Layout>
        <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="border border-border bg-secondary rounded-2xl shadow">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <FlaskConical className="w-6 h-6 text-primary" />
                <h1 className="text-3xl font-bold">Decarboxylation Calculator</h1>
              </div>
              <p className="text-muted-foreground mb-8">
                Use our decarboxylation calculator to estimate the activated THC and CBD in your cannabis material. Whether you're decarbing flower or concentrates, this tool helps you plan for extraction, infusion, or direct use by adjusting for efficiency, moisture loss, and degradation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <ToggleGroup.Root
                  type="single"
                  value={inputs.mode}
                  onValueChange={(value: Mode) => value && handleSelectChange(value, 'mode')}
                  className="flex rounded-lg border border-border bg-background p-1"
                >
                  <ToggleGroup.Item
                    value="simple"
                    className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      inputs.mode === 'simple' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    Simple
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="advanced"
                    className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      inputs.mode === 'advanced' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    Advanced
                  </ToggleGroup.Item>
                </ToggleGroup.Root>

                <ToggleGroup.Root
                  type="single"
                  value={inputs.material}
                  onValueChange={(value: Material) => value && handleSelectChange(value, 'material')}
                  className="flex rounded-lg border border-border bg-background p-1"
                >
                  <ToggleGroup.Item
                    value="flower"
                    className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      inputs.material === 'flower' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    Flower
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="concentrate"
                    className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      inputs.material === 'concentrate' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    Concentrate
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>

              <form onSubmit={calculateResults} className="space-y-8">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-6">
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

                  {inputs.material === "flower" ? (
                    <div className="col-span-12 md:col-span-6">
                      <label className="block text-sm font-medium mb-2">
                        THCA Content
                      </label>
                      <Select
                        value={inputs.thcaPreset || "Custom"}
                        onValueChange={(value) => handleSelectChange(value, 'thcaPreset')}
                      >
                        <SelectTrigger className="w-full bg-background">
                          <SelectValue placeholder="Select THCA content" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(THCA_PRESETS).map((preset) => (
                            <SelectItem key={preset} value={preset}>
                              {preset === "Custom" ? "Custom" : `${preset} (${THCA_PRESETS[preset as keyof typeof THCA_PRESETS]}%)`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {(inputs.thcaPreset === "Custom" || !inputs.thcaPreset) ? (
                        <input
                          type="number"
                          name="thca"
                          value={inputs.thca}
                          onChange={handleInputChange}
                          placeholder="Enter THCA percentage"
                          step="0.01"
                          required
                          className={`${inputClasses} mt-2`}
                        />
                      ) : null}
                    </div>
                  ) : null}

                  <div className="col-span-12 md:col-span-6">
                    <label className="block text-sm font-medium mb-2">
                      Decarb Efficiency (%)
                    </label>
                    <input
                      type="number"
                      name="efficiency"
                      value={inputs.efficiency}
                      onChange={handleInputChange}
                      placeholder="Default: 87%"
                      className={inputClasses}
                    />
                  </div>

                  {inputs.mode === "advanced" ? (
                    <>
                      <div className="col-span-12 md:col-span-6">
                        <label className="block text-sm font-medium mb-2">
                          Starting CBDA (%)
                        </label>
                        <input
                          type="number"
                          name="cbda"
                          value={inputs.cbda}
                          onChange={handleInputChange}
                          placeholder="Enter CBDA percentage (optional)"
                          step="0.01"
                          className={inputClasses}
                        />
                      </div>

                      <div className="col-span-12 md:col-span-6">
                        <label className="block text-sm font-medium mb-2">
                          Moisture Loss (%)
                        </label>
                        <input
                          type="number"
                          name="moistureLoss"
                          value={inputs.moistureLoss}
                          onChange={handleInputChange}
                          placeholder="Default: 7%"
                          className={inputClasses}
                        />
                      </div>

                      <div className="col-span-12 md:col-span-6">
                        <label className="block text-sm font-medium mb-2">
                          THC Degradation (%)
                        </label>
                        <input
                          type="number"
                          name="degradation"
                          value={inputs.degradation}
                          onChange={handleInputChange}
                          placeholder="Enter degradation percentage (optional)"
                          className={inputClasses}
                        />
                      </div>
                    </>
                  ) : null}

                  {inputs.material === "concentrate" ? (
                    <div className="col-span-12">
                      <label className="block text-sm font-medium mb-2">
                        Concentrate Type
                      </label>
                      <Select
                        value={inputs.concentrateType}
                        onValueChange={(value) => handleSelectChange(value, 'concentrateType')}
                      >
                        <SelectTrigger className="w-full bg-background">
                          <SelectValue placeholder="Select concentrate type" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(CONCENTRATES).map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  ) : null}
                </div>

                <Button type="submit" className="w-full md:w-auto">
                  Calculate
                </Button>

                {results ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid md:grid-cols-2 gap-4"
                  >
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Activated THC</p>
                      <p className="text-2xl font-bold text-primary">
                        {results.activatedTHC.toFixed(2)} mg
                      </p>
                    </div>

                    {inputs.mode === "advanced" ? (
                      <div className="bg-muted rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-1">Activated CBD</p>
                        <p className="text-2xl font-bold text-primary">
                          {results.activatedCBD.toFixed(2)} mg
                        </p>
                      </div>
                    ) : null}

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Final Potency</p>
                      <p className="text-2xl font-bold text-primary">
                        {results.finalPotency.toFixed(2)}%
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Final Weight</p>
                      <p className="text-2xl font-bold text-primary">
                        {results.finalWeight.toFixed(2)} g
                      </p>
                    </div>

                    {inputs.mode === "advanced" ? (
                      <>
                        <div className="bg-muted rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Moisture Loss</p>
                          <p className="text-2xl font-bold text-primary">
                            {results.moistureLoss.toFixed(2)} g
                          </p>
                        </div>

                        <div className="bg-muted rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1">Degradation Loss</p>
                          <p className="text-2xl font-bold text-primary">
                            {results.degradationLoss.toFixed(2)} g
                          </p>
                        </div>
                      </>
                    ) : null}
                  </motion.div>
                ) : null}
              </form>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Tips for Accurate Calculations</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Choose the correct decarb method: oven (240°F/115°C for 30-40 min) or sous vide (203°F/95°C for 90 min)</li>
                  <li>Understand that THCA converts to THC at ~87% efficiency under optimal conditions</li>
                  <li>Ensure oven temperature accuracy - even 10°F difference can significantly impact conversion rates</li>
                  <li>Avoid terpene loss by using lower temperatures and shorter times for flavor preservation</li>
                  <li>Adjust for different material types: trim (lower efficiency), kief (higher efficiency), concentrates (varies by type)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    </>
  );
}