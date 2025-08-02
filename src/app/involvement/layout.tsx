import { ReactNode } from "react";

export default function InvolvementPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className="home-page-content">{children}</div>
    </>
  );
}
