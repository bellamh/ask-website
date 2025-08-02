"use client";

import { ReactNode } from "react";
import styles from "./home.module.css";

interface LayoutProps {
  children: ReactNode;
}

export default function HomePageLayout({ children }: LayoutProps) {
  return <main className={styles.homePageContent}>{children}</main>;
}
