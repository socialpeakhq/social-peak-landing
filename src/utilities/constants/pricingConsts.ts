export interface PricingCard {
  title: string;
  tagline: string;
  description: string;
  price: number;
  features: string[];
  popular: boolean;
}

export const PRICING_CARDS: PricingCard[] = [
  {
    title: "Starter",
    tagline: "For creators and individuals managing their own brand.",
    description:
      "Best for personal brands, influencers, and solo users connecting their Meta accounts in one unified dashboard.",
    price: 12,
    features: [
      "1 Workspace (Personal Brand)",
      "Up to 5 Connected Accounts (Meta)",
      "Unified Analytics Dashboard",
      "Basic Performance Insights",
      "Secure Meta Integrations (Instagram Business & Facebook Pages)",
      "Draft Creation & Content Planning",
    ],
    popular: false,
  },
  {
    title: "Professional",
    tagline:
      "For freelancers and social media managers handling multiple brands.",
    description:
      "Designed for professionals managing multiple clients, brands, and accounts with advanced analytics and scalable workspaces.",
    price: 29,
    features: [
      "5 Workspaces (Multiple Brands/Clients)",
      "Up to 15 Connected Accounts per Workspace",
      "Advanced Analytics & Insights",
      "Cross-Account Performance Tracking",
      "Content Scheduling (Upcoming)",
      "Reports Export (PDF & CSV)",
      "Priority Data Sync & Performance",
    ],
    popular: true,
  },
  {
    title: "Agency",
    tagline: "For agencies managing multiple clients at scale.",
    description:
      "Built for agencies and teams that require advanced reporting, multi-client workspaces, and scalable account management.",
    price: 69,
    features: [
      "20 Workspaces (Client & Brand Management)",
      "Up to 30 Connected Accounts per Workspace",
      "Advanced Analytics & Custom Reports",
      "Team Access & Role Management (Future)",
      "Ads Monitoring Dashboard (Meta Ads – Upcoming)",
      "AI Media Optimization (Future)",
      "Priority Support & Faster Sync Processing",
    ],
    popular: false,
  },
];
