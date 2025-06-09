"use client";

import React, { useState } from "react";
import Layout from "../../../components/Layout";
import { Calculator, DollarSign, Leaf, Scale } from "lucide-react";

interface CalculationResults {
  costPerGram: number;
  costPerPound: number;
  breakEvenPrice: number;
  profitMargin: number;
}

export default function BreakEvenCalculator() {
  const [inputs, setInputs] = useState({
    totalCosts: "",
    expectedYield: "",
    targetProfit: "",
    wastageRate: "5", // Default 5% wastage
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    const totalCosts = parseFloat(inputs.totalCosts) || 0;
    const expectedYield = parseFloat(inputs.expectedYield) || 0;
    const targetProfit = parseFloat(inputs.targetProfit) || 0;
    const wastageRate = parseFloat(inputs.wastageRate) || 0;

    // Account for wastage in yield
    const effectiveYield = expectedYield * (1 - wastageRate / 100);
    
    // Convert pounds to grams for calculations
    const yieldsInGrams = effectiveYield * 453.592; // 1 pound = 453.592 grams
    
    const costPerGram = totalCosts / yieldsInGrams;
    const costPerPound = totalCosts / effectiveYield;
    const breakEvenPrice = costPerPound;
    const profitMargin = (targetProfit - costPerPound) / targetProfit * 100;

    setResults({
      costPerGram,
      costPerPound,
      breakEvenPrice,
      profitMargin,
    });
  };

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto py-12">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-green-600" />
            <h1 className="text-3xl font-bold">Break-even Calculator</h1>
          </div>
          <p className="text-gray-600 max-w-3xl">
            Calculate your cost per gram, cost per pound, and break-even price point. This tool helps you
            understand your production costs and set competitive prices while maintaining profitability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-semibold mb-6">Input Values</h2>
            <form onSubmit={calculateResults} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Total Operation Costs
                  </div>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    name="totalCosts"
                    value={inputs.totalCosts}
                    onChange={handleInputChange}
                    placeholder="50000"
                    className="pl-8 w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4" />
                    Expected Yield (pounds)
                  </div>
                </label>
                <input
                  type="number"
                  name="expectedYield"
                  value={inputs.expectedYield}
                  onChange={handleInputChange}
                  placeholder="100"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4" />
                    Wastage Rate (%)
                  </div>
                </label>
                <input
                  type="number"
                  name="wastageRate"
                  value={inputs.wastageRate}
                  onChange={handleInputChange}
                  placeholder="5"
                  min="0"
                  max="100"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Target Price per Pound
                  </div>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    name="targetProfit"
                    value={inputs.targetProfit}
                    onChange={handleInputChange}
                    placeholder="1500"
                    className="pl-8 w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg shadow-sm transition duration-150 ease-in-out"
              >
                Calculate
              </button>
            </form>
          </div>

          {/* Results Display */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-semibold mb-6">Results</h2>
            {results ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Cost per Gram</p>
                    <p className="text-2xl font-bold text-green-600">
                      ${results.costPerGram.toFixed(2)}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Cost per Pound</p>
                    <p className="text-2xl font-bold text-green-600">
                      ${results.costPerPound.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Break-even Price</p>
                  <p className="text-2xl font-bold text-green-600">
                    ${results.breakEvenPrice.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Minimum price per pound to cover costs
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Profit Margin</p>
                  <p className={`text-2xl font-bold ${
                    results.profitMargin >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {results.profitMargin.toFixed(1)}%
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Based on target price per pound
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Enter values and calculate to see results</p>
              </div>
            )}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Tips for Accurate Calculations</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Include all operational costs: labor, utilities, supplies, etc.</li>
            <li>Account for seasonal yield variations in your estimates</li>
            <li>Consider market prices when setting target prices</li>
            <li>Regular recalculation is recommended as costs and yields change</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}