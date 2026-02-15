import { type ReactElement } from "react";
import { Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import styles from "./styles.module.scss"

export default function HomePage(): ReactElement {
  return (
    <Box className={styles.homepageContainer}>
      <HeroSection />
    </Box>
  )
}