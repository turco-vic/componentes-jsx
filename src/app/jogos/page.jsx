import styles from "./jogos.module.css";
import Header from "../components/header";

export default function Jogos() {
  return (
    <div>
      <Header />
      <p className={styles.titulo}>Página Jogos</p>
    </div>
  );
}