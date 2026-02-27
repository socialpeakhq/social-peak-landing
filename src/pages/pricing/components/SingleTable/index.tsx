import { type ReactElement } from "react";
import styles from "./styles.module.scss"
import { TableCell, TableRow, Typography } from "@mui/material";

interface IProps {
  subHeader: string
  data: Record<string, string[] | boolean[]>
}

export default function SingleTable({ subHeader, data }: IProps): ReactElement {
  return (
    <>
      <TableRow className={styles.subHeaderRow}>
        <TableCell colSpan={4} className={styles.subHeaderCell}>{subHeader}</TableCell>
      </TableRow>
      {
        Object.keys(data).map((key, index) => {
          return (
            <TableRow key={index} className={styles.row}>
              <TableCell className={styles.rowCell}>{key}</TableCell>
              {data[key].map((item: string | boolean, index: number) =>
                <TableCell
                  key={index}
                  align={"center"}
                  className={styles.rowCell}
                >
                  {
                    typeof item === "string"
                      ? item :
                      item ?
                        <Typography className={styles.trueLabel}> ✓ </Typography> :
                        <Typography className={styles.falseLabel}> X </Typography>
                  }
                </TableCell>
              )}
            </TableRow>
          )
        })
      }
    </>
  )
}