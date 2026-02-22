import { type ReactElement } from "react";
import { Box, Button, Typography } from "@mui/material";
import styles from "./styles.module.scss"

export default function CtaSection(): ReactElement {
  return (
    <Box className={styles.ctaSection}>
      <Typography className={styles.sectionTitle}>Explore More About <span>Social Peak</span></Typography>
      <Box className={styles.actionsContainer}>
        <Button variant="contained" className={styles.actionButton}>FEATURES</Button>
        <Button variant="contained" className={styles.actionButton}>HOW IT WORKS</Button>
      </Box>
    </Box>
  )
}