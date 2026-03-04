import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import StepCard from "../StepCard";
import { STEPS_CARD, type StepCard as Card } from "../../../../utilities/constants/howItWorksConsts";
import styles from "./styles.module.scss"

export default function StepsSection(): ReactElement {
  return (
    <Box className={styles.sectionContainer}>
      <Typography className={styles.sectionTitle}>Simple, Powerful, and Professional</Typography>
      <Typography className={styles.sectionDescription}>Get started in three easy steps and transform how you manage your social media presence</Typography>
      <Box className={styles.cardsContainer}>
        {STEPS_CARD.map((card: Card, index: number) => <StepCard card={card} number={index + 1} />)}
      </Box>
    </Box>
  )
}