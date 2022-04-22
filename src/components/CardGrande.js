import "../styles/Card.css";
import { Link } from "react-router-dom";

function CardGrande(props) {
  const { data, handleFormBoolState } = props;

  const tagColor = (idx) => {
    const colors = ["140, 67, 67", "166, 112, 65", "166, 149, 65"];

    return `rgb(${colors[idx]})`;
  };

  // ==== JSX ================================
  return (
    <div className="card-grande">
      <div className="lado-esquerdo">
        <h2>{data.titulo}</h2>

        {/* TAGS */}
        <ul className="divBtn">
          {/* TAGS 2 */}
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

        <img
          src={
            data.imagem
              ? data.imagem
              : "https://www.portalimprensa.com.br/content_file_storage/2021/06/24/impresso.PNG"
          }
          alt="#"
        />
        {/* ==== */}
      </div>

      <div className="lado-direito">
        <div className="descricao">
          <h3>{data.descricao}</h3>
          <p>{data.corpo}</p>
        </div>
        <div className="saiba-menos">
          <button
            onClick={props.handleWindowState}
            className={"saiba-menos-btn"}
          >
            SAIBA MENOS
          </button>
          <button onClick={handleFormBoolState} className={"saiba-menos-btn"}>
            EDITAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardGrande;
