import { type ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../assets/images/logo.svg"
import styles from "./styles.module.scss"
import { NAVIGATION_ROUTES } from "../../utilities/constants/headerConsts";
import { Link } from "react-router";

export default function Footer(): ReactElement {
  return (
    <Box className={styles.footerContainer}>
      <Box className={styles.footer}>
        <Box component={Link} to="/" className={styles.logoContainer}>
          <img src={logo} className={styles.logo} />
        </Box>
        <Box className={styles.naviagtionContainer}>
          {NAVIGATION_ROUTES.map((item, index) =>
            <Link to={item.href} key={index} className={styles.singleRoute}>
              <Typography className={styles.routeLabel}>{item.label}</Typography>
            </Link>
          )}
        </Box>
        <Box className={styles.socialsContainer}>
          <Typography className={styles.socialsHeader}>Contacts : </Typography>
          <Box className={styles.labelsContainer}>
            <Typography className={styles.socialsLabel}><span>Number : </span>+355 69 212 0748</Typography>
            <Typography className={styles.socialsLabel}><span>E-mail : </span>support@socialpeakhq.com</Typography>
          </Box>
        </Box>
        <Box className={styles.copyrightContainer}>
          <Typography className={styles.copyrightLabel}>
            @ SocialPeakHq 2026 All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}