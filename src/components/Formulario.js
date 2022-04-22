import axios from "axios";
import "../styles/Card.css";
import { useNavigate } from "react-router-dom";

function Formulario(props) {
  const navigate = useNavigate();
  // EVENT HANDLERS
  const handleChange = (e) => {
    props.setFormularioState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleClick = (e) => {
    // PREVENIR DEFAULT
    e.preventDefault();

    // CHECAGEM DOS CAMPOS
    if (!/(.+)@(.+){2,}\.(.+){2,}/.test(props.formularioState.email)) {
      alert("email errado");
      return;
    }

    if (
      !/^\s*[A-Za-z0-9]+(?:\s+[A-Za-z0-9]+)*\s*$/.test(
        props.formularioState.tags
      )
    ) {
      alert("tags erradas");
      return;
    }

    // MANDAR POST
    axios.post("https://ironrest.herokuapp.com/projetopilotowillnick", {
      ...props.formularioState,
      tags: props.formularioState.tags.trim().split(" "),
    });

    // ZERAR FORMULARIO
    props.setFormularioState({
      titulo: "",
      descricao: "",
      corpo: "",
      email: "",
      telefone: "",
      imagem: "",
      tags: "",
    });
    // BOOLEANO DO FORMULARIO VISIBILIDADE
    props.onClickFormulario();
  };

  // ==== JSX ================================
  return (
    <>
      <form onSubmit={handleClick}>
        <div className="divForm">
          <div className="formulario">
            <label htmlFor="titulo">
              <strong>Titulo</strong>
            </label>
            <input
              onChange={handleChange}
              maxLength="45"
              type="text"
              name="titulo"
              value={props.formularioState.titulo}
              placeholder="Titulo do post"
            ></input>
            <label htmlFor="descricao">
              <strong>Descricao</strong>
            </label>
            <input
              onChange={handleChange}
              maxLength="70"
              type="text"
              name="descricao"
              value={props.formularioState.descricao}
              placeholder="Breve descricao"
            ></input>
            <label htmlFor="corpo">
              <strong>Corpo</strong>
            </label>
            <textarea
              onChange={handleChange}
              type="textarea"
              maxLength="280"
              name="corpo"
              value={props.formularioState.corpo}
              placeholder="Descricao do post"
            ></textarea>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              onChange={handleChange}
              type="text"
              maxLength="45"
              name="email"
              value={props.formularioState.email}
              placeholder="Email"
            ></input>
            <label htmlFor="telefone">
              <strong>Telefone</strong>
            </label>
            <input
              onChange={handleChange}
              type="number"
              maxLength="12"
              name="telefone"
              value={props.formularioState.telefone}
              placeholder="Telefone"
            ></input>
            <label htmlFor="imagem">
              <strong>Foto</strong>
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="imagem"
              value={props.formularioState.imagem}
              placeholder="URL da imagem"
            ></input>
            <label htmlFor="tags">
              <strong>Tags</strong>
            </label>
            <p>
              <small>(separe por espacos)</small>
            </p>
            <input
              onChange={handleChange}
              type="text"
              maxLength="35"
              name="tags"
              value={props.formularioState.tags}
              placeholder="Tags"
            ></input>
          </div>

          <div className="iEb">
            <img
              src="https://www.portalimprensa.com.br/content_file_storage/2021/06/24/impresso.PNG"
              alt="#"
            />
            <button>SUBMIT</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Formulario;
