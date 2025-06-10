"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import { ArrowLeft, Calendar, Clock, AlertTriangle, CheckCircle, Users, Package } from "lucide-react";

export default function ProductionScheduleGuide() {
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
            Building a Cannabis Production Schedule That Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master the art of production planning to eliminate bottlenecks, reduce waste, and maximize efficiency in your cannabis operation
          </p>
        </div>

        {/* Why a Production Schedule Matters */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-primary" />
              Why a Production Schedule Matters
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Without a well-structured production schedule, cannabis operations quickly fall into chaos. Teams miss critical deadlines, 
              materials sit idle while labor waits, and quality suffers under rushed timelines. In an industry where time literally equals 
              money—from plant growth cycles to compliance deadlines—effective scheduling is the difference between profit and loss.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A proper production schedule coordinates every aspect of your operation: from seed to sale, ensuring optimal resource 
              utilization, consistent product quality, and predictable cash flow. It transforms reactive firefighting into proactive 
              planning, giving you control over your business instead of constantly chasing problems.
            </p>
          </div>
        </section>

        {/* Weekly vs Daily Scheduling */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-8">Weekly vs. Daily Scheduling</h2>
            <p className="text-muted-foreground text-lg mb-8">
              The right scheduling approach depends on your operation size, product mix, and market demands. 
              Here's how to choose between weekly and daily planning strategies:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Weekly Planning
                </h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-green-500 mb-3">Best For:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Large batch operations with consistent processes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Cultivation cycles and harvest planning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Edibles production with longer lead times</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Trimming and processing workflows</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Advantages:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Reduces planning overhead and decision fatigue</li>
                    <li>• Better for batching similar tasks together</li>
                    <li>• Allows for longer-term resource allocation</li>
                    <li>• Less chaotic, more predictable workflows</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Daily Planning
                </h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-green-500 mb-3">Best For:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>High-volume packaging and fulfillment</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Retail operations with changing demand</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Multi-product facilities with complex workflows</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Operations requiring rapid response to market changes</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Advantages:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Maximum flexibility for urgent orders</li>
                    <li>• Better resource optimization for varied tasks</li>
                    <li>• Faster response to quality issues or delays</li>
                    <li>• More precise tracking of daily productivity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h4 className="font-semibold text-primary mb-3">Hybrid Approach (Recommended)</h4>
              <p className="text-muted-foreground">
                Most successful operations use weekly planning for major production phases (cultivation, extraction, large batches) 
                combined with daily scheduling for packaging, quality control, and order fulfillment. This provides strategic 
                direction while maintaining operational flexibility.
              </p>
            </div>
          </div>
        </section>

        {/* Key Elements of a Good Cannabis Schedule */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-8">Key Elements of a Good Cannabis Schedule</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Effective cannabis production schedules go beyond simple task lists. They must account for regulatory requirements, 
              quality control checkpoints, and the unique challenges of working with a living product. Here are the essential components:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Task Ownership & Accountability</h3>
                    <p className="text-muted-foreground">
                      Clearly assign responsibility for each task with specific individuals or teams. Include backup assignments 
                      for critical processes to prevent delays when key personnel are unavailable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Realistic Time Estimates</h3>
                    <p className="text-muted-foreground">
                      Base time estimates on actual historical data, not optimistic projections. Include buffer time for 
                      quality control, equipment maintenance, and unexpected issues that commonly arise in cannabis production.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Package className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Product Type Specifications</h3>
                    <p className="text-muted-foreground">
                      Different products require different handling, processing times, and quality standards. Schedule flower, 
                      concentrates, and edibles separately with appropriate resource allocation for each category.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Testing & Compliance Delays</h3>
                    <p className="text-muted-foreground">
                      Build in mandatory wait times for lab testing results, regulatory approvals, and compliance reviews. 
                      These delays are non-negotiable and must be factored into all production timelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cross-Department Handoffs</h3>
                    <p className="text-muted-foreground">
                      Clearly define when and how products move between cultivation, processing, packaging, and distribution. 
                      Include quality checkpoints and documentation requirements at each transition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Seasonal & Market Adjustments</h3>
                    <p className="text-muted-foreground">
                      Account for seasonal demand fluctuations, holiday rushes, and market trends. Build flexibility 
                      into your schedule to ramp production up or down based on anticipated demand changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Bottlenecks */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-6">Common Bottlenecks</h2>
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mt-1" />
                <div>
                  <p className="font-bold text-yellow-600 dark:text-yellow-400 mb-4">
                    Critical Production Pain Points
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Even well-planned schedules can derail due to common industry bottlenecks. Identifying and planning 
                    for these issues is essential for maintaining consistent production flow.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-red-500">Testing & Compliance Delays</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Lab testing backlogs during peak seasons</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Failed tests requiring retesting or disposal</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Regulatory inspection delays</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Packaging compliance changes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-red-500">Staffing & Resource Issues</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Inconsistent staffing levels and high turnover</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Equipment breakdowns and maintenance delays</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Supply chain disruptions for materials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Seasonal labor shortages during harvest</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-red-500">Inventory & Visibility Problems</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Poor inventory tracking causing material shortages</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Lack of real-time production visibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Disconnected systems between departments</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Manual tracking leading to errors</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-red-500">Production Coordination Issues</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Edibles production not synced with distillate availability</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Packaging materials arriving after product is ready</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Harvest timing misaligned with processing capacity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>Quality control creating unexpected delays</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h4 className="font-semibold text-primary mb-3">Mitigation Strategies</h4>
              <ul className="text-muted-foreground space-y-2">
                <li>• Build 20-30% buffer time into all critical path activities</li>
                <li>• Maintain backup suppliers and alternative processes</li>
                <li>• Implement real-time tracking and communication systems</li>
                <li>• Cross-train staff to handle multiple roles during shortages</li>
                <li>• Establish relationships with multiple testing labs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Template or Tool Suggestions */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Package className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Ready-to-Use Templates</h2>
            </div>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get started with our professionally designed production scheduling templates. These tools include 
              pre-built workflows for common cannabis operations and can be customized for your specific needs.
            </p>
            
            <Link
              href="/resources#production-templates"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              <Calendar className="w-6 h-6" />
              Download Templates (Coming Soon)
            </Link>
            
            <p className="text-sm text-muted-foreground mt-4">
              Includes cultivation schedules, processing workflows, and quality control checklists
            </p>
          </div>
        </section>

        {/* Implementation Tips */}
        <section className="mb-12">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-6">Implementation Best Practices</h2>
            
            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Start Simple, Scale Gradually</h3>
                <p className="text-muted-foreground">
                  Begin with basic weekly schedules for your core processes. Once your team is comfortable with 
                  consistent scheduling, add more detailed daily planning and advanced features like resource optimization.
                </p>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Involve Your Team in Planning</h3>
                <p className="text-muted-foreground">
                  The people doing the work often have the best insights into realistic timeframes and potential issues. 
                  Regular planning meetings with department heads ensure buy-in and more accurate scheduling.
                </p>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Track and Adjust Continuously</h3>
                <p className="text-muted-foreground">
                  Monitor actual vs. planned performance weekly. Use this data to refine time estimates, identify 
                  recurring bottlenecks, and improve future scheduling accuracy. What gets measured gets managed.
                </p>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Plan for the Unexpected</h3>
                <p className="text-muted-foreground">
                  Cannabis operations face unique challenges from regulatory changes to crop failures. Build contingency 
                  plans for common scenarios and maintain flexibility to adapt when unexpected issues arise.
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
                href="/calculators/production-goal-planner"
                className="flex items-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  Production Goal Planner Calculator
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
                href="/calculators/sop-time-tracker"
                className="flex items-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  SOP Time Tracking Calculator
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}