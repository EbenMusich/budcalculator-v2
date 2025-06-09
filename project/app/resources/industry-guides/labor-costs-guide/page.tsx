"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import { ArrowLeft, Users, Clock, TrendingDown, AlertTriangle, CheckCircle, Target, Zap } from "lucide-react";

export default function LaborCostsGuide() {
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
            Reducing Labor Costs in Cannabis Manufacturing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Streamline production and reduce labor waste with smarter scheduling, tracking, and accountability
          </p>
        </div>

        {/* Why Labor Cost Is One of the Biggest Levers */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <TrendingDown className="w-8 h-8 text-primary" />
              Why Labor Cost Is One of the Biggest Levers
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Labor typically represents 30-50% of total production costs in cannabis manufacturing, making it the single 
              largest controllable expense for most operations. Unlike fixed costs like rent or equipment, labor efficiency 
              can be optimized through better processes, training, and accountability systems.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              This is especially true for labor-intensive processes like flower sorting, hand-trimming, pre-roll production, 
              and edibles manufacturing. Small improvements in efficiency—reducing task switching by 10 minutes per hour, 
              eliminating bottlenecks that cause idle time, or improving quality to reduce rework—can drive significant 
              cost savings that compound across every shift and every product batch.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="font-semibold text-primary mb-3">The Multiplier Effect</h3>
              <p className="text-muted-foreground">
                A 15% improvement in labor efficiency doesn't just save 15% on labor costs—it often increases overall 
                throughput, reduces overtime expenses, improves product quality, and enables faster time-to-market. 
                These combined benefits can improve profitability by 25-40% or more.
              </p>
            </div>
          </div>
        </section>

        {/* Where Time Gets Wasted Most */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-8">Where Time Gets Wasted Most</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Understanding where inefficiencies occur is the first step to eliminating them. These are the most common 
              sources of labor waste in cannabis manufacturing operations:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-semibold text-red-500">Task Switching Overhead</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Changing between different product types mid-shift</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Setup and cleanup time between batches</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Mental reset time when switching processes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Re-learning procedures for infrequent tasks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-semibold text-red-500">Bottlenecks & Waiting</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Staff waiting for one person to complete their step</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Equipment or room availability delays</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Waiting for materials or supplies to arrive</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Quality control approval delays</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-semibold text-red-500">Manual & Repetitive Tasks</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Hand-writing labels instead of printing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Manual data entry and record keeping</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Individual packaging instead of batch processing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Searching for tools, materials, or information</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-semibold text-red-500">Process Inefficiencies</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Staff standing idle between SOP steps</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Unclear procedures leading to confusion</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Rework due to quality issues or mistakes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Excessive movement between work areas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Strategies to Cut Labor Waste */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-8">Strategies to Cut Labor Waste</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Implementing these proven strategies can reduce labor costs by 15-30% while improving product quality 
              and employee satisfaction. Focus on the areas with the biggest impact for your specific operation.
            </p>
            
            <div className="space-y-8">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Standardize SOPs – Same Steps Every Time</h3>
                <p className="text-muted-foreground mb-4">
                  Create detailed, step-by-step procedures for every process. When everyone follows the same optimized 
                  workflow, you eliminate the inefficiency of workers figuring out their own methods or making mistakes 
                  due to inconsistent processes.
                </p>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-primary">Implementation Tips:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Document the fastest, highest-quality method for each task</li>
                    <li>• Include photos or videos for complex procedures</li>
                    <li>• Test SOPs with multiple workers to identify gaps</li>
                    <li>• Update procedures based on worker feedback and improvements</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Batch Similar Tasks – Avoid Switching Too Often</h3>
                <p className="text-muted-foreground mb-4">
                  Group similar activities together to minimize setup time and mental switching costs. Instead of 
                  alternating between different products throughout the day, complete all units of one type before 
                  moving to the next.
                </p>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-primary">Batching Examples:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Process all 1g jars before switching to 3.5g containers</li>
                    <li>• Complete all pre-rolls of one strain before changing strains</li>
                    <li>• Batch all labeling tasks for the day into one session</li>
                    <li>• Group quality control checks by product type</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Track Time per Unit – Know Your True Costs</h3>
                <p className="text-muted-foreground mb-4">
                  Measure how long each task actually takes, not how long you think it should take. This data reveals 
                  which processes need improvement and helps you set realistic production targets and pricing.
                </p>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-primary">Key Metrics to Track:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Minutes per unit for each major process</li>
                    <li>• Setup and cleanup time for batch changes</li>
                    <li>• Rework time due to quality issues</li>
                    <li>• Idle time between tasks or waiting for materials</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Pre-stage Materials – Minimize Prep Time</h3>
                <p className="text-muted-foreground mb-4">
                  Prepare all materials, tools, and supplies before production shifts begin. This eliminates time spent 
                  searching for items, reduces interruptions during production, and ensures consistent workflow.
                </p>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-primary">Pre-staging Checklist:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• All packaging materials counted and organized</li>
                    <li>• Labels printed and ready for application</li>
                    <li>• Tools cleaned, calibrated, and positioned</li>
                    <li>• Work areas cleaned and set up for efficiency</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Use Incentives Carefully – Consider Bonuses for Output or Efficiency</h3>
                <p className="text-muted-foreground mb-4">
                  Well-designed incentive programs can boost productivity, but they must balance speed with quality. 
                  Focus on rewarding efficiency improvements and error reduction, not just raw output that might 
                  compromise quality.
                </p>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-primary">Effective Incentive Structures:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Team bonuses for meeting quality and efficiency targets</li>
                    <li>• Individual recognition for process improvements</li>
                    <li>• Profit-sharing based on overall operational efficiency</li>
                    <li>• Avoid pure speed incentives that sacrifice quality</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools That Can Help */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-6">Tools That Can Help</h2>
            <p className="text-muted-foreground text-lg mb-8">
              The right tools can automate time tracking, identify bottlenecks, and provide the data you need to 
              make informed decisions about labor optimization. Start with these free resources to begin measuring 
              and improving your efficiency.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">Time Tracking & Analysis</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>SOP time tracking for process optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>Labor cost per unit calculations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>Efficiency trend analysis over time</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>Bottleneck identification and reporting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">Process Optimization</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>Production planning and scheduling tools</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>Cost comparison between different methods</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>Resource allocation optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>Quality control impact analysis</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-primary/10 border border-primary/20 rounded-lg p-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Start Tracking Today</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Use our free SOP Time Tracker to measure your current efficiency and identify improvement opportunities. 
                Get detailed insights into labor costs per unit and process bottlenecks.
              </p>
              <Link
                href="/calculators/sop-time-tracker"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg transition-colors"
              >
                <Clock className="w-6 h-6" />
                Track Time With Our Free Tool →
              </Link>
            </div>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-6">Final Thoughts</h2>
            
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <p className="font-bold text-green-600 dark:text-green-400 mb-3">
                    Quality Through Efficiency, Not Shortcuts
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Reducing labor costs doesn't mean cutting corners or compromising product quality. The most effective 
                    approach focuses on removing friction, eliminating delays, and reducing guesswork—not rushing through 
                    critical quality control steps.
                  </p>
                  <p className="text-muted-foreground">
                    When you streamline processes and eliminate waste, workers can focus on doing their best work instead 
                    of fighting inefficient systems. This leads to better products, higher employee satisfaction, and 
                    sustainable cost reductions that improve your competitive position in the market.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Start Small</h4>
                <p className="text-sm text-muted-foreground">
                  Pick one process and optimize it completely before moving to the next
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Measure Everything</h4>
                <p className="text-sm text-muted-foreground">
                  You can't improve what you don't measure—track time and costs consistently
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Involve Your Team</h4>
                <p className="text-sm text-muted-foreground">
                  Workers often have the best ideas for eliminating inefficiencies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section>
          <div className="bg-muted/50 rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/calculators/sop-time-tracker"
                className="flex items-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  SOP Time Tracking Calculator
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
              <Link
                href="/calculators/process-comparison"
                className="flex items-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  Process Comparison Calculator
                </span>
              </Link>
              <Link
                href="/resources/industry-guides/production-schedule"
                className="flex items-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  Building a Cannabis Production Schedule
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}