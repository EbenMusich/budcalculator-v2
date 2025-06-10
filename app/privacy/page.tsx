"use client";

import Layout from "@/components/Layout";
import { Shield, Database, Cookie, Server, Lock, Mail } from "lucide-react";

export default function Privacy() {
  return (
    <Layout>
      <div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy matters. This policy outlines what we collect and how we use it.
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-secondary rounded-xl border border-border p-8 space-y-8">
          
          {/* What Data We Collect */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">What Data We Collect</h2>
            </div>
            <div className="text-muted-foreground space-y-3">
              <p>
                We collect minimal data to improve our calculators and user experience:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Calculator inputs and results (processed locally in your browser)</li>
                <li>Email addresses when voluntarily submitted through contact forms</li>
                <li>Basic usage analytics (page views, calculator usage patterns)</li>
                <li>localStorage data for referral tracking and user preferences</li>
              </ul>
            </div>
          </section>

          {/* How We Use It */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">How We Use Your Data</h2>
            </div>
            <div className="text-muted-foreground space-y-3">
              <p>
                Your data helps us provide better tools and services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Improve calculator accuracy and add new features</li>
                <li>Track usage trends to understand which tools are most valuable</li>
                <li>Enhance user experience and site performance</li>
                <li>Respond to support requests and feedback</li>
              </ul>
            </div>
          </section>

          {/* Cookies & Tracking */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Cookies & Tracking</h2>
            </div>
            <div className="text-muted-foreground space-y-3">
              <p>
                We use minimal tracking to improve our service:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Google Tag Manager for basic analytics</li>
                <li>localStorage for user preferences and referral tracking</li>
                <li>No third-party advertising cookies or invasive tracking</li>
                <li>No personal data sold to third parties</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Services */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Third-Party Services</h2>
            </div>
            <div className="text-muted-foreground space-y-3">
              <p>
                We use trusted third-party services to operate our site:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Google Sheets and Google Apps Script for data logging</li>
                <li>Hosting providers for website delivery</li>
                <li>Email services for contact form submissions</li>
                <li>Analytics services for usage tracking</li>
              </ul>
              <p className="text-sm">
                These services have their own privacy policies and data handling practices.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Data Security & Retention</h2>
            </div>
            <div className="text-muted-foreground space-y-3">
              <p>
                We take reasonable measures to protect your data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>HTTPS encryption for all data transmission</li>
                <li>Calculator inputs processed locally in your browser</li>
                <li>Limited data retention periods</li>
                <li>Regular security updates and monitoring</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Contact Us</h2>
            </div>
            <div className="text-muted-foreground space-y-3">
              <p>
                Have questions about this privacy policy or your data?
              </p>
              <p>
                <a 
                  href="/contact" 
                  className="text-primary hover:text-primary/80 underline font-medium"
                >
                  Contact us here
                </a> and we'll be happy to help.
              </p>
            </div>
          </section>

          <div className="bg-muted/50 rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Last Updated:</strong> January 2025<br/>
              <strong>Effective Date:</strong> This policy is effective immediately for all users.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
}