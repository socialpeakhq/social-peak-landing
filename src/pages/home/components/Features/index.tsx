import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss"

export default function Features(): ReactElement {
  return (
    <Box className={styles.featuresContainer}>
      <Typography className={styles.darkTitle}>The Unified Social Media</Typography>
      <Typography className={styles.purpleTitle}>Management Platform</Typography>
      <Typography className={`${styles.sectionDescription} ${styles.fontWeightBold}`}>Social Peak brings all your social media accounts, analytics, and campaigns into one unified workspace.</Typography>
      <Typography className={styles.sectionDescription}> Instead of switching between multiple platforms, you can monitor performance, track engagement, and manage operations from a single, secure dashboard designed for creators, freelancers, and agencies.</Typography>
    </Box>
  )
}