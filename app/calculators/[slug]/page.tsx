"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { calculators } from "@/data/calculatorData";

export default function CalculatorPage() {
  const params = useParams();
  const calculator = calculators.find(calc => calc.slug === params.slug);

  if (!calculator) {
    return (
      <Layout>
        <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold">Calculator not found</h1>
          <Link 
            href="/calculators"
            className="inline-flex items-center mt-4 text-primary hover:text-primary/90"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Calculators
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/calculators"
          className="inline-flex items-center text-primary hover:text-primary/90"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Calculators
        </Link>
        
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-2">{calculator.name}</h1>
          <p className="text-muted-foreground">{calculator.description}</p>
        </div>

        <div className="mt-8">
          {/* Calculator content will be added here */}
        </div>
      </div>
    </Layout>
  );
}