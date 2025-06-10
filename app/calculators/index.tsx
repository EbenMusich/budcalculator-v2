import React, { useState } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import { calculators } from "../../data/calculatorData";

export default function CalculatorsPage() {
  const [category, setCategory] = useState("All");

  const categories = ["All", "Cultivation", "Extraction", "Edibles", "Business"];

  return (
    <Layout>
      <div className="min-h-screen px-6 py-16 max-w-7xl mx-auto">
        {/* Explainer Hero */}
        <section className="bg-white rounded-xl shadow p-6 mb-8 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Free Cannabis Business Calculators</h1>
          <p className="text-gray-600">
            From cultivators to extractors, these tools help you break down costs, forecast yields,
            price products, and improve efficiency. No logins. No fluff.
          </p>
        </section>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map((label) => (
            <button
              key={label}
              onClick={() => setCategory(label)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                category === label
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-green-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Calculator Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators
            .filter((calc) => category === "All" || calc.category === category)
            .map((calc) => (
              <Link key={calc.slug} href={`/calculators/${calc.slug}`}>
                <div className="cursor-pointer border rounded-xl shadow p-4 hover:shadow-md transition bg-white">
                  <h2 className="text-lg font-semibold">{calc.name}</h2>
                  <p className="text-sm text-gray-600">{calc.description}</p>
                  <span className="mt-2 inline-block text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded">
                    {calc.category}
                  </span>
                </div>
              </Link>
            ))}
        </div>

        {/* CTA */}
        <section className="mt-16 text-center">
          <p className="text-sm text-gray-500">Want to go deeper into costing or production?</p>
          <Link
            href="/resources"
            className="inline-block mt-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow"
          >
            Explore Resources
          </Link>
        </section>
      </div>
    </Layout>
  );
}
