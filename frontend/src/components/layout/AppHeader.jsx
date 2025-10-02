import React from "react";
import styles from "./AppHeader.module.css";
import SmartBreadcrumbs from "../ui/SmartBreadcrumbs";
import AvatarMenu from "./AvatarMenu";

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <SmartBreadcrumbs />
      <div className={styles.spacer} />
      <div className={styles.right}>
        <AvatarMenu />
      </div>
    </header>
  );
}
