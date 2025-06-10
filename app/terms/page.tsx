"use client";

import Layout from "@/components/Layout";
import { FileText } from "lucide-react";

export default function Terms() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                Terms of Service
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully before using this site.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto bg-secondary rounded-xl shadow-lg border border-border p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using BUD Calculator ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. These Terms of Service apply to all visitors, users, and others who access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Use of the Website</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                BUD Calculator provides free cannabis business calculators and educational resources. You may use our calculators and tools for legitimate business planning and educational purposes. The Service is intended for use by cannabis industry professionals, consultants, and businesses operating in jurisdictions where cannabis is legal.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You agree not to use the Service for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Service. You are responsible for ensuring that your use of the Service complies with all applicable local, state, and federal laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of BUD Calculator and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You may use our calculators and reference our methodologies for your business purposes, but you may not reproduce, distribute, or create derivative works of our content without explicit permission. Educational and fair use references with proper attribution are permitted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The information provided by BUD Calculator is for educational and planning purposes only. While we strive for accuracy, we make no warranties or representations about the accuracy, reliability, completeness, or timeliness of the content, services, software, text, graphics, and links provided.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                BUD Calculator shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your use of the Service. This includes, but is not limited to, business losses, lost profits, or damages resulting from business decisions made based on our calculators or content.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You acknowledge that cannabis business operations involve significant regulatory, financial, and operational risks. Our tools are designed to assist with planning and analysis, but should not be your sole basis for business decisions. Always consult with qualified professionals including attorneys, accountants, and industry experts before making significant business decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Updates to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service. We encourage you to review these Terms periodically for any changes.
              </p>
            </section>

            <div className="bg-muted/50 rounded-lg p-6 mt-8">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Last Updated:</strong> January 2025<br/>
                <strong>Contact:</strong> If you have any questions about these Terms of Service, please contact us through our contact page.
              </p>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}