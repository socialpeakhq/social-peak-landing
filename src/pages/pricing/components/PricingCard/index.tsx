import { type ReactElement } from "react";
import { Box, Button, Typography } from "@mui/material";
import type { PricingCard } from "../../../../utilities/constants/pricingConsts";
import styles from "./styles.module.scss"

interface IProps {
  card: PricingCard
}

export default function PriceCard({ card }: IProps): ReactElement {
  return (
    <Box className={`${styles.cardContainer} ${card.popular && styles.popularCard}`}>
      <Typography className={styles.cardTitle}>{card.title}</Typography>
      <Typography className={styles.tagline}>{card.tagline}</Typography>
      <Typography className={styles.description}>*{card.description}</Typography>
      <Typography className={styles.priceLabel}>€{card.price}<span>/month</span></Typography>
      <Box className={styles.list}>
        {card.features.map((feature: string, index: number) =>
          <Typography key={index} className={styles.listItem}><span />{feature}</Typography>
        )}
      </Box>
      <Button variant="contained" className={`${styles.getStartedButton} ${card.popular && styles.popularPlan}`}>Get Started</Button>
    </Box>
  )
}