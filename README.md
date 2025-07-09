# 🌿 BUD Calculator

A comprehensive suite of business calculators designed specifically for the cannabis industry. Built with modern web technologies to provide accurate, real-time calculations for cultivation, extraction, edibles production, and business operations.

## 📋 Project Overview

BUD Calculator is a Next.js web application that provides 20+ specialized calculators for cannabis business operations. Each calculator is designed as a standalone tool that helps cannabis entrepreneurs make data-driven decisions about their operations, from cultivation costs to extraction efficiency and profit margins.

The application features a clean, professional interface built with Tailwind CSS and includes comprehensive analytics tracking via Google Tag Manager and Supabase for user behavior insights.

## 🛠 Tech Stack

- **Framework**: Next.js 13.5.1 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.3.3
- **UI Components**: Radix UI + Headless UI
- **Database**: Supabase (PostgreSQL)
- **Analytics**: Google Tag Manager
- **Deployment**: Netlify
- **Development**: Cursor IDE

### Key Dependencies
- `@supabase/supabase-js` - Database and authentication
- `framer-motion` - Animations and transitions
- `lucide-react` - Icon library
- `class-variance-authority` - Component variants
- `tailwind-merge` - Tailwind class merging

## 🚀 Deployment

The application is deployed on **Netlify** with automatic deployments from the main branch. The build process uses Next.js static export for optimal performance.

### Build Commands
```bash
npm run build  # Build for production
npm run dev    # Start development server
npm run start  # Start production server
```

## ✨ Key Features

### 🧮 Calculator Suite
- **20+ Specialized Calculators** across 4 categories:
  - **Cultivation**: Cost per unit, break-even, yield forecasting, lighting costs, labor costs
  - **Extraction**: Decarboxylation, extraction costs, processing output, process comparison, solvent recovery
  - **Edibles**: Infusion dosage, unit costs, THC loss, gummy recipes
  - **Business**: Profit margins, cost allocation, production planning, SOP tracking

### 📊 Data & Analytics
- **Supabase Integration**: All calculator results logged to PostgreSQL database
- **Google Tag Manager**: Comprehensive analytics and conversion tracking
- **Referral Tracking**: localStorage-based referral system for attribution
- **User Behavior Insights**: Track calculator usage patterns and popular tools

### 🎨 User Experience
- **Mobile-First Design**: Fully responsive across all devices
- **Professional UI**: Clean, modern interface with consistent styling
- **Standalone Calculators**: Each tool works independently
- **Real-time Calculations**: Instant results with no page refreshes

### 🔒 Privacy & Security
- **Age Gate**: Compliance with cannabis industry regulations
- **Data Privacy**: Secure handling of user calculations
- **No Personal Data**: Calculators don't require personal information

## ✅ V2 Development To-Do List

### 🧩 General Site Improvements
- [ ] Refactor all pages to use shared layout and footer components
- [ ] Standardize spacing, font sizes, and white card structure across all calculators
- [ ] Add favicon and manifest file for better mobile support
- [ ] Ensure all calculators are mobile-optimized

### 📊 Supabase Integration
- [x] Replace all Google Sheets logging with Supabase logging
- [ ] Add consistent referral tracking via `/js/referral.js`
- [ ] Set up Supabase auth or row-level security if needed in future

### 🔍 SEO + Metadata
- [ ] Ensure every page has unique title, meta description, and canonical URL
- [ ] Submit sitemap to Google Search Console
- [ ] Test OG and Twitter card previews

### 🎯 Tracking & Analytics
- [x] Install GTM sitewide
- [ ] Verify GTM events for calculator usage and form submissions
- [ ] Add basic GA4 conversion tracking (e.g. toolkit downloads)

### ✉️ Email + Funnel Tracking
- [x] Email capture works on homepage
- [ ] Ensure `bud_user_email` and `referral_id` are stored and passed to Supabase
- [ ] Create backend process to track calculator usage per user/email

### 🧪 Testing & QA
- [ ] Test all calculators with invalid inputs
- [ ] Add visual confirmation or loading animation after submit
- [ ] Confirm all calculators work offline (optional)

### 🚧 Planned Pages (Coming Soon)
- [ ] Bud Calculator Pro landing page
- [ ] Recipes section (link to BudPantry)
- [ ] Resources page with affiliate links

## 🛠 Notes for Cursor AI

- Project uses React with TypeScript (.tsx) and Tailwind CSS
- All pages should use shared layout and component structure
- All calculators must log results to Supabase via POST
- Referral ID from `localStorage` must be included in every log
- Use clean, reusable components — no unnecessary complexity

## 📁 Project Structure

```
budcalculator-v2/
├── app/                    # Next.js App Router pages
│   ├── calculators/        # Individual calculator pages
│   ├── resources/          # Industry guides and resources
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # Radix UI components
│   ├── Header.tsx        # Site header
│   ├── Footer.tsx        # Site footer
│   └── Layout.tsx        # Page layout wrapper
├── data/                 # Static data and configurations
├── lib/                  # Utility functions and configurations
│   ├── supabase.ts      # Supabase client configuration
│   └── utils.ts         # Helper functions
└── hooks/               # Custom React hooks
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd budcalculator-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📈 Analytics & Tracking

The application uses a multi-layered tracking approach:

- **Google Tag Manager**: Site-wide analytics and conversion tracking
- **Supabase**: User behavior and calculator usage logging
- **Referral System**: localStorage-based attribution tracking

All calculator submissions include:
- Calculator type and inputs
- Timestamp and session data
- Referral ID (if available)
- User email (if provided)

## 🤝 Contributing

This project is actively maintained and welcomes contributions. Please ensure all calculators follow the established patterns and include proper Supabase logging.

## 📄 License

This project is proprietary software. All rights reserved.

---

**Built with ❤️ for the cannabis industry** 