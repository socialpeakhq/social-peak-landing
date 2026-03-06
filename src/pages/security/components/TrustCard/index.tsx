import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import type { TrustCardItem } from "../../../../utilities/constants/securityConsts";
import styles from "./styles.module.scss";

interface Props {
  card: TrustCardItem;
}

export default function TrustCard({ card }: Props): ReactElement {
  const Icon = card.icon;
  const isMeta = card.variant === "meta";

  return (
    <Box
      className={`${styles.cardContainer} ${
        isMeta ? styles.metaCard : styles.oauthCard
      }`}
    >
      <Box
        className={`${styles.iconWrapper} ${
          isMeta ? styles.metaIconWrapper : ""
        } ${card.variant === "oauth" ? styles.oauthIcon : styles.metaIcon}`}
      >
        <Icon sx={{ fontSize: isMeta ? 28 : 22 }} />
      </Box>
      <Typography className={styles.title}>{card.title}</Typography>
    </Box>
  );
}

