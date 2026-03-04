import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import StepsSection from "../components/StepsSection";
import MetaIntegrationSection from "../components/MetaIntegrationSection";
import styles from "./styles.module.scss"

export default function HowItWorks(): ReactElement {
  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>How Social Peak Works</Typography>
      <Typography className={styles.pageDescription}>Streamline your social media management with our unified platform. Connect your Instagram Business and Facebook Pages, sync analytics, and manage everything from one centralized dashboard.</Typography>
      <StepsSection />
      <MetaIntegrationSection />
    </Box>
  )
}