function FormularioButton(props) {
  const { onClickFormulario } = props;
  return (
    <>
      <button onClick={onClickFormulario}>Publicar post</button>
    </>
  );
}

export default FormularioButton;
