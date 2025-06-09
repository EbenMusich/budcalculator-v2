"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Zap, Mail, CheckCircle, AlertCircle } from "lucide-react";

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function BudCalculatorPro() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const features = [
    "📈 Advanced reports and visual graphs",
    "🧩 Customizable calculator templates", 
    "🔁 Data tracking over time",
    "📊 Multi-product margin analysis",
    "⚙️ Pro-only SOP tools and time studies"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email.trim()) {
      setStatus({
        type: 'error',
        message: 'Please enter your email address.'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Adding you to the list...' });

    try {
      // Simulate API call - replace with actual endpoint when ready
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus({
        type: 'success',
        message: 'Thanks! We\'ll notify you when Pro launches.'
      });
      
      setEmail("");
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error. Please try again.'
      });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Hero Section */}
            <div className="mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Zap className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                  Bud Calculator Pro
                </h1>
              </div>
              <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8">
                <span className="text-primary font-medium text-lg">Coming Soon</span>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Take your cannabis business to the next level with advanced analytics, 
                custom templates, and professional-grade tools designed for serious operators.
              </p>
            </div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary rounded-xl border border-border p-8 mb-16"
            >
              <h2 className="text-2xl font-bold mb-8">What's Coming in Pro</h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center text-left p-4 bg-background rounded-lg"
                  >
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Email Capture Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-secondary rounded-xl border border-border p-8 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Get Notified When Pro Launches</h2>
              </div>
              
              <p className="text-muted-foreground mb-8">
                Be the first to know when Bud Calculator Pro is available. 
                We'll send you early access and special launch pricing.
              </p>

              {/* Status Messages */}
              {status.type !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                    status.type === 'success' 
                      ? 'bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400'
                      : status.type === 'error'
                      ? 'bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400'
                      : 'bg-primary/10 border border-primary/20 text-primary'
                  }`}
                >
                  {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
                  {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
                  {status.type === 'loading' && (
                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  )}
                  <span className="font-medium">{status.message}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full rounded-lg bg-background text-foreground px-4 py-3 text-lg ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground border-0 transition-all"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status.type === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground py-4 rounded-lg font-medium text-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-3"
                >
                  {status.type === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Adding you to the list...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      Notify Me
                    </>
                  )}
                </motion.button>
              </form>

              <p className="text-sm text-muted-foreground mt-6">
                No spam, ever. We'll only email you about Pro updates and launch details.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}