import type { CardProps } from "./homeConsts";
import multiAccount from "../../assets/images/features/multi-account.svg";
import analyticsReports from "../../assets/images/features/analytics-report.svg";
import unifiedContent from "../../assets/images/features/content-create.svg";
import adsManagement from "../../assets/images/features/ads-management.svg";
import engagementTools from "../../assets/images/features/social-engagement.svg";
import teamWorkflow from "../../assets/images/features/team-workflow.svg";

export const FEATURES_CARDS: CardProps[] = [
  {
    title: "Multi-Account Integration",
    description:
      "Connect and manage all your social media accounts from one secure dashboard",
    image: multiAccount,
  },
  {
    title: "In-Depth Analytics & Reports",
    description:
      "Gain valuable insights into performance metrics for each of your social media accounts.",
    image: analyticsReports,
  },
  {
    title: "Unified Content Creation & Scheduling",
    description:
      "Draft, schedule, and publish posts across all your social media networks with ease.",
    image: unifiedContent,
  },
  {
    title: "Ads Management (Meta & Google)",
    description:
      "Manage and optimize advertising campaigns for Meta Ads and Google Ads.",
    image: adsManagement,
  },
  {
    title: "Social Media Engagement Tools",
    description:
      "Respond to comments, messages, and mentions quickly to boost engagement with your audience.",
    image: engagementTools,
  },
  {
    title: "Team Collaboration & Workflow",
    description:
      "Coordinate with team members, assign tasks, and streamline your approval process.",
    image: teamWorkflow,
  },
];
