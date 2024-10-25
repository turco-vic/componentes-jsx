import Link from "next/link";
import styles from "./header-link.module.css";

const HeaderLink = ({ destino, texto }) => {
  return (
    <Link className={styles.link} href={destino}>
      {texto} 
    </Link>
  );
};

export default HeaderLink;