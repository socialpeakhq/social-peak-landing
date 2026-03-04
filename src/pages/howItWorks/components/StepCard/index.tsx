import { type ReactElement } from "react";
import styles from "./styles.module.scss"
import type { StepCard } from "../../../../utilities/constants/howItWorksConsts";
import { Box, Typography } from "@mui/material";

interface Props {
  card: StepCard
  number: number
}

export default function StepCard({ card, number }: Props): ReactElement {
  return (
    <Box className={styles.cardContainer}>
      <Box className={styles.topContainer}>
        <Box className={styles.iconContainer}>
          <card.icon />
        </Box>
        <Typography className={styles.number}>
          {number}
        </Typography>
      </Box>
      <Typography className={styles.titleLabel}>{card.title}</Typography>
      <Typography className={styles.descriptionLabel}>{card.description}</Typography>
    </Box>
  )
}