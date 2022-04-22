import "../styles/Card.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function CardGrandeForm(props) {
  // STATES
  const { data, handleFormBoolState } = props;
  console.log("DATA", data);
  const [updateFormState, setUpdateFormState] = useState({
    titulo: data.titulo,
    descricao: data.descricao,
    corpo: data.corpo,
    email: data.email,
    telefone: data.telefone,
    imagem: data.imagem,
    tags: data.tags,
  });
  // HANDLERS
  const handleChange = (e) => {
    setUpdateFormState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    console.log(updateFormState);
  };

  const handleClick = async (e) => {
    // PREVENIR DEFAULT
    e.preventDefault();
    // CHECAGEM DOS CAMPOS
    if (!/(.+)@(.+){2,}\.(.+){2,}/.test(updateFormState.email)) {
      alert("email errado");
      return;
    }
    if (
      !/^\s*[A-Za-z0-9]+(?:\s+[A-Za-z0-9]+)*\s*$/.test(
        updateFormState.tags
      )
    ) {
      alert("tags erradas");
      return;
    }
    // PATCH

    const response = await axios.put(
      `https://ironrest.herokuapp.com/projetopilotowillnick/${data._id}`,
      {
        ...updateFormState,
        tags: updateFormState.tags.trim().split(" "),
      }
    );
    console.log(response);
    handleFormBoolState();
  };

  const tagColor = (idx) => {
    const colors = ["140, 67, 67", "166, 112, 65", "166, 149, 65"];

    return `rgb(${colors[idx]})`;
  };

  // ==== JSX ================================
  return (
    <div className="card-grande">
      <div className="lado-esquerdo">
        <label htmlFor="titulo">Titulo</label>
        <input
          onChange={handleChange}
          name="titulo"
          value={updateFormState.titulo}
        ></input>
        <label htmlFor="tags">Tags</label>
        <p>
          <small>(separe por espacos)</small>
        </p>
        <input
          onChange={handleChange}
          name="tags"
          className="divBtn"
          value={new String(updateFormState.tags).replaceAll(",", " ")}
        ></input>
        <label htmlFor="imagem">Foto</label>
        <input
          onChange={handleChange}
          name="imagem"
          value={
            updateFormState.imagem
              ? updateFormState.imagem
              : "https://www.portalimprensa.com.br/content_file_storage/2021/06/24/impresso.PNG"
          }
        ></input>

        {/* ==== */}
      </div>

      <div className="lado-direito">
        <div className="descricao">
          <label htmlFor="descricao">Descricao</label>
          <input
            onChange={handleChange}
            name="descricao"
            value={updateFormState.descricao}
          ></input>
          <label htmlFor="descricao">Corpo</label>
          <textarea
            onChange={handleChange}
            type="textarea"
            maxLength="280"
            name="corpo"
            value={updateFormState.corpo}
          ></textarea>
        </div>
        <div className="saiba-menos">
          <button onClick={handleClick} className={"saiba-menos-btn"}>
            ENVIAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardGrandeForm;
