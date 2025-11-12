import styles from "./AppHeader.module.css";
import SmartBreadcrumbs from "../ui/SmartBreadcrumbs.jsx"
import AvatarMenu from "./AvatarMenu.jsx"

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
