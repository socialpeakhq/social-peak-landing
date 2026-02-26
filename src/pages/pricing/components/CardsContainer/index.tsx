import { type ReactElement } from "react";
import { Box } from "@mui/material";
import styles from "./styles.module.scss"
import { PRICING_CARDS, type PricingCard } from "../../../../utilities/constants/pricingConsts";
import PriceCard from "../PricingCard";

export default function CardsContainer(): ReactElement {
  return (
    <Box className={styles.cardsContainer}>
      {PRICING_CARDS.map((card: PricingCard, index: number) =>
        <PriceCard key={index} card={card} />
      )}
    </Box>
  )
}