import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import Secure from "../../../../assets/images/pricing/secure.svg?react"
import Lock from "../../../../assets/images/pricing/lock.svg?react"
import Check from "../../../../assets/images/pricing/check.svg?react"
import styles from "./styles.module.scss"

export default function SecureSection(): ReactElement {
  return (
    <Box className={styles.secureContainer}>
      <Typography className={styles.sectionTitle}>Trusted & Secure</Typography>
      <Typography className={styles.sectionDescription}>Your data security is our priority. We use official Meta APIs and maintain the highest standards of security and compliance.</Typography>
      <Box className={styles.cardsContainer}>
        <Box className={styles.card}>
          <Box className={styles.iconContainer}>
            <Secure />
          </Box>
          <Typography className={styles.cardTitle}>Official Meta Partner</Typography>
          <Typography className={styles.cardDescription}>Certified Meta Business Partner with direct API access</Typography>
        </Box>
        <Box className={styles.card}>
          <Box className={styles.iconContainer}>
            <Lock />
          </Box>
          <Typography className={styles.cardTitle}>Secure & Compliant</Typography>
          <Typography className={styles.cardDescription}>Enterprise-grade security with SOC 2 Type II compliance</Typography>
        </Box>
        <Box className={styles.card}>
          <Box className={styles.iconContainer}>
            <Check />
          </Box>
          <Typography className={styles.cardTitle}>Reliable Integration</Typography>
          <Typography className={styles.cardDescription}>Official Instagram and Facebook API integration</Typography>
        </Box>
      </Box>
    </Box>
  )
}