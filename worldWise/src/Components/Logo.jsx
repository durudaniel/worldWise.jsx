import { Link, NavLink } from "react-router-dom";
import styles from "./Logo.module.css";
export default function Logo() {
  return (
    <Link to="/home">
      <img src="Logo.png.PNG" alt="WorldWise Logo" className={styles.logo} />
    </Link>
  );
}
