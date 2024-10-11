import Link from "next/link";
import styles from "./header-link.module.css";

const HeaderLink = ({ destino, texto }) => {
  return (
    <Link href={destino}>
        <p className={styles.link}>{texto}</p>
    </Link>
  );
};

export default HeaderLink;