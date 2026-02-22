import { lazy, type ReactElement } from "react";
import styles from "./styles.module.scss";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("../../pages/home/Container"))
const Features = lazy(() => import("../../pages/features/Container"))

export default function Content(): ReactElement {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </div>
  )
}