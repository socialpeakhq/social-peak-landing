import { lazy, type ReactElement } from "react";
import styles from "./styles.module.scss";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("../../pages/home/Container"))
const Features = lazy(() => import("../../pages/features/Container"))
const Pricing = lazy(() => import("../../pages/pricing/Container"))
const HowItWorks = lazy(() => import("../../pages/howItWorks/Container"))

export default function Content(): ReactElement {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="how-it-works" element={<HowItWorks />} />
      </Routes>
    </div>
  )
}