import styles from "../styles/CardPequeno.module.css";

function CardPequeno(props) {
  return (
    <>
      <div className={styles["card-pequeno"]}>
        <div>
          <h2>TITULO DO ANUNCIO</h2>
          <img src="#" alt="#" />
          <ul>
            <li>
              <button>TAG</button>
            </li>
            <li>
              <button>TAG</button>
            </li>
            <li>
              <button>TAG</button>
            </li>
          </ul>
        </div>
        <button>SAIBA MAIS</button>
      </div>
    </>
  );
}

export default CardPequeno;
