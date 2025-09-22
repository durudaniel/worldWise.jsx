import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li className={styles.list}>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li className={styles.list}>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li className={styles.list}>
          <NavLink to="/Login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
