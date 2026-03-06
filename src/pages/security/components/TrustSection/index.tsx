import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import TrustCard from "../TrustCard";
import {
  TRUST_CARDS,
  type TrustCardItem,
} from "../../../../utilities/constants/securityConsts";

export default function TrustSection(): ReactElement {
  return (
    <Box className={styles.sectionContainer}>
      <Typography className={styles.title}>Committed to Your Trust</Typography>
      <Typography className={styles.subtitle}>
        We use official Meta APIs and OAuth authentication to ensure the highest
        level of security and compliance.
      </Typography>

      <Box className={styles.cardsRow}>
        {TRUST_CARDS.map((card: TrustCardItem) => (
          <TrustCard key={card.title} card={card} />
        ))}
      </Box>
    </Box>
  );
}

