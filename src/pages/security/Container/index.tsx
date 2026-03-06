import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import SecurityCardsSection from "../components/SecurityCardsSection";
import TrustSection from "../components/TrustSection";
import SecurityCtaSection from "../components/SecurityCtaSection";
import styles from "./styles.module.scss";

export default function Security(): ReactElement {
  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Security &amp; Trust</Typography>
      <Typography className={styles.pageDescription}>
        Your data security is our priority. We use official Meta APIs and
        maintain the highest standards of security and compliance.
      </Typography>
      <SecurityCardsSection />
      <TrustSection />
      <SecurityCtaSection />
    </Box>
  );
}

