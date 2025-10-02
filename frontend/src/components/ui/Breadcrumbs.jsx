import { Link } from "react-router-dom";
import css from "./Breadcrumbs.module.css";

export default function Breadcrumbs({ items = [] }) {
  // items: [{ label: "Dashboard", to: "/dashboard" }, { label: "123 Main St" }]
  return (
    <nav className={css.wrap} aria-label="Breadcrumb">
      <ol className={css.list}>
        {items.map((it, i) => (
          <li className={css.item} key={i}>
            {it.to ? <Link to={it.to} className={css.link}>{it.label}</Link> : <span className={css.current}>{it.label}</span>}
            {i < items.length - 1 && <span className={css.sep}>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
