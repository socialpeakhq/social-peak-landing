import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import type { CardProps } from "../../../utilities/constants/homeConsts";
import styles from "./styles.module.scss"

interface Props {
  card: CardProps
}

export default function CardVersion3({ card }: Props): ReactElement {
  return (
    <Box className={styles.container}>
      <Box className={styles.imageContainer}>
        <img src={card.image} className={styles.image} />
      </Box>
      <Box className={styles.labelsContainer}>
        <Typography className={styles.titleLabel}>{card.title}</Typography>
        <Typography className={styles.titleLabel}>{card.description}</Typography>
      </Box>
    </Box>
  )
}