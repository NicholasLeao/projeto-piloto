import CardPequeno from "../components/CardPequeno";
import Formulario from "../components/Formulario";
import CardGrande from "../components/CardGrande";
import Modal from "../components/Modal";
import styles from "../styles/Home.module.css";
import { useState, useEffect, useCallback } from "react";
import FormularioButton from "../components/FormularioButton";
import axios from "axios";

function Home() {
  // STATES
  const [fetchDataState, setFetchDataState] = useState([]);
  const [formToggleState, setFormToggleState] = useState(false);
  const [submitFormularioState, setSubmitFormularioState] = useState();
  const [formularioState, setFormularioState] = useState({
    titulo: "",
    descricao: "",
    corpo: "",
    email: "",
    telefone: "",
    tags: [],
  });

  // EVENT HANDLER
  const onClickFormulario = () => {
    setFormToggleState((s) => !s);
  };

  // FETCH DATA DA API
  const handleFetchData = useCallback(async () => {
    const { data } = await axios.get(
      "https://ironrest.herokuapp.com/projetopilotowillnick"
    );
    setFetchDataState(data);
    console.log(typeof data, data);
  }, []);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  // ==== JSX ================================
  return (
    <>
      <main className={styles["home"]}>
        <div>
          {fetchDataState.map((data) => (
            <CardPequeno key={data._id} />
          ))}

          {!formToggleState ? (
            <FormularioButton onClickFormulario={onClickFormulario} />
          ) : (
            <Formulario
              submitFormularioState={submitFormularioState}
              setSubmitFormularioState={setSubmitFormularioState}
              formularioState={formularioState}
              setFormularioState={setFormularioState}
            />
          )}

          <CardGrande />
          <Modal />
        </div>
      </main>
    </>
  );
}

export default Home;
