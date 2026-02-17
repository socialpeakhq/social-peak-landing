import { type ReactElement } from "react";
import { Box, Button, Typography } from "@mui/material";
import GetStartedButton from "../../../../components/GetStartedButton";
import dashbord from "../../../../assets/images/sections-images/dashboard_demo.png"
import styles from "./styles.module.scss"

export default function HeroSection(): ReactElement {
  return (
    <Box className={styles.heroContainer}>
      <Box className={styles.heroLabels}>
        <Typography className={styles.mainLabel}>Manage All of Your Social Media Accounts, Analytics <span>and Ads in One Secure Workspace</span></Typography>
        <Typography>Social Peak is the perfect platform for creators, freelancers and agencies to manage multiple social media accounts, track performance, oversee campaings and more - all from the same environment.</Typography>
        <Box className={styles.actionsContainer}>
          <Box className={styles.getStartedContainer}>
            <GetStartedButton />
          </Box>
          <Button variant="outlined" className={styles.actionButton}>
            How It Works
          </Button>
        </Box>
      </Box>
      <Box className={styles.heroImage}>
        <img src={dashbord} className={styles.img} />
      </Box>
    </Box>
  )
}