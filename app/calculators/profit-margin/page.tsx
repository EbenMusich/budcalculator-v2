"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";
import { logUsage } from "@/lib/logUsage";

interface FormInputs {
  salePrice: string;
  discount: string;
  channelFee: string;
  packagingCost: string;
  ingredientCost: string;
  laborCost: string;
  testingCost: string;
  miscCost: string;
  unitsSold: string;
}

interface CalculationResults {
  adjustedSalePrice: number;
  totalCostPerUnit: number;
  profitPerUnit: number;
  profitMargin: number;
  markup: number;
  grossRevenue: number;
  totalCost: number;
  totalProfit: number;
  netMargin: number;
  breakevenUnits: number | string;
}

export default function ProfitMarginCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    salePrice: "",
    discount: "",
    channelFee: "",
    packagingCost: "",
    ingredientCost: "",
    laborCost: "",
    testingCost: "",
    miscCost: "",
    unitsSold: "1",
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
      salePrice: parseFloat(inputs.salePrice) || 0,
      discount: parseFloat(inputs.discount) || 0,
      channelFee: parseFloat(inputs.channelFee) || 0,
      packagingCost: parseFloat(inputs.packagingCost) || 0,
      ingredientCost: parseFloat(inputs.ingredientCost) || 0,
      laborCost: parseFloat(inputs.laborCost) || 0,
      testingCost: parseFloat(inputs.testingCost) || 0,
      miscCost: parseFloat(inputs.miscCost) || 0,
      unitsSold: parseFloat(inputs.unitsSold) || 1,
    };

    const adjustedSalePrice = values.salePrice - values.discount - values.channelFee;
    const totalCostPerUnit = values.packagingCost + values.ingredientCost + values.laborCost + values.testingCost + values.miscCost;
    const profitPerUnit = adjustedSalePrice - totalCostPerUnit;

    const profitMargin = adjustedSalePrice > 0 ? (profitPerUnit / adjustedSalePrice) * 100 : 0;
    const markup = totalCostPerUnit > 0 ? (profitPerUnit / totalCostPerUnit) * 100 : 0;

    const grossRevenue = adjustedSalePrice * values.unitsSold;
    const totalCost = totalCostPerUnit * values.unitsSold;
    const totalProfit = grossRevenue - totalCost;

    const netMargin = grossRevenue > 0 ? (totalProfit / grossRevenue) * 100 : 0;
    const breakevenUnits = profitPerUnit > 0 
      ? Math.ceil(totalCost / profitPerUnit)
      : "N/A";

    const calculationResults = {
      adjustedSalePrice,
      totalCostPerUnit,
      profitPerUnit,
      profitMargin,
      markup,
      grossRevenue,
      totalCost,
      totalProfit,
      netMargin,
      breakevenUnits,
    };

    setResults(calculationResults);

    // Log usage with all inputs and results
    logUsage("Profit Margin", {
      salePrice: values.salePrice,
      discount: values.discount,
      channelFee: values.channelFee,
      packagingCost: values.packagingCost,
      ingredientCost: values.ingredientCost,
      laborCost: values.laborCost,
      testingCost: values.testingCost,
      miscCost: values.miscCost,
      unitsSold: values.unitsSold,
    }, {
      adjustedSalePrice,
      totalCostPerUnit,
      profitPerUnit,
      profitMargin,
      markup,
      grossRevenue,
      totalCost,
      totalProfit,
      netMargin,
      breakevenUnits,
    });
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-4 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground border-border";

  const isFormValid = () => {
    return (
      parseFloat(inputs.salePrice) >= 0 &&
      parseFloat(inputs.discount) >= 0 &&
      parseFloat(inputs.channelFee) >= 0 &&
      parseFloat(inputs.packagingCost) >= 0 &&
      parseFloat(inputs.ingredientCost) >= 0 &&
      parseFloat(inputs.laborCost) >= 0 &&
      parseFloat(inputs.testingCost) >= 0 &&
      parseFloat(inputs.miscCost) >= 0 &&
      parseFloat(inputs.unitsSold) > 0
    );
  };

  const formatCurrency = (value: number) => `$${value.toFixed(2)}`;
  const formatPercent = (value: number) => `${value.toFixed(2)}%`;

  return (
    <>
      <Head>
        <link rel="canonical" href="https://budcalculator.com/calculators/profit-margin" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Profit Margin Calculator",
            "url": "https://budcalculator.com/calculators/profit-margin",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Calculate cannabis profit margins based on cost and sale price. Helps operators optimize pricing strategies.",
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
        <section className="max-w-5xl mx-auto px-6 py-12 space-y-6">
          <Card className="border border-border bg-secondary rounded-2xl shadow">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
                <h1 className="text-3xl font-bold">Profit Margin Calculator</h1>
              </div>
              <p className="text-muted-foreground mb-8">
                Estimate your per-unit and total profit margins based on all cost inputs, discounts, taxes, and fees. 
                Track breakeven points and overall profitability.
              </p>

              <form onSubmit={calculateResults} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label htmlFor="salePrice" className="block text-lg font-medium text-foreground mb-2">
                      Product Sale Price ($)
                    </label>
                    <input
                      id="salePrice"
                      type="number"
                      name="salePrice"
                      value={inputs.salePrice}
                      onChange={handleInputChange}
                      placeholder="Enter sale price"
                      step="0.01"
                      min="0"
                      required
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="discount" className="block text-lg font-medium text-foreground mb-2">
                      Discount Per Unit ($)
                    </label>
                    <input
                      id="discount"
                      type="number"
                      name="discount"
                      value={inputs.discount}
                      onChange={handleInputChange}
                      placeholder="Enter discount amount"
                      step="0.01"
                      min="0"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="channelFee" className="block text-lg font-medium text-foreground mb-2">
                      Sales Channel Fee ($)
                    </label>
                    <input
                      id="channelFee"
                      type="number"
                      name="channelFee"
                      value={inputs.channelFee}
                      onChange={handleInputChange}
                      placeholder="Enter channel fee"
                      step="0.01"
                      min="0"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="packagingCost" className="block text-lg font-medium text-foreground mb-2">
                      Packaging Cost ($)
                    </label>
                    <input
                      id="packagingCost"
                      type="number"
                      name="packagingCost"
                      value={inputs.packagingCost}
                      onChange={handleInputChange}
                      placeholder="Enter packaging cost"
                      step="0.01"
                      min="0"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="ingredientCost" className="block text-lg font-medium text-foreground mb-2">
                      Ingredient Cost ($)
                    </label>
                    <input
                      id="ingredientCost"
                      type="number"
                      name="ingredientCost"
                      value={inputs.ingredientCost}
                      onChange={handleInputChange}
                      placeholder="Enter ingredient cost"
                      step="0.01"
                      min="0"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="laborCost" className="block text-lg font-medium text-foreground mb-2">
                      Labor Cost ($)
                    </label>
                    <input
                      id="laborCost"
                      type="number"
                      name="laborCost"
                      value={inputs.laborCost}
                      onChange={handleInputChange}
                      placeholder="Enter labor cost"
                      step="0.01"
                      min="0"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="testingCost" className="block text-lg font-medium text-foreground mb-2">
                      Testing Cost ($)
                    </label>
                    <input
                      id="testingCost"
                      type="number"
                      name="testingCost"
                      value={inputs.testingCost}
                      onChange={handleInputChange}
                      placeholder="Enter testing cost"
                      step="0.01"
                      min="0"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="miscCost" className="block text-lg font-medium text-foreground mb-2">
                      Marketing/Other Cost ($)
                    </label>
                    <input
                      id="miscCost"
                      type="number"
                      name="miscCost"
                      value={inputs.miscCost}
                      onChange={handleInputChange}
                      placeholder="Enter other costs"
                      step="0.01"
                      min="0"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="unitsSold" className="block text-lg font-medium text-foreground mb-2">
                      Units Sold (optional)
                    </label>
                    <input
                      id="unitsSold"
                      type="number"
                      name="unitsSold"
                      value={inputs.unitsSold}
                      onChange={handleInputChange}
                      placeholder="Enter units sold"
                      step="1"
                      min="1"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-md shadow transition"
                  disabled={!isFormValid()}
                >
                  Calculate
                </Button>

                {results ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 mt-8"
                  >
                    <Card className="border border-border bg-muted/50">
                      <CardContent className="p-6">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="bg-background rounded-lg p-4">
                            <p className="text-sm text-muted-foreground mb-1">Adjusted Sale Price</p>
                            <p className="text-2xl font-bold text-primary">
                              {formatCurrency(results.adjustedSalePrice)}
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-4">
                            <p className="text-sm text-muted-foreground mb-1">Sales Channel Fee</p>
                            <p className="text-2xl font-bold text-primary">
                              {formatCurrency(parseFloat(inputs.channelFee) || 0)}
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-4">
                            <p className="text-sm text-muted-foreground mb-1">Total Cost per Unit</p>
                            <p className="text-2xl font-bold text-primary">
                              {formatCurrency(results.totalCostPerUnit)}
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-4">
                            <p className="text-sm text-muted-foreground mb-1">Profit per Unit</p>
                            <p className={`text-2xl font-bold ${
                              results.profitPerUnit >= 0 ? 'text-green-500' : 'text-red-500'
                            }`}>
                              {formatCurrency(results.profitPerUnit)}
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-4">
                            <p className="text-sm text-muted-foreground mb-1">Profit Margin</p>
                            <p className={`text-2xl font-bold ${
                              results.profitMargin >= 0 ? 'text-green-500' : 'text-red-500'
                            }`}>
                              {formatPercent(results.profitMargin)}
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-4">
                            <p className="text-sm text-muted-foreground mb-1">Markup</p>
                            <p className={`text-2xl font-bold ${
                              results.markup >= 0 ? 'text-green-500' : 'text-red-500'
                            }`}>
                              {formatPercent(results.markup)}
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-4">
                            <p className="text-sm text-muted-foreground mb-1">Gross Revenue</p>
                            <p className="text-2xl font-bold text-primary">
                              {formatCurrency(results.grossRevenue)}
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-4">
                            <p className="text-sm text-muted-foreground mb-1">Total Cost</p>
                            <p className="text-2xl font-bold text-primary">
                              {formatCurrency(results.totalCost)}
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-4">
                            <p className="text-sm text-muted-foreground mb-1">Total Profit</p>
                            <p className={`text-2xl font-bold ${
                              results.totalProfit >= 0 ? 'text-green-500' : 'text-red-500'
                            }`}>
                              {formatCurrency(results.totalProfit)}
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-4">
                            <p className="text-sm text-muted-foreground mb-1">Net Margin</p>
                            <p className={`text-2xl font-bold ${
                              results.netMargin >= 0 ? 'text-green-500' : 'text-red-500'
                            }`}>
                              {formatPercent(results.netMargin)}
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-4">
                            <p className="text-sm text-muted-foreground mb-1">Breakeven Units</p>
                            <p className="text-2xl font-bold text-primary">
                              {typeof results.breakevenUnits === 'number' 
                                ? `${results.breakevenUnits} units`
                                : results.breakevenUnits}
                            </p>
                          </div>
                        </div>

                        {results.profitMargin < 0 ? (
                          <div className="mt-6 bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                            <p className="text-destructive font-medium">Negative Profit Margin</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              Your costs exceed your adjusted sale price. Consider reducing costs or increasing your sale price.
                            </p>
                          </div>
                        ) : null}

                        {results.profitMargin >= 0 && results.profitMargin < 10 ? (
                          <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                            <p className="text-yellow-600 dark:text-yellow-400 font-medium">Low Profit Margin</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              Your profit margin is below 10%. Consider optimizing costs or pricing strategy.
                            </p>
                          </div>
                        ) : null}

                        {results.profitMargin >= 20 ? (
                          <div className="mt-6 bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <p className="text-green-600 dark:text-green-400 font-medium">Healthy Profit Margin</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              Your profit margin is above 20%, indicating a healthy business model.
                            </p>
                          </div>
                        ) : null}
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : null}
              </form>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Tips for Accurate Calculations</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Include all cost components: base COGS, packaging, testing, labor, and taxes</li>
                  <li>Adjust sale price to reflect discounts and real-world channel fees</li>
                  <li>Use average values across multiple batches for more reliable margins</li>
                  <li>Don't forget to include excise or compliance costs where applicable</li>
                  <li>Recalculate regularly — market prices and ingredient costs change fast</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </Layout>
    </>
  );
}