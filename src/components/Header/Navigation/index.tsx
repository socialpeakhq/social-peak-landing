import { type ReactElement } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_ROUTES } from "../../../utilities/constants/headerConsts";
import styles from "./styles.module.scss"
import { Button } from "antd";

export default function Navigation(): ReactElement {
  return (
    <div className={styles.navigationContainer}>
      {NAVIGATION_ROUTES.map(route =>
        <div key={route.id} className={styles.singleRouteContainer}>
          <Link to={route.href} className={styles.singleRouteLabel}>
            {route.label}
          </Link>
        </div>
      )}
      <div className={styles.singleRouteContainer}>
        Login
      </div>
      <Button className={styles.getStartedButton}>
        Get Started Now
      </Button>
    </div>
  )
}