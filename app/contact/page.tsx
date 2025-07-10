"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Build payload
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString(),
      };

      // Log payload for debugging
      console.log('Contact form payload:', payload);

      // Send POST request to Supabase
      const response = await fetch('https://gvgucgahetbcpdwfivif.supabase.co/rest/v1/contact_messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Z3VjZ2FoZXRiY3Bkd2ZpdmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NzY4MjYsImV4cCI6MjA2NjM1MjgyNn0.Oaca0OnRXR86xbRvm1j6YWUBoPR5Tk4N_qMiuauUC5U',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Z3VjZ2FoZXRiY3Bkd2ZpdmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NzY4MjYsImV4cCI6MjA2NjM1MjgyNn0.Oaca0OnRXR86xbRvm1j6YWUBoPR5Tk4N_qMiuauUC5U',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Message sent!");
        setStatus({
          type: 'success',
          message: 'Thanks for reaching out!'
        });
        
        // Clear form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.error('Contact form submission failed:', response.status, response.statusText);
        alert("Error sending message");
        setStatus({
          type: 'error',
          message: 'Sorry, there was an error sending your message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert("Error sending message");
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    }
  };

  const inputClasses = "w-full rounded-lg bg-background text-foreground px-4 py-3 text-sm ring-1 ring-border/30 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground border-0 transition-all";

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section - Option 1: Clean Minimal Design */}
        <div className="bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Mail className="w-8 h-8 text-primary" />
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                  Contact Us
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Got questions, feedback, or custom tool requests? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-secondary rounded-xl shadow-lg border border-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Send us a message</h2>
              </div>

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
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about? (optional)"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what's on your mind..."
                    required
                    rows={6}
                    className={inputClasses}
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
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto mt-12"
          >
            <div className="bg-muted/50 rounded-xl border border-border p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Feature Requests:</strong> Have an idea for a new calculator or tool? 
                  We're always looking to add value for cannabis businesses.
                </p>
                <p>
                  <strong>Bug Reports:</strong> Found something that's not working right? 
                  Let us know and we'll fix it quickly.
                </p>
                <p>
                  <strong>Partnership Inquiries:</strong> Interested in collaborating or integrating 
                  our tools? We'd love to explore opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}