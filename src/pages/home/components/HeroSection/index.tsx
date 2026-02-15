import { type ReactElement } from "react";
import { Box } from "@mui/material";
import styles from "./styles.module.scss"

export default function HeroSection(): ReactElement {
  return (
    <Box className={styles.heroContainer}>
      <Box className={styles.heroLabels}></Box>
      <Box className={styles.heroImage}></Box>
    </Box>
  )
}