import { type ReactElement } from "react";
import { Box } from "@mui/material";
import styles from "./styles.module.scss"
import type { CardProps } from "../../../utilities/constants/homeConsts";
import CardVersion1 from "../CardVersion1";
import CardVersion2 from "../CardVersion2";
import CardVersion3 from "../CardVersion3";

interface IProps {
  type: string;
  card: CardProps
}

export default function Card({ type, card }: IProps): ReactElement {

  const returnCardVersion = () => {
    let version;
    switch (type) {
      case "version1":
        version = <CardVersion1 card={card} />
        break;
      case "version2":
        version = <CardVersion2 card={card} />
        break;
      case "version3":
        version = <CardVersion3 card={card} />
        break;
      default:
        break;
    }
    return version;
  }

  return (
    <Box className={styles.cardContainer}>
      {
        returnCardVersion()
      }
    </Box>
  )
}