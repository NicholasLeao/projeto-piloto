import "../styles/Card.css";

function CardGrande(props) {
  const { data } = props;
  const handleClickMin = () => {
    props.setCardMaxState((prev) => {
      if (!prev.includes(data._id)) {
        return [...prev, data._id];
      } else {
        return [...prev.filter((e) => e !== data._id)];
      }
    });
  };

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
          <button onClick={handleClickMin} className={"saiba-menos-btn"}>
            SAIBA MENOS
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardGrande;
