import styles from "../styles/CardPequeno.module.css";
import "../styles/Card.css";


function CardPequeno(props) {
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
                : "https://esales.com.br/wp-content/uploads/2017/06/interbancos_esales_image_565-scaled.jpeg"
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
                  <button
                    style={{ backgroundColor: `${tagColor(idx)}` }}
                    id={`btn${idx + 1}`}
                  >
                    {tag}
                  </button>
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
