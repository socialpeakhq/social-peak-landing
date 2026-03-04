import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import type { MetaCardItem } from "../../../../utilities/constants/howItWorksConsts";

interface Props {
  card: MetaCardItem;
}

export default function MetaCard({ card }: Props): ReactElement {
  const Icon = card.icon;

  return (
    <Box className={styles.cardContainer}>
      <Box className={styles.iconWrapper}>
        <Icon fontSize="large" />
      </Box>
      <Typography className={styles.titleLabel}>{card.title}</Typography>
      <Typography className={styles.descriptionLabel}>
        {card.description}
      </Typography>
    </Box>
  );
}

