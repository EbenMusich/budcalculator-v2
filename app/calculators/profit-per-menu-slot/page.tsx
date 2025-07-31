"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Calculator, DollarSign, Package, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logUsage } from "@/lib/logUsage";

interface FormInputs {
  productName: string;
  unitsSoldPerWeek: string;
  marginPerUnit: string;
  shelfSlotsUsed: string;
  monthlySlotCost: string;
}

interface Results {
  marginVelocity: number;
  marginPerSlotPerDay: number;
  breakEvenUnitsMonth?: number;
  breakEvenUnitsWeek?: number;
  breakEvenUnitsDay?: number;
}

export default function ProfitPerMenuSlotCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    productName: "",
    unitsSoldPerWeek: "",
    marginPerUnit: "",
    shelfSlotsUsed: "1",
    monthlySlotCost: "",
  });

  const [results, setResults] = useState<Results | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const isValidInput = (value: string) => {
    const num = parseFloat(value);
    return value === "" || (num >= 0);
  };

  const canCalculate = () => {
    const unitsSold = parseFloat(inputs.unitsSoldPerWeek) || 0;
    const marginPerUnit = parseFloat(inputs.marginPerUnit) || 0;
    const shelfSlots = parseFloat(inputs.shelfSlotsUsed) || 0;
    
    return unitsSold > 0 && marginPerUnit > 0 && shelfSlots > 0;
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    const values = {
      productName: inputs.productName,
      unitsSoldPerWeek: parseFloat(inputs.unitsSoldPerWeek) || 0,
      marginPerUnit: parseFloat(inputs.marginPerUnit) || 0,
      shelfSlotsUsed: parseFloat(inputs.shelfSlotsUsed) || 1,
      monthlySlotCost: parseFloat(inputs.monthlySlotCost) || 0,
    };

    const marginVelocity = values.marginPerUnit * values.unitsSoldPerWeek;
    const marginPerSlotPerDay = values.shelfSlotsUsed > 0 
      ? marginVelocity / values.shelfSlotsUsed / 7 
      : 0;

    // Calculate break-even units if slot cost is provided and margin is positive
    let breakEvenUnitsMonth: number | undefined;
    let breakEvenUnitsWeek: number | undefined;
    let breakEvenUnitsDay: number | undefined;

    if (values.monthlySlotCost > 0 && values.marginPerUnit > 0) {
      breakEvenUnitsMonth = values.monthlySlotCost / values.marginPerUnit;
      breakEvenUnitsWeek = breakEvenUnitsMonth / 4;
      breakEvenUnitsDay = values.monthlySlotCost / values.marginPerUnit / 30;
    }

    const results: Results = {
      marginVelocity,
      marginPerSlotPerDay,
      breakEvenUnitsMonth,
      breakEvenUnitsWeek,
      breakEvenUnitsDay,
    };

    setResults(results);
    
    // Log usage
    logUsage("Profit-per-menu-slot", inputs, results);
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-3 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground";

  return (
    <>
      <Head>
        <link rel="canonical" href="https://budcalculator.com/calculators/profit-per-menu-slot" />
      </Head>
      <Layout>
        <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="border border-border bg-secondary rounded-2xl shadow p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">Profit per Menu Slot Calculator</h1>
            </div>
            <p className="text-muted-foreground mb-8">
              Calculate the profitability of your menu items based on their shelf space utilization.
              This tool helps you optimize your product mix by analyzing margin velocity and daily
              profit per shelf slot.
            </p>

            <form onSubmit={calculateResults} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      Product Name
                    </div>
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={inputs.productName}
                    onChange={handleInputChange}
                    placeholder="e.g., Premium Flower, Edibles, etc."
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Units Sold per Week
                    </div>
                  </label>
                  <input
                    type="number"
                    name="unitsSoldPerWeek"
                    value={inputs.unitsSoldPerWeek}
                    onChange={handleInputChange}
                    placeholder="0"
                    className={inputClasses}
                  />
                  {(parseFloat(inputs.unitsSoldPerWeek) || 0) <= 0 && inputs.unitsSoldPerWeek !== "" && (
                    <p className="text-xs text-destructive mt-1">Units sold per week must be greater than 0</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Margin per Unit ($)
                    </div>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <input
                      type="number"
                      name="marginPerUnit"
                      value={inputs.marginPerUnit}
                      onChange={handleInputChange}
                      placeholder="0"
                      className={`pl-8 ${inputClasses}`}
                    />
                  </div>
                  {(parseFloat(inputs.marginPerUnit) || 0) <= 0 && inputs.marginPerUnit !== "" && (
                    <p className="text-xs text-destructive mt-1">Margin per unit must be greater than 0</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      Shelf Slots Used
                    </div>
                  </label>
                  <input
                    type="number"
                    name="shelfSlotsUsed"
                    value={inputs.shelfSlotsUsed}
                    onChange={handleInputChange}
                    placeholder="1"
                    min="1"
                    className={inputClasses}
                  />
                  {(parseFloat(inputs.shelfSlotsUsed) || 0) <= 0 && inputs.shelfSlotsUsed !== "" && (
                    <p className="text-xs text-destructive mt-1">Shelf slots used must be greater than 0</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Monthly Slot Cost ($) (Optional)
                    </div>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <input
                      type="number"
                      name="monthlySlotCost"
                      value={inputs.monthlySlotCost}
                      onChange={handleInputChange}
                      placeholder="0"
                      className={`pl-8 ${inputClasses} ${
                        !isValidInput(inputs.monthlySlotCost) ? 'ring-1 ring-destructive' : ''
                      }`}
                    />
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full sm:w-auto"
                disabled={!canCalculate()}
              >
                Calculate
              </Button>

              {results ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      {inputs.productName || "Product"}
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-background rounded-lg p-3">
                        <p className="text-xs text-muted-foreground mb-1">Margin Velocity</p>
                        <p className="text-lg font-bold text-primary">
                          ${results.marginVelocity.toFixed(2)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Margin × Units per week
                        </p>
                      </div>

                      <div className="bg-background rounded-lg p-3">
                        <p className="text-xs text-muted-foreground mb-1">Margin per Slot per Day</p>
                        <p className="text-lg font-bold text-primary">
                          ${results.marginPerSlotPerDay.toFixed(2)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Daily profit per shelf slot
                        </p>
                      </div>
                    </div>

                    {/* Break-even Sales Targets */}
                    {results.breakEvenUnitsMonth !== undefined && (
                      <div className="bg-background rounded-lg p-4 border-l-4 border-orange-500">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-lg">📉</span>
                          <h4 className="font-semibold text-foreground">Break-even Sales Targets</h4>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Per Month:</span>
                            <span className="font-medium">{results.breakEvenUnitsMonth.toFixed(1)} units</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Per Week:</span>
                            <span className="font-medium">{results.breakEvenUnitsWeek!.toFixed(1)} units</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Per Day:</span>
                            <span className="font-medium">{results.breakEvenUnitsDay!.toFixed(1)} units</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : null}
            </form>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Tips for Menu Optimization</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Compare margin velocity across different products to identify top performers</li>
                <li>Use margin per slot per day to optimize shelf space allocation</li>
                <li>Consider seasonal variations in sales when planning your menu</li>
                <li>Regular analysis helps identify products that should be promoted or discontinued</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
} 