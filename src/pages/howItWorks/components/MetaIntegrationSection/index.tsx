import { type ReactElement } from "react";
import styles from "./styles.module.scss";
import { Box, Typography } from "@mui/material";
import { ShieldOutlined } from "@mui/icons-material";
import MetaCard from "../MetaCard";
import { META_INTEGRATION_CARDS, type MetaCardItem } from "../../../../utilities/constants/howItWorksConsts";

export default function MetaIntegrationSection(): ReactElement {
  return (
    <Box className={styles.metaIntegrationContainer}>
      <Typography className={styles.title}>
        Built for Official Meta Integrations
      </Typography>
      <Typography className={styles.subtitle}>
        Social Peak uses official Meta Business APIs to securely connect your accounts. We never store
        passwords—only secure, authorized API tokens.
      </Typography>

      <Box className={styles.topCardsRow}>
        {META_INTEGRATION_CARDS.map((card: MetaCardItem) => (
          <MetaCard key={card.title} card={card} />
        ))}
      </Box>

      <Box className={styles.bottomCardRow}>
        <Box className={styles.bottomCard}>
          <Box className={styles.bottomIcon}>
            <ShieldOutlined fontSize="medium" />
          </Box>
          <Box className={styles.bottomTextWrapper}>
            <Typography className={styles.bottomTitle}>
              Secure API Connections
            </Typography>
            <Typography className={styles.bottomDescription}>
              All connections are made through official Meta APIs using OAuth 2.0. We never store
              your passwords or have access to your login credentials.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}