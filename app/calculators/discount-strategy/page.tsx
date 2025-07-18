"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { TrendingDown, DollarSign, Calculator } from "lucide-react";
import { logUsage } from "@/lib/logUsage";

interface FormInputs {
  productName: string;
  basePrice: string;
  cogs: string;
  discountTiers: string;
  volumeIncrease: string;
}

interface DiscountTier {
  discountPercent: number;
  discountedPrice: number;
  marginPerUnit: number;
  marginPercent: number;
  volumeIncrease: number;
  breakEvenVolume: number;
  totalRevenue: number;
  totalProfit: number;
}

export default function DiscountStrategySimulator() {
  const [inputs, setInputs] = useState<FormInputs>({
    productName: "",
    basePrice: "",
    cogs: "",
    discountTiers: "0,10,20,30",
    volumeIncrease: "",
  });

  const [results, setResults] = useState<DiscountTier[] | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
    setResults(null);
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    const basePrice = parseFloat(inputs.basePrice) || 0;
    const cogs = parseFloat(inputs.cogs) || 0;
    const volumeIncrease = parseFloat(inputs.volumeIncrease) || 0;
    
    // Parse discount tiers
    const discountTiers = inputs.discountTiers
      .split(',')
      .map(tier => parseFloat(tier.trim()))
      .filter(tier => !isNaN(tier) && tier >= 0);

    if (discountTiers.length === 0) {
      discountTiers.push(0);
    }

    const results = discountTiers.map(discountPercent => {
      const discountedPrice = basePrice * (1 - discountPercent / 100);
      const marginPerUnit = discountedPrice - cogs;
      const marginPercent = discountedPrice > 0 ? (marginPerUnit / discountedPrice) * 100 : 0;
      
      // Calculate volume increase for this tier
      const tierVolumeIncrease = volumeIncrease * (discountPercent / 100);
      
      // Calculate break-even volume (assuming we need to maintain same total profit as base price)
      const baseMargin = basePrice - cogs;
      const breakEvenVolume = baseMargin > 0 ? baseMargin / marginPerUnit : 0;
      
      // Calculate total revenue and profit with volume increase
      const totalRevenue = discountedPrice * (1 + tierVolumeIncrease / 100);
      const totalProfit = marginPerUnit * (1 + tierVolumeIncrease / 100);

      return {
        discountPercent,
        discountedPrice,
        marginPerUnit,
        marginPercent,
        volumeIncrease: tierVolumeIncrease,
        breakEvenVolume,
        totalRevenue,
        totalProfit,
      };
    });

    setResults(results);

    // Log usage
    logUsage("Discount Strategy", {
      productName: inputs.productName,
      basePrice: parseFloat(inputs.basePrice) || 0,
      cogs: parseFloat(inputs.cogs) || 0,
      discountTiers: inputs.discountTiers,
      volumeIncrease: parseFloat(inputs.volumeIncrease) || 0,
    }, results);
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-4 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground border-border";

  const isFormValid = () => {
    return (
      parseFloat(inputs.basePrice) > 0 &&
      parseFloat(inputs.cogs) >= 0 &&
      inputs.discountTiers.trim() !== ""
    );
  };

  const formatCurrency = (value: number) => `$${value.toFixed(2)}`;
  const formatPercent = (value: number) => `${value.toFixed(2)}%`;

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border border-border bg-secondary rounded-2xl shadow p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-4">
            <TrendingDown className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-bold">📉 Discount Strategy Simulator</h1>
          </div>
          <p className="text-muted-foreground mb-8">
            Model how different discount levels affect your margins and break-even sales volume.
          </p>

          <form onSubmit={calculateResults} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="productName" className="block text-lg font-medium text-foreground mb-2">
                  Product Name (Optional)
                </label>
                <input
                  id="productName"
                  type="text"
                  name="productName"
                  value={inputs.productName}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="basePrice" className="block text-lg font-medium text-foreground mb-2">
                  Base Price ($)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    id="basePrice"
                    type="number"
                    name="basePrice"
                    value={inputs.basePrice}
                    onChange={handleInputChange}
                    placeholder="Enter base price"
                    step="0.01"
                    min="0"
                    required
                    className={`pl-8 ${inputClasses}`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cogs" className="block text-lg font-medium text-foreground mb-2">
                  Cost of Goods Sold (COGS) ($)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    id="cogs"
                    type="number"
                    name="cogs"
                    value={inputs.cogs}
                    onChange={handleInputChange}
                    placeholder="Enter COGS"
                    step="0.01"
                    min="0"
                    required
                    className={`pl-8 ${inputClasses}`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="discountTiers" className="block text-lg font-medium text-foreground mb-2">
                  Discount Tiers (%)
                </label>
                <input
                  id="discountTiers"
                  type="text"
                  name="discountTiers"
                  value={inputs.discountTiers}
                  onChange={handleInputChange}
                  placeholder="0,10,20,30"
                  className={inputClasses}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Enter percentages separated by commas
                </p>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="volumeIncrease" className="block text-lg font-medium text-foreground mb-2">
                  Expected Volume Increase per Tier (%)
                </label>
                <input
                  id="volumeIncrease"
                  type="number"
                  name="volumeIncrease"
                  value={inputs.volumeIncrease}
                  onChange={handleInputChange}
                  placeholder="Enter expected volume increase"
                  step="0.01"
                  min="0"
                  className={inputClasses}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Optional: How much volume increase you expect per discount tier
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Tips for Accurate Calculations</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use realistic discount percentages based on your market and competition</li>
                <li>Consider customer acquisition costs when setting discount levels</li>
                <li>Account for inventory turnover and cash flow impact</li>
                <li>Monitor customer lifetime value when evaluating discount strategies</li>
                <li>Test different discount tiers to find optimal pricing</li>
              </ul>
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={!isFormValid()}
                className="px-8 py-3 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate
              </Button>
            </div>
          </form>

          {results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Discount Strategy Analysis</h2>
              
              <div className="grid gap-4">
                {results.map((tier, index) => (
                  <div key={index} className="bg-muted/50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-primary">
                        {tier.discountPercent}% Discount
                      </h3>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Discounted Price</p>
                        <p className="text-lg font-bold text-primary">
                          {formatCurrency(tier.discountedPrice)}
                        </p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-background rounded-lg p-3">
                        <p className="text-xs text-muted-foreground mb-1">Margin per Unit</p>
                        <p className="text-lg font-bold text-primary">
                          {formatCurrency(tier.marginPerUnit)}
                        </p>
                      </div>
                      <div className="bg-background rounded-lg p-3">
                        <p className="text-xs text-muted-foreground mb-1">Margin %</p>
                        <p className="text-lg font-bold text-primary">
                          {formatPercent(tier.marginPercent)}
                        </p>
                      </div>
                      <div className="bg-background rounded-lg p-3">
                        <p className="text-xs text-muted-foreground mb-1">Volume Increase</p>
                        <p className="text-lg font-bold text-primary">
                          {formatPercent(tier.volumeIncrease)}
                        </p>
                      </div>
                      <div className="bg-background rounded-lg p-3">
                        <p className="text-xs text-muted-foreground mb-1">Break-even Volume</p>
                        <p className={`text-lg font-bold ${
                          tier.breakEvenVolume > 0 ? 'text-green-500' : 'text-red-500'
                        }`}>
                          {tier.breakEvenVolume > 0 ? tier.breakEvenVolume.toFixed(2) : "N/A"}
                        </p>
                      </div>
                    </div>

                    {inputs.volumeIncrease && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-background rounded-lg p-3">
                            <p className="text-xs text-muted-foreground mb-1">Total Revenue</p>
                            <p className="text-lg font-bold text-green-600">
                              {formatCurrency(tier.totalRevenue)}
                            </p>
                          </div>
                          <div className="bg-background rounded-lg p-3">
                            <p className="text-xs text-muted-foreground mb-1">Total Profit</p>
                            <p className="text-lg font-bold text-green-600">
                              {formatCurrency(tier.totalProfit)}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
} 