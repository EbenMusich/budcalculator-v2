"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import { ArrowLeft, TrendingUp, Lightbulb, Users, BarChart3, Calculator, CheckCircle, AlertTriangle, Target } from "lucide-react";

export default function YieldForecastingGuide() {
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
            Understanding Yield Forecasting for Cultivators
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estimate harvest outputs per light, plant, or canopy area to better plan your production, revenue, and operations
          </p>
        </div>

        {/* Why Forecast Yield? */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary" />
              Why Forecast Yield?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Yield forecasting is the foundation of successful cannabis cultivation planning. It helps cultivators anticipate 
              harvest volumes, plan staffing for trimming and processing, determine packaging material needs, and project cash 
              flow for upcoming quarters. Without accurate yield predictions, operations struggle with resource allocation, 
              miss market opportunities, and face costly last-minute scrambles for labor and supplies.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This becomes especially critical for multi-room operations running perpetual harvests, or facilities growing 
              multiple strains with different yield characteristics. Accurate forecasting enables better inventory management, 
              more precise pricing strategies, and improved coordination between cultivation, processing, and sales teams.
            </p>
          </div>
        </section>

        {/* Forecasting Methods */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-8">Forecasting Methods</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Different cultivation setups require different forecasting approaches. Choose the method that best matches 
              your operation's scale, growing style, and data availability. Many successful operations use multiple 
              methods to cross-validate their projections.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">Per Light</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-green-500 mb-3">Best For:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Indoor operations with consistent lighting</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Facilities with standardized light spacing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Operations tracking watts per square foot</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Typical Ranges:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• LED (600-1000W): 1.0-2.5 lbs/light</li>
                    <li>• HPS (1000W): 1.5-3.0 lbs/light</li>
                    <li>• CMH (315W): 0.5-1.2 lbs/light</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">Per Plant</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-green-500 mb-3">Best For:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Small-batch, craft cultivation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Operations with varying plant sizes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Strain-specific yield tracking</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Typical Ranges:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Indoor: 1-6 oz/plant</li>
                    <li>• Greenhouse: 2-8 oz/plant</li>
                    <li>• Outdoor: 1-10+ lbs/plant</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">Per Canopy Area</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-green-500 mb-3">Best For:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Large greenhouse operations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Outdoor cultivation planning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Sea of Green (SOG) methods</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Typical Ranges:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Indoor: 1.0-2.5 lbs/sq ft</li>
                    <li>• Greenhouse: 0.8-2.0 lbs/sq ft</li>
                    <li>• Outdoor: 0.5-1.5 lbs/sq ft</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h4 className="font-semibold text-primary mb-3">Choosing Your Method</h4>
              <p className="text-muted-foreground">
                Most successful operations track multiple metrics and use the most consistent one for primary forecasting. 
                For example, an indoor facility might use per-light calculations for planning but also track per-plant 
                yields to optimize genetics and growing techniques.
              </p>
            </div>
          </div>
        </section>

        {/* What to Track for Accuracy */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-8">What to Track for Accuracy</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Accurate yield forecasting requires consistent data collection and standardized measurements. 
              Small variations in how you measure and record data can lead to significant forecasting errors 
              that compound over multiple harvest cycles.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Consistent Weight Units</h3>
                  <p className="text-muted-foreground mb-3">
                    Standardize on either grams or pounds throughout your operation. Mixing units leads to calculation 
                    errors and makes it difficult to compare data across harvests or with industry benchmarks.
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Conversion Reference:</p>
                    <p className="text-sm text-muted-foreground">
                      1 pound = 453.592 grams | 1 ounce = 28.35 grams
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Wet-to-Dry Conversion Ratio</h3>
                  <p className="text-muted-foreground mb-3">
                    Track the relationship between fresh harvest weight and final dried weight. This ratio varies 
                    by strain, growing conditions, and drying methods, but is essential for early yield projections.
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Typical Ratios:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Indoor flower: 20-25% (4:1 to 5:1 wet:dry)</li>
                      <li>• Outdoor flower: 15-20% (5:1 to 6:1 wet:dry)</li>
                      <li>• Trim material: 10-15% (6:1 to 10:1 wet:dry)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Number of Harvests per Year</h3>
                  <p className="text-muted-foreground mb-3">
                    Account for your complete growing cycle including vegetation, flowering, harvest, and room turnover time. 
                    Don't forget to factor in cleaning, maintenance, and any planned downtime between cycles.
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Typical Cycles:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Indoor (8-week flower): 5-6 harvests/year</li>
                      <li>• Indoor (10-week flower): 4-5 harvests/year</li>
                      <li>• Greenhouse: 3-4 harvests/year</li>
                      <li>• Outdoor: 1-2 harvests/year</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Trim-to-Flower Ratio</h3>
                  <p className="text-muted-foreground mb-3">
                    If you're forecasting bulk flower sales, account for the percentage that will be classified as trim 
                    or lower-grade material. This varies significantly by strain, growing method, and quality standards.
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Typical Breakdown:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Premium flower: 60-75% of total harvest</li>
                      <li>• Smalls/popcorn: 15-25% of total harvest</li>
                      <li>• Trim/shake: 10-20% of total harvest</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Yield Forecasting Formula */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-6">Yield Forecasting Formula</h2>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-center text-primary">Example Calculation</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Setup Parameters</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Number of lights:</span>
                      <span className="font-medium">20 lights</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Yield per light:</span>
                      <span className="font-medium">1.5 lb/light</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Harvests per year:</span>
                      <span className="font-medium">4 harvests</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Trim percentage:</span>
                      <span className="font-medium">15%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-primary">Calculations</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Per harvest total:</span>
                      <span className="font-medium">30 lb</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Annual total:</span>
                      <span className="font-medium">120 lb/year</span>
                    </div>
                    <div className="flex justify-between border-t border-border pt-3">
                      <span>Premium flower:</span>
                      <span className="font-medium text-primary">102 lb/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Trim/shake:</span>
                      <span className="font-medium text-primary">18 lb/year</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Formula:</strong> (Lights × Yield/Light × Harvests/Year) = Total Annual Yield<br/>
                  <strong>Breakdown:</strong> Total × (1 - Trim%) = Premium Flower | Total × Trim% = Trim/Shake
                </p>
              </div>
            </div>

            <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mt-1" />
                <div>
                  <p className="font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                    Important Considerations
                  </p>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• These are estimates—actual yields will vary based on genetics, environment, and skill</li>
                    <li>• Build in a 10-20% buffer for conservative planning</li>
                    <li>• Track actual vs. predicted yields to improve future forecasting accuracy</li>
                    <li>• Consider seasonal variations for greenhouse and outdoor operations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Try the Yield Forecasting Calculator */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Try the Yield Forecasting Calculator</h2>
            </div>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Put these concepts into practice with our free yield forecasting calculator. Input your specific 
              parameters and get detailed projections for planning your operation and revenue forecasts.
            </p>
            
            <Link
              href="/calculators/yield-forecasting"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              <Target className="w-6 h-6" />
              → Forecast Your Yield Now
            </Link>
            
            <p className="text-sm text-muted-foreground mt-4">
              Free to use • Multiple forecasting methods • Export results for planning
            </p>
          </div>
        </section>

        {/* Final Tip */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-6">Final Tip</h2>
            
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <p className="font-bold text-green-600 dark:text-green-400 mb-3">
                    Consistency Beats Perfection
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Yield forecasting isn't about predicting exact weights—it's about creating reliable estimates that 
                    improve over time. Even experienced cultivators see 10-20% variation between harvests due to 
                    environmental factors, genetics, and seasonal changes.
                  </p>
                  <p className="text-muted-foreground">
                    The key is consistent tracking and gradual refinement of your forecasting methods. Start with 
                    conservative estimates, document actual results, and adjust your models based on real data. 
                    This approach helps you spot problems early, plan resources more effectively, and make smarter 
                    business decisions based on realistic expectations rather than wishful thinking.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Track Everything</h4>
                <p className="text-sm text-muted-foreground">
                  Document weights, timing, and conditions for every harvest
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Plan Conservatively</h4>
                <p className="text-sm text-muted-foreground">
                  Use lower estimates for planning, higher estimates for potential
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Refine Continuously</h4>
                <p className="text-sm text-muted-foreground">
                  Update your models with each harvest to improve accuracy
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
                href="/calculators/yield-forecasting"
                className="flex items-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  Yield Forecasting Calculator
                </span>
              </Link>
              <Link
                href="/calculators/cost-per-unit"
                className="flex items-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  Cost Per Unit Calculator
                </span>
              </Link>
              <Link
                href="/calculators/break-even"
                className="flex items-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  Break-even Calculator
                </span>
              </Link>
              <Link
                href="/calculators/production-goal-planner"
                className="flex items-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  Production Goal Planner
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}