"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import { ArrowLeft, Calculator, DollarSign, AlertTriangle, CheckCircle } from "lucide-react";

export default function TrueCostPerPoundGuide() {
  return (
    <Layout>
      <div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/resources"
          className="inline-flex items-center text-primary hover:text-primary/90 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Link>

        {/* Hero Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-6">
            How to Calculate True Cost Per Pound of Cannabis Flower
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive guide to understanding and calculating your real production costs for better pricing and profitability decisions
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-primary" />
              Introduction
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Understanding your true cost per pound is fundamental to running a profitable cannabis cultivation operation. 
              Many growers focus only on obvious costs like nutrients and labor, but miss critical expenses that can make 
              the difference between profit and loss.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This comprehensive approach to cost calculation helps you set competitive prices, identify areas for 
              optimization, and make informed decisions about scaling your operation. Whether you're a small craft 
              grower or a large commercial facility, accurate cost tracking is essential for long-term success.
            </p>
          </div>
        </section>

        {/* What True Cost Includes */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-8">What "True Cost" Includes</h2>
            <p className="text-muted-foreground text-lg mb-8">
              True cost per pound encompasses all expenses directly and indirectly related to producing your flower. 
              Here are the key categories you must track:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Direct Production Costs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="font-medium">Direct Labor:</span>
                      <span className="text-muted-foreground ml-2">Cultivation, harvesting, trimming wages</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="font-medium">Nutrients & Inputs:</span>
                      <span className="text-muted-foreground ml-2">Fertilizers, amendments, pest control</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="font-medium">Seeds/Clones:</span>
                      <span className="text-muted-foreground ml-2">Genetics and propagation materials</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="font-medium">Growing Media:</span>
                      <span className="text-muted-foreground ml-2">Soil, coco, rockwool, perlite</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Overhead & Infrastructure</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="font-medium">Rent & Utilities:</span>
                      <span className="text-muted-foreground ml-2">Facility costs, electricity, water</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="font-medium">Equipment Depreciation:</span>
                      <span className="text-muted-foreground ml-2">Lights, HVAC, irrigation systems</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="font-medium">Compliance Testing:</span>
                      <span className="text-muted-foreground ml-2">Required lab testing and certifications</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="font-medium">Insurance & Licenses:</span>
                      <span className="text-muted-foreground ml-2">Regulatory and protection costs</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Post-Harvest Processing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="font-medium">Trim Crew Costs:</span>
                      <span className="text-muted-foreground ml-2">Hand trimming or machine processing</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="font-medium">Drying & Curing:</span>
                      <span className="text-muted-foreground ml-2">Climate control and facility costs</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="font-medium">Packaging Materials:</span>
                      <span className="text-muted-foreground ml-2">Jars, bags, labels, child-resistant containers</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Loss & Risk Factors</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="font-medium">Waste & Shrinkage:</span>
                      <span className="text-muted-foreground ml-2">Plant loss, trim waste, quality rejects</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="font-medium">Failed Batches:</span>
                      <span className="text-muted-foreground ml-2">Contamination, pests, regulatory failures</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="font-medium">Storage Losses:</span>
                      <span className="text-muted-foreground ml-2">Moisture loss, degradation over time</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why It's Different Than COGS */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-6">Why It's Different Than COGS</h2>
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mt-1" />
                <div>
                  <p className="font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                    Critical Distinction: True Cost vs. Standard COGS
                  </p>
                  <p className="text-muted-foreground">
                    Standard Cost of Goods Sold (COGS) accounting often excludes many real operational expenses 
                    that directly impact your profitability. True cost calculation includes ALL expenses required 
                    to bring your product to market.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-red-500">Standard COGS Typically Includes:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Direct materials (seeds, nutrients)</li>
                  <li>• Direct labor (cultivation wages)</li>
                  <li>• Basic facility costs</li>
                </ul>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-green-500">True Cost Also Includes:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Equipment depreciation</li>
                  <li>• Compliance and testing costs</li>
                  <li>• Waste and shrinkage losses</li>
                  <li>• Post-harvest processing</li>
                  <li>• Quality control failures</li>
                  <li>• Administrative overhead allocation</li>
                </ul>
              </div>
            </div>

            <p className="text-muted-foreground text-lg mt-6">
              This comprehensive approach gives you the real cost per pound, enabling accurate pricing decisions 
              and revealing opportunities for operational improvements that standard accounting might miss.
            </p>
          </div>
        </section>

        {/* Step-by-Step Breakdown */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-8">Step-by-Step Cost Breakdown</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Track All Grow Cycle Costs</h3>
                  <p className="text-muted-foreground mb-4">
                    Document every expense from seed to harvest. This includes obvious costs like nutrients and labor, 
                    plus often-overlooked expenses like equipment maintenance, facility improvements, and regulatory compliance.
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Pro Tip:</p>
                    <p className="text-sm text-muted-foreground">
                      Use a dedicated tracking system or spreadsheet to categorize expenses by grow cycle. 
                      This makes it easier to identify cost trends and optimization opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Split Shared Costs Across Batches or Strains</h3>
                  <p className="text-muted-foreground mb-4">
                    Allocate overhead costs like rent, utilities, and equipment depreciation proportionally across 
                    your production. You can split by square footage used, number of plants, or expected yield.
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Example Allocation Methods:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• By canopy square footage (most common)</li>
                      <li>• By plant count for uniform operations</li>
                      <li>• By projected yield for different strains</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Add Post-Harvest Labor and Processing</h3>
                  <p className="text-muted-foreground mb-4">
                    Include all costs after harvest: trimming (hand or machine), drying facility costs, 
                    curing time and space, quality control testing, and packaging materials and labor.
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Often Forgotten Costs:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Climate control during drying/curing</li>
                      <li>• Quality control labor and rejected product</li>
                      <li>• Packaging design and compliance labeling</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Divide Total Cost by Grams/Pounds Harvested</h3>
                  <p className="text-muted-foreground mb-4">
                    Calculate your final sellable yield after all processing, quality control, and waste removal. 
                    Use this net yield figure, not your gross harvest weight, for accurate cost per unit calculations.
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Yield Calculation:</p>
                    <p className="text-sm text-muted-foreground">
                      Net Sellable Yield = Gross Harvest - Trim - Waste - Quality Rejects - Testing Samples
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Convert to Per-Gram and Per-Pound Values</h3>
                  <p className="text-muted-foreground mb-4">
                    Express your costs in both per-gram and per-pound formats for easy comparison with market prices 
                    and competitor analysis. This helps with pricing decisions across different package sizes.
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Conversion Formula:</p>
                    <p className="text-sm text-muted-foreground">
                      Cost per Pound = Cost per Gram × 453.592 grams
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Example Calculation */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-6">Example Calculation</h2>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Sample Cannabis Operation</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Total Costs (Per Cycle)</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Direct Labor:</span>
                      <span className="font-medium">$8,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nutrients & Inputs:</span>
                      <span className="font-medium">$3,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Utilities (allocated):</span>
                      <span className="font-medium">$4,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rent (allocated):</span>
                      <span className="font-medium">$6,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Equipment Depreciation:</span>
                      <span className="font-medium">$2,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Trim & Processing:</span>
                      <span className="font-medium">$3,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Testing & Compliance:</span>
                      <span className="font-medium">$1,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Packaging & Materials:</span>
                      <span className="font-medium">$800</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between font-bold">
                      <span>Total Cost:</span>
                      <span className="text-primary">$30,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-primary">Yield & Results</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Gross Harvest:</span>
                      <span className="font-medium">55 lbs</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Trim & Waste:</span>
                      <span className="font-medium">-3 lbs</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quality Rejects:</span>
                      <span className="font-medium">-2 lbs</span>
                    </div>
                    <div className="flex justify-between font-bold border-b border-border pb-3">
                      <span>Net Sellable Yield:</span>
                      <span className="text-primary">50 lbs</span>
                    </div>
                    
                    <div className="pt-3 space-y-3">
                      <div className="bg-background rounded-lg p-4">
                        <p className="text-center text-2xl font-bold text-primary mb-2">
                          $600.00
                        </p>
                        <p className="text-center text-sm text-muted-foreground">
                          True Cost Per Pound
                        </p>
                      </div>
                      
                      <div className="bg-background rounded-lg p-4">
                        <p className="text-center text-xl font-bold text-primary mb-2">
                          $1.32
                        </p>
                        <p className="text-center text-sm text-muted-foreground">
                          True Cost Per Gram
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Calculation:</strong> $30,000 total cost ÷ 50 lbs net yield = $600 per pound
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use This With Calculator */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Use This With Our Calculator</h2>
            </div>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Now that you understand the methodology, use our Cost Per Unit Calculator to automatically 
              compute your true cost per pound with real-time calculations and scenario planning.
            </p>
            
            <Link
              href="/calculators/cost-per-unit"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              <Calculator className="w-6 h-6" />
              Try the Cost Per Unit Calculator
            </Link>
            
            <p className="text-sm text-muted-foreground mt-4">
              Free to use • No registration required • Instant results
            </p>
          </div>
        </section>

        {/* Additional Resources */}
        <section>
          <div className="bg-muted/50 rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/calculators/break-even"
                className="flex items-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  Break-even Calculator for Cultivators
                </span>
              </Link>
              <Link
                href="/calculators/profit-margin"
                className="flex items-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  Profit Margin Calculator
                </span>
              </Link>
              <Link
                href="/calculators/yield-forecasting"
                className="flex items-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  Yield Forecasting Calculator
                </span>
              </Link>
              <Link
                href="/calculators/labor-cost-plant"
                className="flex items-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  Labor Cost per Plant Calculator
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}