import { type ReactElement } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_ROUTES } from "../../../utilities/constants/headerConsts";
import { Box, Button, Typography } from "@mui/material";
import styles from "./styles.module.scss"


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
      <Button variant="contained" className={styles.getStartedButton}>
        Get Started Now
      </Button>
    </Box>
  )
}