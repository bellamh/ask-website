"use client";

import { ReactNode } from "react";
import styles from "./recruitment.module.css";

export default function RecruitmentPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <main className={styles["recruitment-page"]}>{children}</main>;
}
