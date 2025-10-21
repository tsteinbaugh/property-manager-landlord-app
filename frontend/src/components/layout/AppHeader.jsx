import styles from "./AppHeader.module.css";

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
