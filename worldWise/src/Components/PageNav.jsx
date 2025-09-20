import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
export default function PageNav() {
  return (
    <ul className={styles.nav}>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="/product">Product</NavLink>
      </li>
    </ul>
  );
}
