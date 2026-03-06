import { type ReactElement } from "react";
import { Box, Button, Typography } from "@mui/material";
import styles from "./styles.module.scss";

export default function SecurityCtaSection(): ReactElement {
  return (
    <Box className={styles.sectionContainer}>
      <Typography className={styles.title}>Ready to Get Started?</Typography>
      <Typography className={styles.subtitle}>
        Join Social Peak with confidence today.
      </Typography>

      <Box className={styles.actionsRow}>
        <Button variant="contained" className={styles.primaryButton}>
          Get Started
        </Button>
        <Button variant="outlined" className={styles.secondaryButton}>
          Learn More
        </Button>
      </Box>
    </Box>
  );
}

