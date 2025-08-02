"use client";

import { ReactNode } from "react";
import styles from "./about.module.css";

export default function AboutPageLayout({ children }: { children: ReactNode }) {
  return <main className={styles["about-page"]}>{children}</main>;
}