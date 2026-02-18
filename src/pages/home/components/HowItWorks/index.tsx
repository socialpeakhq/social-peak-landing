import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import Card from "../../../../components/Card/Container";
import { HOW_IT_WORKS_CARDS, type CardProps } from "../../../../utilities/constants/homeConsts";
import styles from "./styles.module.scss"

export default function HowItWorks(): ReactElement {
  return (
    <Box className={styles.howItWorksContainer}>
      <Typography className={styles.sectionTitle}>How Social Peak Works</Typography>
      <Box className={styles.cardsContainer}>
        {HOW_IT_WORKS_CARDS.map((item: CardProps, index: number) =>
          <Card key={index} card={item} type="version2" />
        )}
      </Box>
    </Box>
  )
}