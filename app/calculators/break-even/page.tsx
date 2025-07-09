"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Calculator, DollarSign, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logUsage } from "@/lib/logUsage";

interface FormInputs {
  totalCost: string;
  yieldPremium: string;
  yieldSmalls: string;
  yieldTrim: string;
  pricePremium: string;
  priceSmalls: string;
  priceTrim: string;
}

interface ProductType {
  name: string;
  yield: number;
  price: number;
  costShare: number;
  costPerLb: number;
  costPerGram: number;
  marginPerLb: number;
}

export default function BreakEvenCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    totalCost: "",
    yieldPremium: "",
    yieldSmalls: "",
    yieldTrim: "",
    pricePremium: "",
    priceSmalls: "",
    priceTrim: "",
  });

  const [results, setResults] = useState<ProductType[] | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const isValidInput = (value: string) => {
    const num = parseFloat(value);
    return value === "" || (num >= 0);
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    const values = {
      totalCost: parseFloat(inputs.totalCost) || 0,
      yieldPremium: parseFloat(inputs.yieldPremium) || 0,
      yieldSmalls: parseFloat(inputs.yieldSmalls) || 0,
      yieldTrim: parseFloat(inputs.yieldTrim) || 0,
      pricePremium: parseFloat(inputs.pricePremium) || 0,
      priceSmalls: parseFloat(inputs.priceSmalls) || 0,
      priceTrim: parseFloat(inputs.priceTrim) || 0,
    };

    const products = [
      { name: "Premium Flower", yield: values.yieldPremium, price: values.pricePremium },
      { name: "Smalls", yield: values.yieldSmalls, price: values.priceSmalls },
      { name: "Trim", yield: values.yieldTrim, price: values.priceTrim },
    ];

    const totalMarketValue = products.reduce((sum, product) => 
      sum + (product.yield * product.price), 0);

    const results = products.map(product => {
      const costShare = (product.yield * product.price) / totalMarketValue * values.totalCost;
      const costPerLb = product.yield > 0 ? costShare / product.yield : 0;
      const costPerGram = costPerLb / 453.592;
      const marginPerLb = product.price - costPerLb;

      return {
        name: product.name,
        yield: product.yield,
        price: product.price,
        costShare,
        costPerLb,
        costPerGram,
        marginPerLb,
      };
    });

    setResults(results);
    
    // Log usage
    logUsage("Break-even", inputs, results);
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-3 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground";

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border border-border bg-secondary rounded-2xl shadow p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-bold">Break-even Calculator</h1>
          </div>
          <p className="text-muted-foreground mb-8">
            Calculate your break-even point and cost allocation across different product grades.
            This tool helps you understand your true costs and optimal pricing strategy for each
            product category.
          </p>

          <form onSubmit={calculateResults} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Total Cost of Operation ($)
                  </div>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    type="number"
                    name="totalCost"
                    value={inputs.totalCost}
                    onChange={handleInputChange}
                    placeholder="50000"
                    className={`pl-8 ${inputClasses} ${
                      !isValidInput(inputs.totalCost) ? 'ring-1 ring-destructive' : ''
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4" />
                    Premium Flower Yield (lbs)
                  </div>
                </label>
                <input
                  type="number"
                  name="yieldPremium"
                  value={inputs.yieldPremium}
                  onChange={handleInputChange}
                  placeholder="0"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4" />
                    Smalls Yield (lbs)
                  </div>
                </label>
                <input
                  type="number"
                  name="yieldSmalls"
                  value={inputs.yieldSmalls}
                  onChange={handleInputChange}
                  placeholder="0"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4" />
                    Trim Yield (lbs)
                  </div>
                </label>
                <input
                  type="number"
                  name="yieldTrim"
                  value={inputs.yieldTrim}
                  onChange={handleInputChange}
                  placeholder="0"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Premium Flower Price ($/lb)
                  </div>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    type="number"
                    name="pricePremium"
                    value={inputs.pricePremium}
                    onChange={handleInputChange}
                    placeholder="0"
                    className={`pl-8 ${inputClasses}`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Smalls Price ($/lb)
                  </div>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    type="number"
                    name="priceSmalls"
                    value={inputs.priceSmalls}
                    onChange={handleInputChange}
                    placeholder="0"
                    className={`pl-8 ${inputClasses}`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Trim Price ($/lb)
                  </div>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    type="number"
                    name="priceTrim"
                    value={inputs.priceTrim}
                    onChange={handleInputChange}
                    placeholder="0"
                    className={`pl-8 ${inputClasses}`}
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full sm:w-auto">
              Calculate
            </Button>

            {results ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {results.map((result) => (
                  <div key={result.name} className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">{result.name}</h3>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-background rounded-lg p-3">
                        <p className="text-xs text-muted-foreground mb-1">Cost Share</p>
                        <p className="text-lg font-bold text-primary">
                          ${result.costShare.toFixed(2)}
                        </p>
                      </div>

                      <div className="bg-background rounded-lg p-3">
                        <p className="text-xs text-muted-foreground mb-1">Cost per lb</p>
                        <p className="text-lg font-bold text-primary">
                          ${result.costPerLb.toFixed(2)}
                        </p>
                      </div>

                      <div className="bg-background rounded-lg p-3">
                        <p className="text-xs text-muted-foreground mb-1">Cost per gram</p>
                        <p className="text-lg font-bold text-primary">
                          ${result.costPerGram.toFixed(2)}
                        </p>
                      </div>

                      <div className="bg-background rounded-lg p-3">
                        <p className="text-xs text-muted-foreground mb-1">Margin per lb</p>
                        <p className={`text-lg font-bold ${
                          result.marginPerLb >= 0 ? 'text-green-500' : 'text-red-500'
                        }`}>
                          ${result.marginPerLb.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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