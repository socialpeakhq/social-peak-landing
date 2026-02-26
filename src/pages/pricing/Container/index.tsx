import { type ReactElement } from "react"
import { Box, Typography } from "@mui/material"
import styles from "./styles.module.scss"

export default function Pricing(): ReactElement {
  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Simple, Transparent Pricing for Social Peak</Typography>
      <Typography className={styles.subTitle}>Manage multiple social media accounts, track analytics, and schedule content from one unified platform. Built for agencies, freelancers, and professional social media managers.</Typography>
    </Box>
  )
}