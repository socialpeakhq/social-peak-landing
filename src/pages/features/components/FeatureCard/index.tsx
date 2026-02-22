import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import type { CardProps } from "../../../../utilities/constants/homeConsts";
import styles from "./styles.module.scss"

interface IProps {
  card: CardProps
}

export default function FeatureCard({ card }: IProps): ReactElement {
  return (
    <Box className={styles.cardContainer}>
      <Box className={styles.imageContainer}>
        <img src={card.image} alt={card.title} className={styles.image} />
      </Box>
      <Typography className={styles.cardTitle}>{card.title}</Typography>
      <Typography className={styles.cardDescription}>{card.description}</Typography>
    </Box>
  )
}