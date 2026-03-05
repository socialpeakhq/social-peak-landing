import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import UpcomingFeatureCard from "../UpcomingFeatureCard";
import {
  UPCOMING_FEATURE_CARDS,
  type UpcomingFeatureCardItem,
} from "../../../../utilities/constants/howItWorksConsts";

export default function UpcomingFeaturesSection(): ReactElement {
  return (
    <Box className={styles.sectionContainer}>
      <Typography className={styles.pill}>What&apos;s Next</Typography>
      <Typography className={styles.title}>Upcoming Features</Typography>
      <Typography className={styles.subtitle}>
        We&apos;re constantly improving Social Peak with new features to make your
        workflow even more efficient.
      </Typography>

      <Box className={styles.cardsRow}>
        {UPCOMING_FEATURE_CARDS.map((card: UpcomingFeatureCardItem) => (
          <UpcomingFeatureCard key={card.title} card={card} />
        ))}
      </Box>
    </Box>
  );
}

