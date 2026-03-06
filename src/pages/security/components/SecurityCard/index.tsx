import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import type { SecurityCardItem } from "../../../../utilities/constants/securityConsts";
import styles from "./styles.module.scss";

interface Props {
  card: SecurityCardItem;
}

export default function SecurityCard({ card }: Props): ReactElement {
  const hasDualIcons = card.icons && card.icons.length === 2;
  const Icon0 = card.icons?.[0];
  const Icon1 = card.icons?.[1];
  const Icon = card.icon;

  return (
    <Box className={styles.cardContainer}>
      <Box className={styles.iconsRow}>
        {hasDualIcons && Icon0 && Icon1 ? (
          <>
            <Box
              className={`${styles.iconContainer} ${styles.instagramGradient}`}
            >
              <Icon0 sx={{ fontSize: 28 }} />
            </Box>
            <Box
              className={`${styles.iconContainer} ${styles.facebookBlue}`}
            >
              <Icon1 sx={{ fontSize: 28 }} />
            </Box>
          </>
        ) : (
          Icon && (
            <Box className={styles.iconContainer}>
              <Icon sx={{ fontSize: 32 }} />
            </Box>
          )
        )}
      </Box>
      <Typography className={styles.cardTitle}>{card.title}</Typography>
      <Typography className={styles.cardDescription}>
        {card.description}
      </Typography>
    </Box>
  );
}

