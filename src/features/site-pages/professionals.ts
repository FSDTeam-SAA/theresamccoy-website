import { pageAssets } from "./assets";

export const professional = {
  slug: "sarah-chen",
  name: "Sarah Chen",
  title: "Senior Bookkeeper · E-commerce Specialist",
  location: "Sydney, NSW",
  languages: "English · Mandarin",
  years: 8,
  rate: 85,
  score: 96,
  rating: "4.9",
  projects: 63,
  clients: 48,
  hours: 1250,
  image: pageAssets.person,
  industry: "E-commerce & Retail",
  tier: "Elite",
  available: true,
  software: ["Xero", "Shopify", "QuickBooks", "A2X"],
  expertise: [
    "Xero",
    "Shopify",
    "QuickBooks",
    "A2X",
    "Inventory Reconciliation",
    "GST/BAS",
    "Multi-currency",
  ],
  certifications: [
    {
      name: "Xero Certified Advisor",
      issuer: "Xero",
      year: "2021",
      filter: "Xero Certified",
    },
    {
      name: "BAS Agent Registration",
      issuer: "Tax Practitioners Board",
      year: "2022",
      filter: "BAS Agent",
    },
    {
      name: "Marketplace Elite Certification",
      issuer: "Bookkeepers Marketplace",
      year: "2023",
      filter: "",
    },
    {
      name: "QuickBooks Online ProAdvisor",
      issuer: "Intuit",
      year: "2023",
      filter: "QuickBooks ProAdvisor",
    },
  ],
  skills: [
    "Inventory Reconciliation",
    "Multi-currency Accounting",
    "Shopify Revenue Reporting",
    "Shopify Revenue Reporting",
    "Bank Reconciliation",
    "Month-end Close",
    "Management Reporting",
    "Cash Flow Forecasting",
  ],
  portfolio: [
    {
      title: "DTC Fashion Brand — Shopify + Xero Integration",
      description:
        "Reduced monthly reconciliation time by 68% through A2X automation and custom Xero tracking categories for a $4M annual-revenue brand.",
    },
    {
      title: "Subscription Box Start-up — Recurring Revenue Setup",
      description:
        "Designed full chart of accounts and revenue recognition schedule for a $2.4M ARR business launching simultaneously in Australia and New Zealand.",
    },
    {
      title: "Multi-channel Retailer — Amazon + Shopify Consolidation",
      description:
        "Reconciled 18 months of backlogged multi-currency transactions across four platforms in six weeks, zero discrepancies on final audit.",
    },
  ],
} as const;
