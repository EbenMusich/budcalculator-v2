"use client";

import Layout from "@/components/Layout";
import Link from "next/link";
import { ArrowLeft, FlaskConical, TrendingUp, AlertTriangle, CheckCircle, Target, Thermometer, Clock } from "lucide-react";

export default function ExtractionEfficiencyGuide() {
  return (
    <Layout>
      <div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/resources"
          className="inline-flex items-center text-primary hover:text-primary/90 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FlaskConical className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">A Step-by-Step Guide to Cannabis Extraction Efficiency</h1>
          <p className="text-xl text-muted-foreground">
            Maximize yield, minimize waste, and optimize your extraction processes for consistent, profitable results.
          </p>
        </div>

        {/* Why Efficiency Matters */}
        <section className="bg-secondary rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            Why Extraction Efficiency Matters
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            In cannabis extraction, efficiency directly impacts your bottom line. A 5% improvement in yield can mean thousands of dollars in additional revenue per batch. Poor efficiency wastes expensive starting material, increases solvent costs, and reduces the potency of your final products. Understanding and optimizing your extraction process is crucial for maintaining competitive margins and consistent quality.
          </p>
        </section>

        {/* Key Efficiency Metrics */}
        <section className="bg-secondary rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            Key Efficiency Metrics to Track
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-lg p-6">
              <h3 className="font-semibold mb-2 text-primary">Yield Percentage</h3>
              <p className="text-sm text-muted-foreground">
                Total extract weight ÷ starting material weight × 100. Industry benchmarks: 15-25% for flower, 60-80% for trim.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="font-semibold mb-2 text-primary">Solvent Recovery Rate</h3>
              <p className="text-sm text-muted-foreground">
                Percentage of solvent recovered and reused. Target: 85-95% recovery to minimize operating costs.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="font-semibold mb-2 text-primary">Potency Retention</h3>
              <p className="text-sm text-muted-foreground">
                THC/CBD levels in final product vs. starting material. Aim for 80-90% cannabinoid retention.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="font-semibold mb-2 text-primary">Processing Time</h3>
              <p className="text-sm text-muted-foreground">
                Total time from start to finished product. Faster processing reduces labor costs and increases throughput.
              </p>
            </div>
          </div>
        </section>

        {/* Common Efficiency Killers */}
        <section className="bg-secondary rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-destructive" />
            Common Efficiency Killers
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <Thermometer className="w-5 h-5 text-destructive mt-0.5" />
              <div>
                <h3 className="font-semibold text-destructive">Temperature Fluctuations</h3>
                <p className="text-sm text-muted-foreground">
                  Inconsistent temperatures can degrade cannabinoids and reduce yield. Maintain tight temperature control throughout the process.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <Clock className="w-5 h-5 text-destructive mt-0.5" />
              <div>
                <h3 className="font-semibold text-destructive">Over-Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Extended extraction times don't always mean better yields. They can extract unwanted compounds and waste energy.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <FlaskConical className="w-5 h-5 text-destructive mt-0.5" />
              <div>
                <h3 className="font-semibold text-destructive">Poor Material Preparation</h3>
                <p className="text-sm text-muted-foreground">
                  Inconsistent grind size, moisture content, or contaminated material significantly impacts extraction efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Optimization */}
        <section className="bg-secondary rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-primary" />
            Step-by-Step Optimization Process
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-semibold mb-2">1. Standardize Material Preparation</h3>
              <p className="text-muted-foreground mb-2">
                Consistent grind size and moisture content are critical for reproducible results.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Target 10-12% moisture content for optimal extraction</li>
                <li>Use consistent grind size (typically 2-4mm for most methods)</li>
                <li>Remove stems and foreign material before processing</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-semibold mb-2">2. Optimize Extraction Parameters</h3>
              <p className="text-muted-foreground mb-2">
                Fine-tune temperature, pressure, and time based on your specific equipment and material.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Start with manufacturer recommendations, then adjust incrementally</li>
                <li>Document all parameter changes and their effects on yield</li>
                <li>Consider multiple extraction cycles for maximum efficiency</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-semibold mb-2">3. Implement Quality Control</h3>
              <p className="text-muted-foreground mb-2">
                Regular testing and monitoring ensure consistent results and identify improvement opportunities.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Test starting material potency for each batch</li>
                <li>Monitor extraction progress with intermediate sampling</li>
                <li>Track final product potency and yield metrics</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-semibold mb-2">4. Optimize Post-Processing</h3>
              <p className="text-muted-foreground mb-2">
                Efficient purging and refinement steps maximize final product quality and yield.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Minimize exposure to heat, light, and oxygen during purging</li>
                <li>Use appropriate vacuum levels and temperatures for your product type</li>
                <li>Implement proper storage conditions to prevent degradation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tools and Calculators */}
        <section className="bg-primary/10 border border-primary/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Tools to Track Your Efficiency</h2>
          <p className="text-muted-foreground mb-6">
            Use our free calculators to monitor and optimize your extraction processes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/calculators/extraction-cost"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Extraction Cost Calculator →
            </Link>
            <Link
              href="/calculators/solvent-recovery"
              className="bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-lg font-medium transition-colors border border-border"
            >
              Solvent Recovery Calculator →
            </Link>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
          <p className="text-muted-foreground leading-relaxed">
            Extraction efficiency isn't just about maximizing yield—it's about creating a repeatable, profitable process that consistently produces high-quality products. Small improvements in efficiency compound over time, leading to significant cost savings and increased profitability. Start by tracking your current metrics, then implement changes systematically while documenting results. Remember, the most efficient extraction is one that balances yield, quality, safety, and cost-effectiveness.
          </p>
        </section>

        {/* Related Resources */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/resources/industry-guides/cost-per-pound"
              className="bg-secondary hover:bg-secondary/80 rounded-lg p-6 transition-colors"
            >
              <h3 className="font-semibold mb-2">Cost Per Pound Guide</h3>
              <p className="text-sm text-muted-foreground">Calculate true production costs for better pricing decisions</p>
            </Link>
            <Link
              href="/calculators/decarboxylation-calculator"
              className="bg-secondary hover:bg-secondary/80 rounded-lg p-6 transition-colors"
            >
              <h3 className="font-semibold mb-2">Decarboxylation Calculator</h3>
              <p className="text-sm text-muted-foreground">Optimize decarb processes for maximum potency retention</p>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}