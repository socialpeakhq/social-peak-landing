import {
  SpaceDashboardOutlined,
  InsertChartOutlined,
  LinkOutlined,
} from "@mui/icons-material";

export interface StepCard {
  icon: React.ElementType;
  description: string;
  title: string;
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
