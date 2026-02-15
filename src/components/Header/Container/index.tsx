import { type ReactElement } from "react";
import Navigation from "../Navigation";
import { Link } from "react-router";
import logo from "../../../assets/images/logo.svg"
import styles from "./styles.module.scss"


export default function Header(): ReactElement {
  return (
    <div className={styles.headerContainer}>
      <Link to="/" className={styles.logoContainer}>
        <img src={logo} alt="Social Peak Logo" className={styles.logo} />
      </Link>
      <Navigation />
    </div>
  )
}