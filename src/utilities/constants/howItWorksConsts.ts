import {
  SpaceDashboardOutlined,
  InsertChartOutlined,
  LinkOutlined,
  Instagram,
  Facebook,
} from "@mui/icons-material";

export interface StepCard {
  icon: React.ElementType;
  description: string;
  title: string;
}

export interface MetaCardItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const STEPS_CARD: StepCard[] = [
  {
    icon: LinkOutlined,
    description:
      "Securely connect your Instagram Business and Facebook Pages through official Meta integrations. No password storage—just secure API-based connections.",
    title: "Connect Your Accounts",
  },
  {
    icon: InsertChartOutlined,
    description:
      "Automatically sync analytics, engagement metrics, and performance insights across all connected accounts in one unified dashboard.",
    title: "Sync & Analyze Performance",
  },
  {
    icon: SpaceDashboardOutlined,
    description:
      "Monitor accounts, track growth, manage content, and oversee campaigns from a centralized and organized workspace.",
    title: "Manage Everything from One Dashboard",
  },
];

export const META_INTEGRATION_CARDS: MetaCardItem[] = [
  {
    icon: Instagram,
    title: "Instagram Business",
    description:
      "Connect and manage your Instagram Business accounts with official API access.",
  },
  {
    icon: Facebook,
    title: "Facebook Pages",
    description:
      "Manage your Facebook Pages with secure Meta Business Partner integration.",
  },
];
