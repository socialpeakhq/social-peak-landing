import {
  Instagram,
  Facebook,
  LockOutlined,
  ManageAccountsOutlined,
  StorageOutlined,
  VerifiedUserOutlined,
  ViewInArOutlined,
  ShieldOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";

export interface SecurityCardItem {
  icon?: React.ElementType;
  icons?: [React.ElementType, React.ElementType];
  title: string;
  description: string;
}

export const SECURITY_CARDS: SecurityCardItem[] = [
  {
    icons: [Instagram, Facebook],
    title: "Official Meta Integrations",
    description: "Secure connections with Meta's official API",
  },
  {
    icon: LockOutlined,
    title: "Encrypted Data Storage",
    description: "Your data is encrypted and securely stored",
  },
  {
    icon: ManageAccountsOutlined,
    title: "User Controlled Access",
    description: "Granular permissions and account control",
  },
  {
    icon: StorageOutlined,
    title: "Secure Infrastructure",
    description: "Reliable servers with advanced security",
  },
  {
    icon: VerifiedUserOutlined,
    title: "Privacy Focused Design",
    description: "No passwords stored, privacy-first approach",
  },
  {
    icon: TrendingUpOutlined,
    title: "Continuous Monitoring",
    description: "24/7 monitoring and threat detection",
  },
];

export type TrustCardVariant = "meta" | "oauth";

export interface TrustCardItem {
  icon: React.ElementType;
  title: string;
  variant: TrustCardVariant;
}

export const TRUST_CARDS: TrustCardItem[] = [
  {
    icon: ViewInArOutlined,
    title: "Meta API",
    variant: "meta",
  },
  {
    icon: ShieldOutlined,
    title: "Secure OAuth Authentication",
    variant: "oauth",
  },
];

