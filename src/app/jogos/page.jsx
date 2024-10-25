import styles from "./jogos.module.css";
import Header from "../components/header";
import CardMenu from "../components/card-menu";

export default function Jogos() {
  return (
    <div>
      <Header />
      <p className={styles.titulo}>Página Jogos</p>

      <div className={styles.menu}>
        <CardMenu nome = {"Pizza"}
        ingredientes = {"Tomate, Pepino, Cebola, Oliva"} 
        preco = {"R$ 10"}
        />
        <CardMenu nome = {"Pizza"} 
        ingredientes = {"Tomate, Pepino, Cebola, Oliva"} 
        preco = {"R$ 10"} 
        />
        <CardMenu nome= {"Pizza"}
        ingredientes = {"Tomate, Pepino, Cebola, Oliva"} 
        preco = {"R$ 10"}  
        />
      </div>
    </div>
  );
}