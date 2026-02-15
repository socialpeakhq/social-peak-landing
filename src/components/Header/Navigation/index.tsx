import { type ReactElement } from "react";
import { Link } from "react-router";
import { NAVIGATION_ROUTES } from "../../../utilities/constants/headerConsts";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss"
import GetStartedButton from "../../GetStartedButton";


export default function Navigation(): ReactElement {
  return (
    <Box className={styles.navigationContainer}>
      {NAVIGATION_ROUTES.map(route =>
        <Box
          key={route.id}
          component={Link}
          to={route.href}
          className={styles.singleRouteContainer}
        >
          <Typography className={styles.singleRouteLabel}>
            {route.label}
          </Typography>
        </Box>
      )}
      <Box className={styles.singleRouteContainer}>
        <Typography className={styles.singleRouteLabel}>
          Login
        </Typography>
      </Box>
      <Box className={styles.container}>
        <GetStartedButton />
      </Box>
    </Box>
  )
}