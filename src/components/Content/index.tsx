import { lazy, type ReactElement } from "react";
import styles from "./styles.module.scss";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("../../pages/home/Container"))

export default function Content(): ReactElement {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}