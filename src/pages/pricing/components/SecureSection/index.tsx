import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss"

export default function SecureSection(): ReactElement {
  return (
    <Box className={styles.secureContainer}>
      <Typography className={styles.sectionTitle}>Trusted & Secure</Typography>
      <Typography className={styles.sectionDescription}>Your data security is our priority. We use official Meta APIs and maintain the highest standards of security and compliance.</Typography>
    </Box>
  )
}