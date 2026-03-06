import { type ReactElement } from "react";
import { Box } from "@mui/material";
import SecurityCard from "../SecurityCard";
import {
  SECURITY_CARDS,
  type SecurityCardItem,
} from "../../../../utilities/constants/securityConsts";
import styles from "./styles.module.scss";

export default function SecurityCardsSection(): ReactElement {
  return (
    <Box className={styles.cardsContainer}>
      {SECURITY_CARDS.map((card: SecurityCardItem) => (
        <SecurityCard key={card.title} card={card} />
      ))}
    </Box>
  );
}
