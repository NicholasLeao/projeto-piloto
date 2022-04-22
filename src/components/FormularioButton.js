import "../styles/Card.css";
function FormularioButton(props) {
  const { onClickFormulario } = props;
  return (
    <>
      <button className="form-button" onClick={onClickFormulario}>
        PUBLICAR
      </button>
    </>
  );
}

export default FormularioButton;
