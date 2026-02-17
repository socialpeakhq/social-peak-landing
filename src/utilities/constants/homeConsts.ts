export interface CardProps {
  image: string;
  description: string;
  title: string;
}

import socialMedia from "../../assets/images/sections-images/socialMedia.png";
import analytics from "../../assets/images/sections-images/analytics.png";
import manageAds from "../../assets/images/sections-images/manageAds.png";

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
