import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

export default function PageNav() {
  return (
    <ul className={styles.nav}>
      <li className={styles.list}>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li className={styles.list}>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li className={styles.list}>
        <NavLink to="/product">Product</NavLink>
      </li>
    </ul>
  );
}
