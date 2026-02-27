import { type ReactElement } from "react";
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import styles from "./styles.module.scss"
import { TABLE_DATA } from "../../../../utilities/constants/pricingConsts";
import SingleTable from "../SingleTable";

export default function TableSection(): ReactElement {

  return (
    <Box className={styles.sectionContainer}>
      <Typography className={styles.title}>Compare All Features</Typography>
      <Typography className={styles.subTitle}>See what's included in each plan</Typography>
      <Table className={styles.tablesContainer}>
        <TableHead>
          <TableRow className={styles.headRow}>
            <TableCell className={styles.headCell}>Features</TableCell>
            <TableCell align="center" className={styles.headCell}>Starter</TableCell>
            <TableCell align="center" className={styles.headCell}>Pro</TableCell>
            <TableCell align="center" className={styles.headCell}>Agency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            TABLE_DATA && Object.keys(TABLE_DATA || {}).map((key, index) => {
              const typedKey = key as keyof typeof TABLE_DATA;
              return (
                <SingleTable key={index} subHeader={typedKey} data={TABLE_DATA[typedKey]} />
              )
            }
            )
          }
        </TableBody>
      </Table>
    </Box>
  )
}