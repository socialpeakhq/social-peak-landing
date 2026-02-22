import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import CardsGrid from "../components/CardGrid";
import styles from "./styles.module.scss"

export default function Features(): ReactElement {
  return (
    <Box className={styles.featuresContainer}>
      <Typography className={styles.pageTitle}>Boost Your Social Media Success with Powerful Features</Typography>
      <Typography className={styles.pageSubTitle}>Explore a suite of advanced tools designed to streamline your social media management, all from a single, intuitive platform.</Typography>
      <CardsGrid />
    </Box>
  )
}