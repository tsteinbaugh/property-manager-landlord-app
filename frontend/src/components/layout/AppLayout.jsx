import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import AppHeader from "./AppHeader.jsx";

export default function AppLayout() {
  return (
    <div className={styles.shell}>
      <AppHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}