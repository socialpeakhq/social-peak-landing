import socialMedia from "../../assets/images/sections-images/socialMedia.png";
import analytics from "../../assets/images/sections-images/analytics.png";
import manageAds from "../../assets/images/sections-images/manageAds.png";

import advanced_analytics from "../../assets/images/sections-images/advanced_analytics.png";
import unified_dashboard from "../../assets/images/sections-images/unified_dashboard.png";
import multi_account from "../../assets/images/sections-images/multi-account.png";

export interface CardProps {
  image: string;
  description: string;
  title: string;
}

export const FEATURES_CARDS: CardProps[] = [
  {
    image: socialMedia,
    title: "Monitor Multiple Accounts",
    description:
      "Manage and oversee multiple social media accounts from a single centralized workspace with complete visibility and control.",
  },
  {
    image: analytics,
    title: "Track Analytics & Performance",
    description:
      "Monitor performance metrics, engagement trends, and growth across all connected platforms in one unified and easy-to-understand analytics dashboard.",
  },
  {
    image: manageAds,
    title: "Manage Ads & Campaings",
    description:
      "Plan, monitor, and optimize advertising campaigns across connected platforms from one unified and performance-focused dashboard.",
  },
];

export const HOW_IT_WORKS_CARDS: CardProps[] = [
  {
    image: unified_dashboard,
    title: "Unified Dashboard",
    description:
      "Access all your social media data, messages, analytics, and campaigns from one centralized and streamlined control panel.",
  },
  {
    image: multi_account,
    title: "Multi-Account Management",
    description:
      "Connect and manage multiple social media accounts and client profiles efficiently within a single organized workspace.",
  },
  {
    image: advanced_analytics,
    title: "Advanced Analytics & Reporting",
    description:
      "Gain actionable insights with detailed performance analytics and structured reports to support smarter data-driven decisions.",
  },
];
