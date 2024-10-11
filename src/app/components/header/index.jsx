import Link from "next/link";
import styles from "./header.module.css";
import HeaderLink from "../header-link";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Header</h1>
    
      <nav className={styles.links}>
        <HeaderLink destino="/" texto="Home" />

        <HeaderLink destino="/jogos" texto="Jogos" />

        <HeaderLink destino="/plataformas" texto="Plataformas" />
      </nav>
    </header>
  );
};

export default Header;