import { type ReactElement } from "react";
import { Box, Button, Typography } from "@mui/material";
import RightArrow from "../../../../assets/images/pricing/arrow.svg?react"
import styles from "./styles.module.scss"

export default function CtaSection(): ReactElement {
  return (
    <Box className={styles.ctaSectionContainer}>
      <Typography className={styles.sectionTitle}>Ready to Elevate Your Social Media Management?</Typography>
      <Typography className={styles.sectionDescription}>Join thousands of agencies and professionals managing their Instagram and Facebook accounts from one unified dashboard.</Typography>
      <Box className={styles.actionsContainer}>
        <Button variant="contained" className={styles.freeTrialButton}>Start Free Trial <RightArrow /></Button>
        <Button variant="contained" className={styles.howItWorksButton}>Learn How It Works</Button>
      </Box>
      <Typography className={styles.footerLabel}>No credit card required • 14-day free trial • Cancel anytime</Typography>
    </Box>
  )
}