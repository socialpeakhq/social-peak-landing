import { type ReactElement } from "react";
import { Grid } from "@mui/material";
import { FEATURES_CARDS } from "../../../../utilities/constants/featuresConsts";
import type { CardProps } from "../../../../utilities/constants/homeConsts";
import styles from "./styles.module.scss"
import FeatureCard from "../FeatureCard";

export default function CardsGrid(): ReactElement {
  return (
    <Grid container spacing={4} className={styles.gridContainer}>
      {FEATURES_CARDS.map((item: CardProps, index: number) =>
        <Grid key={index} size={{ lg: 4, md: 6, sm: 12 }} className={styles.gridItem}>
          <FeatureCard card={item} />
        </Grid>
      )}
    </Grid>
  )
} 