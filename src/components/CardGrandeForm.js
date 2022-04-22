import "../styles/Card.css";

function CardGrandeForm(props) {
  const { data, handleFormBoolState } = props;

  const tagColor = (idx) => {
    const colors = ["140, 67, 67", "166, 112, 65", "166, 149, 65"];

    return `rgb(${colors[idx]})`;
  };

  // ==== JSX ================================
  return (
    <div className="card-grande editar">
      <div className="lado-esquerdo editar-esquerdo">
        <label htmlFor="titulo"><strong>Titulo</strong></label>
        <input name="titulo" value={data.titulo}></input>
        <label htmlFor="tags"><strong>Tags</strong></label>
        <p>
          <small>(separe por espacos)</small>
        </p>
        <input
          name="tags"
          className="divBtn"
          value={new String(data.tags).replaceAll(",", " ")}
        ></input>
        <label htmlFor="imagem"><strong>Foto</strong></label>
        <input
          name="imagem"
          value={
            data.imagem
              ? data.imagem
              : "https://www.portalimprensa.com.br/content_file_storage/2021/06/24/impresso.PNG"
          }
        ></input>

        {/* ==== */}
      </div>

      <div className="lado-direito">
        <div className="descricao">
          <label htmlFor="descricao"><strong>Descricao</strong></label>
          <input name="descricao" value={data.descricao}></input>
          <label htmlFor="descricao"><strong>Corpo</strong></label>
          <textarea
            type="textarea"
            maxLength="280"
            name="corpo"
            value={data.corpo}
          ></textarea>
        </div>
        <div className="saiba-menos">
          <button
            onClick={handleFormBoolState}
            className={"saiba-menos-btn"}
          >
            ENVIAR
          </button>
       
        </div>
      </div>
    </div>
  );
}

export default CardGrandeForm;
