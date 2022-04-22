import styles from "../styles/CardPequeno.module.css";
import "../styles/Card.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function CardPequeno(props) {
  const params = useParams();
  // console.log("PARAMSCARDPEQUENO", params);
  const { data } = props;

  const tagColor = (idx) => {
    const colors = ["140, 67, 67", "166, 112, 65", "166, 149, 65"];

    return `rgb(${colors[idx]})`;
  };
  // ==== JSX ================================
  return (
    <>
      <div className="card-pequeno">
        <div className="container">
          <img
            src={
              data.imagem
                ? data.imagem
                : "https://www.portalimprensa.com.br/content_file_storage/2021/06/24/impresso.PNG"
            }
            alt="#"
          />
        </div>

        <div className="div1">
          <h2>{data.titulo}</h2>

          <ul className="divBtn">
            {data.tags.map((tag, idx) => {
              return (
                <li key={`${data._id}tagG${idx}`}>
                  <Link to={`/tags/${tag}`}>
                    <button
                      style={{ backgroundColor: `${tagColor(idx)}` }}
                      id={`btn${idx + 1}`}
                    >
                      {tag}
                    </button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <button onClick={props.handleWindowState} className={"saiba-mais"}>
          SAIBA MAIS
        </button>
      </div>
    </>
  );
}

export default CardPequeno;
