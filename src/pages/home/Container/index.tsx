import { type ReactElement } from "react";
import { Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
// import HowItWorks from "../components/HowItWorks";
import styles from "./styles.module.scss"

export default function HomePage(): ReactElement {
  return (
    <Box className={styles.homepageContainer}>
      <HeroSection />
      <Features />
      {/* NEED TO THINK ABOUT A DIFFERENT APPROACH */}
      {/* <HowItWorks /> */}
    </Box>
  )
}