import { type ReactElement } from "react";
import { Button } from "@mui/material";
import styles from "./styles.module.scss"

export default function GetStartedButton(): ReactElement {
  return (
    <Button variant="contained" className={styles.getStartedButton}>
      Get Started Now
    </Button>
  )
}