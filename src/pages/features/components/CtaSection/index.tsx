import { type ReactElement } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  InstagramOutlined,
  FacebookOutlined,
  TikTokOutlined,
  WhatsAppOutlined
} from "@ant-design/icons"
import styles from "./styles.module.scss"

export default function CtaSection(): ReactElement {
  return (
    <Box className={styles.ctaContainer}>
      <Box className={styles.appsContainer}>
        <Box className={`${styles.app} ${styles.tiltedLeft}`}>
          <InstagramOutlined />
        </Box>
        <Box className={`${styles.app} ${styles.tiltedRight}`}>
          <FacebookOutlined />
        </Box>
        <Box className={`${styles.app} ${styles.tiltedLeft}`}>
          <TikTokOutlined />
        </Box>
        <Box className={`${styles.app} ${styles.tiltedRight}`}>
          <WhatsAppOutlined />
        </Box>
      </Box>
      <Box className={styles.labelsContainer}>
        <Typography className={styles.title}>Ready to Transform Your Social Media Workflow?</Typography>
        <Typography className={styles.description}>Get started with Social Peak today and elevate your social media management</Typography>
      </Box>
      <Box className={styles.getStartedContainer}>
        <Button variant="contained" className={styles.getStartedButton}>
          Get Started
        </Button>
      </Box>
    </Box>
  )
}