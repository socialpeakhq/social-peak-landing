import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import type { UpcomingFeatureCardItem } from "../../../../utilities/constants/howItWorksConsts";

interface Props {
  card: UpcomingFeatureCardItem;
}

export default function UpcomingFeatureCard({ card }: Props): ReactElement {
  const Icon = card.icon;

  return (
    <Box className={styles.cardContainer}>
      <Box className={styles.topRow}>
        <Box className={styles.iconWrapper}>
          <Icon fontSize="medium" />
        </Box>
        <Typography className={styles.badge}>Coming Soon</Typography>
      </Box>
      <Box>
        <Typography className={styles.titleLabel}>{card.title}</Typography>
        <Typography className={styles.descriptionLabel}>
          {card.description}
        </Typography>
      </Box>
    </Box>
  );
}

