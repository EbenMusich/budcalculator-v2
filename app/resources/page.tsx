"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import { ArrowLeft, Calculator, FileText, BookOpen, Wrench } from "lucide-react";

export default function ResourcesPage() {
  const calculatorLinks = [
    { name: "Break-even Calculator for Cultivators", href: "/calculators/break-even" },
    { name: "Cost Per Unit Calculator", href: "/calculators/cost-per-unit" },
    { name: "Yield Forecasting Calculator", href: "/calculators/yield-forecasting" },
    { name: "Extraction Cost Calculator", href: "/calculators/extraction-cost" },
    { name: "Decarboxylation Loss Calculator", href: "/calculators/decarboxylation-calculator" },
    { name: "Solvent Recovery Efficiency Calculator", href: "/calculators/solvent-recovery" },
    { name: "Infusion Dosage Calculator", href: "/calculators/infusion-dosage" },
    { name: "Labor Cost Tracking Tool", href: "/calculators/labor-cost-plant" },
    { name: "Cost Allocation Tool", href: "/calculators/cost-allocation-tool" },
    { name: "Edibles Unit Cost Calculator", href: "/calculators/edibles-unit-cost" },
  ];

  const industryGuides = [
    { name: "How to Calculate True Cost Per Pound of Cannabis Flower", href: "/resources/true-cost-per-pound" },
    { name: "A Step-by-Step Guide to Cannabis Extraction Efficiency", href: "/resources/industry-guides/extraction-efficiency" },
    { name: "Building a Cannabis Production Schedule That Works", href: "/resources/industry-guides/production-schedule" },
    { name: "Understanding Yield Forecasting for Cultivators", href: "/resources/industry-guides/yield-forecasting-guide" },
    { name: "Reducing Labor Costs in Cannabis Manufacturing", href: "/resources/industry-guides/labor-costs-guide" },
  ];

  const softwareTools = [
    "Canix", "Trym", "GrowFlow", "Distru", "Apex Trading"
  ];

  const packagingSupplies = [
    "Kush Supply Co", "ePac", "Greenlane Wholesale", "Marijuana Packaging", "Custom Cones USA"
  ];

  const complianceServices = [
    "Simplifya", "METRC"
  ];

  const otherTools = [
    "Nabis", "Highopes", "Wick & Mortar"
  ];

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/calculators"
          className="inline-flex items-center text-primary hover:text-primary/90 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Calculators
        </Link>

        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl mb-6">
            Cannabis Business Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools, templates, guides, and services to optimize your cannabis operations
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-secondary rounded-xl border border-border p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-primary" />
            Table of Contents
          </h2>
          <nav className="grid md:grid-cols-2 gap-4">
            <a href="#calculators" className="text-primary hover:text-primary/90 transition-colors">
              Cannabis Calculators
            </a>
            <a href="#templates" className="text-primary hover:text-primary/90 transition-colors">
              Production Templates & Tracking Sheets
            </a>
            <a href="#guides" className="text-primary hover:text-primary/90 transition-colors">
              Industry Guides
            </a>
            <a href="#tools" className="text-primary hover:text-primary/90 transition-colors">
              Recommended Tools & Services
            </a>
          </nav>
        </div>

        {/* Cannabis Calculators Section */}
        <section id="calculators" className="mb-16">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Calculator className="w-8 h-8 text-primary" />
              Cannabis Calculators
            </h2>
            <p className="text-muted-foreground mb-8">
              Professional-grade calculators to optimize your cannabis business operations across cultivation, 
              extraction, edibles, and business planning.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {calculatorLinks.map((calculator, index) => (
                <Link
                  key={index}
                  href={calculator.href}
                  className="flex items-center p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {calculator.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Production Templates Section */}
        <section id="templates" className="mb-16">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary" />
              Production Templates & Tracking Sheets
            </h2>
            <p className="text-muted-foreground mb-8">
              Streamline your operations with our professionally designed templates and tracking systems.
            </p>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mr-4"></div>
                <span className="text-muted-foreground">Batch Production Tracking Spreadsheet (Coming Soon)</span>
              </div>
              <div className="flex items-center p-4 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mr-4"></div>
                <span className="text-muted-foreground">Packaging Log Templates (Coming Soon)</span>
              </div>
              <div className="flex items-center p-4 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mr-4"></div>
                <span className="text-muted-foreground">Extraction Yield Tracking Sheet (Coming Soon)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Guides Section */}
        <section id="guides" className="mb-16">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              Industry Guides
            </h2>
            <p className="text-muted-foreground mb-8">
              In-depth guides and best practices from industry experts to help you optimize your cannabis operations.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {industryGuides.map((guide, index) => (
                <Link
                  key={index}
                  href={guide.href}
                  className="flex items-center p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {guide.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Tools & Services Section */}
        <section id="tools" className="mb-16">
          <div className="bg-secondary rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-primary" />
              Recommended Tools & Services
            </h2>
            <p className="text-muted-foreground mb-8">
              Trusted partners and tools that cannabis businesses rely on for operations, compliance, and growth.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Software */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Software</h3>
                <div className="space-y-3">
                  {softwareTools.map((tool, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-foreground">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packaging & Supplies */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Packaging & Supplies</h3>
                <div className="space-y-3">
                  {packagingSupplies.map((supplier, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-foreground">{supplier}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Services */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Compliance Services</h3>
                <div className="space-y-3">
                  {complianceServices.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Other</h3>
                <div className="space-y-3">
                  {otherTools.map((tool, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-foreground">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-primary/10 border border-primary/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Need More Resources?</h2>
          <p className="text-muted-foreground mb-6">
            We're constantly adding new calculators, templates, and guides to help cannabis businesses succeed.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Request a Resource
          </Link>
        </div>
      </div>
    </Layout>
  );
}