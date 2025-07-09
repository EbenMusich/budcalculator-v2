"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Plus, Trash2 } from "lucide-react";
import { logUsage } from "@/lib/logUsage";

interface SKU {
  id: string;
  productName: string;
  weight: string;
  timePerUnit: string;
  salePrice: string;
  manualPercent: string;
}

interface FormInputs {
  totalCost: string;
  allocationMethod: "weight" | "time" | "manual" | "";
  skus: SKU[];
}

interface SKUResult {
  id: string;
  productName: string;
  percentShare: number;
  allocatedCost: number;
  unitsProduced: number;
  costPerUnit: number;
  marginPerUnit: number;
  totalRevenue: number;
  totalTime: number;
  costPerHour: number;
}

export default function CostAllocationCalculator() {
  const [inputs, setInputs] = useState<FormInputs>({
    totalCost: "",
    allocationMethod: "",
    skus: [
      { id: "1", productName: "", weight: "", timePerUnit: "", salePrice: "", manualPercent: "" },
      { id: "2", productName: "", weight: "", timePerUnit: "", salePrice: "", manualPercent: "" },
      { id: "3", productName: "", weight: "", timePerUnit: "", salePrice: "", manualPercent: "" },
    ],
  });

  const [results, setResults] = useState<SKUResult[] | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
    setResults(null);
  };

  const handleSKUChange = (id: string, field: keyof SKU, value: string) => {
    setInputs(prev => ({
      ...prev,
      skus: prev.skus.map(sku => 
        sku.id === id ? { ...sku, [field]: value } : sku
      )
    }));
    setResults(null);
  };

  const handleMethodChange = (value: "weight" | "time" | "manual") => {
    setInputs(prev => ({ ...prev, allocationMethod: value }));
    setResults(null);
  };

  const addSKU = () => {
    if (inputs.skus.length < 15) {
      const newId = (inputs.skus.length + 1).toString();
      setInputs(prev => ({
        ...prev,
        skus: [...prev.skus, {
          id: newId,
          productName: "",
          weight: "",
          timePerUnit: "",
          salePrice: "",
          manualPercent: "",
        }]
      }));
    }
  };

  const removeSKU = (id: string) => {
    if (inputs.skus.length > 1) {
      setInputs(prev => ({
        ...prev,
        skus: prev.skus.filter(sku => sku.id !== id)
      }));
      setResults(null);
    }
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    
    const totalCost = parseFloat(inputs.totalCost) || 0;
    const validSKUs = inputs.skus.filter(sku => 
      sku.productName.trim() && 
      parseFloat(sku.weight) > 0 && 
      parseFloat(sku.salePrice) > 0
    );

    if (validSKUs.length === 0) return;

    let skuResults: SKUResult[] = [];

    if (inputs.allocationMethod === "weight") {
      const totalWeight = validSKUs.reduce((sum, sku) => sum + parseFloat(sku.weight), 0);
      
      skuResults = validSKUs.map(sku => {
        const weight = parseFloat(sku.weight);
        const timePerUnit = parseFloat(sku.timePerUnit) || 0;
        const salePrice = parseFloat(sku.salePrice);
        
        const percentShare = (weight / totalWeight) * 100;
        const allocatedCost = (weight / totalWeight) * totalCost;
        const unitsProduced = weight; // 1g = 1 unit for weight-based
        const costPerUnit = allocatedCost / unitsProduced;
        const marginPerUnit = salePrice - costPerUnit;
        const totalRevenue = salePrice * unitsProduced;
        const totalTime = timePerUnit * unitsProduced;
        const costPerHour = totalTime > 0 ? allocatedCost / (totalTime / 60) : 0;

        return {
          id: sku.id,
          productName: sku.productName,
          percentShare,
          allocatedCost,
          unitsProduced,
          costPerUnit,
          marginPerUnit,
          totalRevenue,
          totalTime,
          costPerHour,
        };
      });
    } else if (inputs.allocationMethod === "time") {
      const totalTime = validSKUs.reduce((sum, sku) => {
        const weight = parseFloat(sku.weight);
        const timePerUnit = parseFloat(sku.timePerUnit) || 0;
        return sum + (timePerUnit * weight);
      }, 0);
      
      skuResults = validSKUs.map(sku => {
        const weight = parseFloat(sku.weight);
        const timePerUnit = parseFloat(sku.timePerUnit) || 0;
        const salePrice = parseFloat(sku.salePrice);
        
        const skuTotalTime = timePerUnit * weight;
        const percentShare = totalTime > 0 ? (skuTotalTime / totalTime) * 100 : 0;
        const allocatedCost = totalTime > 0 ? (skuTotalTime / totalTime) * totalCost : 0;
        
        // For time-based allocation, units produced is based on time efficiency
        // More time-intensive products get fewer "effective units" per gram
        const timeEfficiencyFactor = timePerUnit > 0 ? 1 / timePerUnit : 1;
        const unitsProduced = weight * timeEfficiencyFactor;
        
        const costPerUnit = unitsProduced > 0 ? allocatedCost / unitsProduced : 0;
        const marginPerUnit = salePrice - costPerUnit;
        const totalRevenue = salePrice * unitsProduced;
        const costPerHour = skuTotalTime > 0 ? allocatedCost / (skuTotalTime / 60) : 0;

        return {
          id: sku.id,
          productName: sku.productName,
          percentShare,
          allocatedCost,
          unitsProduced,
          costPerUnit,
          marginPerUnit,
          totalRevenue,
          totalTime: skuTotalTime,
          costPerHour,
        };
      });
    } else if (inputs.allocationMethod === "manual") {
      const totalPercent = validSKUs.reduce((sum, sku) => sum + (parseFloat(sku.manualPercent) || 0), 0);
      
      skuResults = validSKUs.map(sku => {
        const weight = parseFloat(sku.weight);
        const timePerUnit = parseFloat(sku.timePerUnit) || 0;
        const salePrice = parseFloat(sku.salePrice);
        const manualPercent = parseFloat(sku.manualPercent) || 0;
        
        const percentShare = manualPercent;
        const allocatedCost = (manualPercent / 100) * totalCost;
        const unitsProduced = weight; // Default to weight for manual allocation
        const costPerUnit = allocatedCost / unitsProduced;
        const marginPerUnit = salePrice - costPerUnit;
        const totalRevenue = salePrice * unitsProduced;
        const totalTime = timePerUnit * unitsProduced;
        const costPerHour = totalTime > 0 ? allocatedCost / (totalTime / 60) : 0;

        return {
          id: sku.id,
          productName: sku.productName,
          percentShare,
          allocatedCost,
          unitsProduced,
          costPerUnit,
          marginPerUnit,
          totalRevenue,
          totalTime,
          costPerHour,
        };
      });
    }

    setResults(skuResults);
    
    // Log usage
    logUsage("Cost Allocation Tool", inputs, skuResults);
  };

  const inputClasses = "w-full rounded-md bg-background text-foreground px-3 py-2 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground";

  const isFormValid = () => {
    const hasValidCost = parseFloat(inputs.totalCost) > 0;
    const hasValidMethod = inputs.allocationMethod !== "";
    const hasValidSKUs = inputs.skus.some(sku => 
      sku.productName.trim() && 
      parseFloat(sku.weight) > 0 && 
      parseFloat(sku.salePrice) > 0
    );

    if (inputs.allocationMethod === "manual") {
      const totalPercent = inputs.skus.reduce((sum, sku) => sum + (parseFloat(sku.manualPercent) || 0), 0);
      return hasValidCost && hasValidMethod && hasValidSKUs && Math.abs(totalPercent - 100) < 0.01;
    }

    return hasValidCost && hasValidMethod && hasValidSKUs;
  };

  const getTotalManualPercent = () => {
    return inputs.skus.reduce((sum, sku) => sum + (parseFloat(sku.manualPercent) || 0), 0);
  };

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border border-border bg-secondary rounded-2xl shadow">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-bold">Cost Allocation Tool</h1>
            </div>
            <p className="text-muted-foreground mb-8">
              Allocate total manufacturing costs across multiple SKUs using weight-based, time-based, or manual percentage allocation methods. 
              Get detailed cost metrics and margin insights for each product.
            </p>

            <form onSubmit={calculateResults} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Total Cost of Manufacturing ($)
                  </label>
                  <input
                    type="number"
                    name="totalCost"
                    value={inputs.totalCost}
                    onChange={handleInputChange}
                    placeholder="Enter total manufacturing cost"
                    step="0.01"
                    min="0"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Allocation Method
                  </label>
                  <Select
                    value={inputs.allocationMethod}
                    onValueChange={handleMethodChange}
                  >
                    <SelectTrigger className="w-full bg-background">
                      <SelectValue placeholder="Select allocation method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weight">Weight-Based</SelectItem>
                      <SelectItem value="time">Time-Based</SelectItem>
                      <SelectItem value="manual">Manual % Allocation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">SKU Details</h3>
                  <Button
                    type="button"
                    onClick={addSKU}
                    disabled={inputs.skus.length >= 15}
                    className="flex items-center gap-2 text-sm"
                    variant="outline"
                  >
                    <Plus className="w-4 h-4" />
                    Add SKU
                  </Button>
                </div>

                {inputs.allocationMethod === "manual" && (
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm">
                      Total Manual %: <span className={`font-bold ${
                        Math.abs(getTotalManualPercent() - 100) < 0.01 ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {getTotalManualPercent().toFixed(1)}%
                      </span>
                      {Math.abs(getTotalManualPercent() - 100) >= 0.01 && (
                        <span className="text-red-500 ml-2">(Must equal 100%)</span>
                      )}
                    </p>
                  </div>
                )}

                <div className="space-y-3">
                  {inputs.skus.map((sku, index) => (
                    <div key={sku.id} className="bg-muted/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">SKU {index + 1}</h4>
                        {inputs.skus.length > 1 && (
                          <Button
                            type="button"
                            onClick={() => removeSKU(sku.id)}
                            variant="outline"
                            size="sm"
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                        <div>
                          <label className="block text-xs font-medium mb-1">Product Name</label>
                          <input
                            type="text"
                            value={sku.productName}
                            onChange={(e) => handleSKUChange(sku.id, "productName", e.target.value)}
                            placeholder="Product name"
                            className={inputClasses}
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium mb-1">Weight (g)</label>
                          <input
                            type="number"
                            value={sku.weight}
                            onChange={(e) => handleSKUChange(sku.id, "weight", e.target.value)}
                            placeholder="Weight"
                            step="0.01"
                            min="0"
                            className={inputClasses}
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium mb-1">Time per Unit (min)</label>
                          <input
                            type="number"
                            value={sku.timePerUnit}
                            onChange={(e) => handleSKUChange(sku.id, "timePerUnit", e.target.value)}
                            placeholder="Time"
                            step="0.01"
                            min="0"
                            className={inputClasses}
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium mb-1">Sale Price ($)</label>
                          <input
                            type="number"
                            value={sku.salePrice}
                            onChange={(e) => handleSKUChange(sku.id, "salePrice", e.target.value)}
                            placeholder="Price"
                            step="0.01"
                            min="0"
                            className={inputClasses}
                          />
                        </div>

                        {inputs.allocationMethod === "manual" && (
                          <div>
                            <label className="block text-xs font-medium mb-1">Manual %</label>
                            <input
                              type="number"
                              value={sku.manualPercent}
                              onChange={(e) => handleSKUChange(sku.id, "manualPercent", e.target.value)}
                              placeholder="Percent"
                              step="0.1"
                              min="0"
                              max="100"
                              className={inputClasses}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full sm:w-auto"
                disabled={!isFormValid()}
              >
                Calculate Allocation
              </Button>

              {results && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {results.map((result) => (
                    <Card key={result.id} className="border border-border bg-muted/50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4 text-primary">{result.productName}</h3>
                        
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="bg-background rounded-lg p-3">
                            <p className="text-xs text-muted-foreground mb-1">% Share</p>
                            <p className="text-lg font-bold text-primary">
                              {result.percentShare.toFixed(2)}%
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-3">
                            <p className="text-xs text-muted-foreground mb-1">Allocated Cost</p>
                            <p className="text-lg font-bold text-primary">
                              ${result.allocatedCost.toFixed(2)}
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-3">
                            <p className="text-xs text-muted-foreground mb-1">Units Produced</p>
                            <p className="text-lg font-bold text-primary">
                              {result.unitsProduced.toFixed(0)}
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-3">
                            <p className="text-xs text-muted-foreground mb-1">Cost per Unit</p>
                            <p className="text-lg font-bold text-primary">
                              ${result.costPerUnit.toFixed(2)}
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-3">
                            <p className="text-xs text-muted-foreground mb-1">Margin per Unit</p>
                            <p className={`text-lg font-bold ${
                              result.marginPerUnit >= 0 ? 'text-green-500' : 'text-red-500'
                            }`}>
                              ${result.marginPerUnit.toFixed(2)}
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-3">
                            <p className="text-xs text-muted-foreground mb-1">Total Revenue</p>
                            <p className="text-lg font-bold text-primary">
                              ${result.totalRevenue.toFixed(2)}
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-3">
                            <p className="text-xs text-muted-foreground mb-1">Total Time</p>
                            <p className="text-lg font-bold text-primary">
                              {result.totalTime.toFixed(1)} min
                            </p>
                          </div>

                          <div className="bg-background rounded-lg p-3">
                            <p className="text-xs text-muted-foreground mb-1">Cost per Hour</p>
                            <p className="text-lg font-bold text-primary">
                              ${result.costPerHour.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Card className="border border-primary bg-primary/5">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Summary</h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Total Allocated</p>
                          <p className="text-xl font-bold text-primary">
                            ${results.reduce((sum, r) => sum + r.allocatedCost, 0).toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Total Revenue</p>
                          <p className="text-xl font-bold text-primary">
                            ${results.reduce((sum, r) => sum + r.totalRevenue, 0).toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Total Profit</p>
                          <p className={`text-xl font-bold ${
                            results.reduce((sum, r) => sum + (r.totalRevenue - r.allocatedCost), 0) >= 0 
                              ? 'text-green-500' : 'text-red-500'
                          }`}>
                            ${results.reduce((sum, r) => sum + (r.totalRevenue - r.allocatedCost), 0).toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">SKUs Analyzed</p>
                          <p className="text-xl font-bold text-primary">
                            {results.length}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}