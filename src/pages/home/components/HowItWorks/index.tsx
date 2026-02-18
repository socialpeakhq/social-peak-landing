import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss"

export default function HowItWorks(): ReactElement {
  return (
    <Box className={styles.howItWorksContainer}>
      <Typography className={styles.sectionTitle}>How Social Peak Works</Typography>
    </Box>
  )
}