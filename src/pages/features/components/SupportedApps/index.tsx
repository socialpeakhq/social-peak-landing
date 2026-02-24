import { type ReactElement } from "react"
import { Box } from "@mui/material"
import {
  InstagramOutlined,
  FacebookOutlined,
  XOutlined,
  TikTokOutlined,
  WhatsAppOutlined
} from "@ant-design/icons"
import googleAds from "../../../../assets/images/features/google-ads.png"
import metaAds from "../../../../assets/images/features/meta-ads.png"
import styles from "./styles.module.scss"

export default function SupportedApps(): ReactElement {
  return (
    <Box className={styles.supportedAppsContainer}>
      <Box className={`${styles.iconContainer} ${styles.instagram}`}>
        <InstagramOutlined />
      </Box>
      <Box className={`${styles.iconContainer} ${styles.facebook}`}>
        <FacebookOutlined />
      </Box>
      <Box className={`${styles.iconContainer} ${styles.whatsapp}`}>
        <WhatsAppOutlined />
      </Box>
      <Box className={`${styles.iconContainer} ${styles.tiktok}`}>
        <TikTokOutlined />
      </Box>
      <Box className={`${styles.iconContainer} ${styles.twitter}`}>
        <XOutlined />
      </Box>
      <Box className={styles.adsContainer}>
        <img src={googleAds} width={130} className={styles.adsImage} />
      </Box>
      <Box className={styles.adsContainer}>
        <img src={metaAds} width={80} className={styles.adsImage} />
      </Box>
    </Box>
  )
}