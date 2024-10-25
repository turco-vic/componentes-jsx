import styles from "./card-menu.module.css";

const CardMenu = ({nome,ingredientes,preco}) => {
  return (
    <div className={styles.pizzaCard}>
      <h3>{nome}</h3>
      <p>{ingredientes}</p>
      <p>{preco}</p>
    </div>
  );
};

export default CardMenu;