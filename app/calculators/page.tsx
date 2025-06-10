"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Calculator, Leaf, FlaskConical, PieChart } from "lucide-react";
import { calculators } from "@/data/calculatorData";

type Category = "All" | "Cultivation" | "Extraction" | "Edibles" | "Business";

export default function CalculatorsPage() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as Category) || "All";
  const [category, setCategory] = useState<Category>(initialCategory);

  const filteredCalculators = calculators.filter(calc => 
    category === "All" || calc.category === category
  );

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Cannabis Business Calculators</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional tools to help you optimize costs, forecast yields, and make data-driven decisions. 
            No sign-up required.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {["All", "Cultivation", "Extraction", "Edibles", "Business"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat as Category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                category === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCalculators.map((calc) => (
            <Link key={calc.slug} href={`/calculators/${calc.slug}`}>
              <div className="group bg-secondary rounded-xl p-6 hover:border-primary border transition-colors">
                <h2 className="text-lg font-semibold mb-2">{calc.name}</h2>
                <p className="text-sm text-muted-foreground">{calc.description}</p>
                <span className="mt-4 inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                  {calc.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}