import Link from "next/link";
import { Calculator, TrendingUp, Zap, FlaskConical, Candy, DollarSign, Flame } from "lucide-react";

export default function Hero() {
  const featuredCalculators = [
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Break-even Calculator",
      description: "Calculate your break-even point and optimal pricing strategy",
      href: "/calculators/break-even"
    },
    {
      icon: <Flame className="w-6 h-6 text-primary" />,
      title: "🔥 Decarboxylation Calculator",
      description: "Estimate activated THC & CBD after decarbing flower or concentrates",
      href: "/calculators/decarboxylation-calculator"
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Yield Forecasting Calculator",
      description: "Predict harvest yields based on lights, plants, or canopy area",
      href: "/calculators/yield-forecasting"
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-primary" />,
      title: "Extraction Cost Calculator",
      description: "Calculate costs and efficiency of extraction processes",
      href: "/calculators/extraction-cost"
    },
    {
      icon: <Candy className="w-6 h-6 text-primary" />,
      title: "Edibles Dosage Calculator",
      description: "Calculate precise THC/CBD dosages for infused products",
      href: "/calculators/infusion-dosage"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Profit Margin Calculator",
      description: "Estimate profit margins across all product lines",
      href: "/calculators/profit-margin"
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-800/10 to-green-600/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Text */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl mb-8">
            Powerful Free Tools for Every Cannabis Business
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional-grade calculators to optimize your operations, reduce costs, and maximize profitability
          </p>
        </div>

        {/* Featured Calculator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredCalculators.map((calculator, index) => (
            <Link
              key={calculator.title}
              href={calculator.href}
              className="group bg-secondary/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 p-6 hover:shadow-lg hover:-translate-y-1 block"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  {calculator.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {calculator.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {calculator.description}
                  </p>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors group-hover:gap-3">
                Try Calculator
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/calculators"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Calculator className="w-6 h-6" />
            View All Calculators
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            18+ professional calculators • Free to use • No registration required
          </p>
        </div>
      </div>
    </div>
  );
}