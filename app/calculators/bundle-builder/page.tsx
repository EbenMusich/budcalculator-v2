"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, DollarSign } from "lucide-react";
import { logUsage } from "@/lib/logUsage";

interface BundleItem {
  name: string;
  cost: string;
  regularPrice: string;
}

interface FormInputs {
  bundleItems: BundleItem[];
  bundleSalePrice: string;
}

interface CalculationResults {
  totalCost: number;
  totalRegularPrice: number;
  customerSavings: number;
  profitMargin: number;
  profitAmount: number;
}

export default function BundleBuilder() {
  const [inputs, setInputs] = useState<FormInputs>({
    bundleItems: [
      { name: "", cost: "", regularPrice: "" },
      { name: "", cost: "", regularPrice: "" },
      { name: "", cost: "", regularPrice: "" },
    ],
    bundleSalePrice: "",
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
    setResults(null);
  };

  const handleBundleItemChange = (index: number, field: keyof BundleItem, value: string) => {
    setInputs(prev => ({
      ...prev,
      bundleItems: prev.bundleItems.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
    setResults(null);
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    const totalCost = inputs.bundleItems.reduce((sum, item) => 
      sum + (parseFloat(item.cost) || 0), 0
    );
    
    const totalRegularPrice = inputs.bundleItems.reduce((sum, item) => 
      sum + (parseFloat(item.regularPrice) || 0), 0
    );
    
    const bundleSalePrice = parseFloat(inputs.bundleSalePrice) || 0;
    const customerSavings = totalRegularPrice - bundleSalePrice;
    const profitAmount = bundleSalePrice - totalCost;
    const profitMargin = bundleSalePrice > 0 ? (profitAmount / bundleSalePrice) * 100 : 0;

    const calculationResults = {
      totalCost,
      totalRegularPrice,
      customerSavings,
      profitMargin,
      profitAmount,
    };

    setResults(calculationResults);

    // Log usage with all inputs and results
    logUsage("Bundle Builder", {
      bundleItems: inputs.bundleItems,
      bundleSalePrice: parseFloat(inputs.bundleSalePrice) || 0,
    }, calculationResults);
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-4 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground border-border";

  const isFormValid = () => {
    return parseFloat(inputs.bundleSalePrice) >= 0;
  };

  const formatCurrency = (value: number) => `$${value.toFixed(2)}`;
  const formatPercent = (value: number) => `${value.toFixed(2)}%`;

  return (
    <>
      <Head>
        <link rel="canonical" href="https://budcalculator.com/calculators/bundle-builder" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Bundle Builder Calculator",
            "url": "https://budcalculator.com/calculators/bundle-builder",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Mix and match cannabis SKUs to build compliant product bundles. Tracks unit counts and pricing across multiple categories.",
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
                <Package className="w-6 h-6 text-primary" />
                <h1 className="text-3xl font-bold">Bundle Builder + Margin Viewer</h1>
              </div>
              <p className="text-muted-foreground mb-8">
                Build product bundles, calculate total cost, and see your margin and customer savings instantly.
              </p>

              <form onSubmit={calculateResults} className="space-y-8">
                {/* Bundle Items */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Bundle Items</h2>
                  {inputs.bundleItems.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-border rounded-lg">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Item {index + 1} Name (Optional)
                        </label>
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => handleBundleItemChange(index, 'name', e.target.value)}
                          placeholder="Enter item name"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Cost ($)
                        </label>
                        <input
                          type="number"
                          value={item.cost}
                          onChange={(e) => handleBundleItemChange(index, 'cost', e.target.value)}
                          placeholder="Enter cost"
                          step="0.01"
                          min="0"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Regular Price ($)
                        </label>
                        <input
                          type="number"
                          value={item.regularPrice}
                          onChange={(e) => handleBundleItemChange(index, 'regularPrice', e.target.value)}
                          placeholder="Enter regular price"
                          step="0.01"
                          min="0"
                          className={inputClasses}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bundle Sale Price */}
                <div>
                  <label htmlFor="bundleSalePrice" className="block text-lg font-medium text-foreground mb-2">
                    Bundle Sale Price ($)
                  </label>
                  <input
                    id="bundleSalePrice"
                    type="number"
                    name="bundleSalePrice"
                    value={inputs.bundleSalePrice}
                    onChange={handleInputChange}
                    placeholder="Enter bundle sale price"
                    step="0.01"
                    min="0"
                    required
                    className={inputClasses}
                  />
                </div>

                {/* Tips Section */}
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">Tips for Bundle Building</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Bundles are a great way to increase average order value without heavy discounts.</li>
                    <li>Try combining a high-margin item with one or two popular low-margin items to boost total margin.</li>
                    <li>Always check that your bundle margin stays above 30% — avoid sacrificing too much profit.</li>
                    <li>Showing customers how much they "save" increases conversion. Aim for $5–$10 in savings while protecting margin.</li>
                    <li>Consider rotating bundles weekly or monthly to keep offers fresh and move seasonal inventory.</li>
                    <li>Don't forget to calculate tax separately if it's applied at the register — this calculator assumes pre-tax prices.</li>
                  </ul>
                </div>

                {/* Calculate Button */}
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={!isFormValid()}
                    className="px-8 py-3 text-lg font-medium"
                  >
                    Calculate
                  </Button>
                </div>
              </form>

              {/* Results Section */}
              {results && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-background rounded-lg border border-border"
                >
                  <h3 className="text-xl font-semibold mb-4">Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <div className="text-sm text-muted-foreground">Total Cost</div>
                      <div className="text-2xl font-bold text-foreground">{formatCurrency(results.totalCost)}</div>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <div className="text-sm text-muted-foreground">Total Regular Price</div>
                      <div className="text-2xl font-bold text-foreground">{formatCurrency(results.totalRegularPrice)}</div>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <div className="text-sm text-muted-foreground">Customer Savings</div>
                      <div className="text-2xl font-bold text-green-600">{formatCurrency(results.customerSavings)}</div>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <div className="text-sm text-muted-foreground">Profit Amount</div>
                      <div className="text-2xl font-bold text-blue-600">{formatCurrency(results.profitAmount)}</div>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <div className="text-sm text-muted-foreground">Profit Margin</div>
                      <div className="text-2xl font-bold text-blue-600">{formatPercent(results.profitMargin)}</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </Layout>
    </>
  );
} 