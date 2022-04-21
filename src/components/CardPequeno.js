import styles from "../styles/CardPequeno.module.css";
import "../styles/Card.css"
import Jornal from "../assets/images/jornal.jpeg"


function CardPequeno(props) {
  return (
    <>
      <div className={styles["card-pequeno"]}>

        <div className="container">
          <img src={Jornal} alt="#" /> 
        </div>

        <div className="div1">
          <h2>TITULO DO ANUNCIO</h2>

          <ul className="divBtn">
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

        <button className={"saiba-mais"}>SAIBA MAIS</button>

      </div>
    </>
  );
}

export default CardPequeno;
