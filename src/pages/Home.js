import Formulario from "../components/Formulario";
import Modal from "../components/Modal";
import "../styles/Home.css";
import { useState, useEffect, useCallback } from "react";
import FormularioButton from "../components/FormularioButton";
import axios from "axios";
import CardContainer from "../components/CardContainer";
import CardGrandeForm from "../components/CardGrandeForm";

function Home() {
  // STATES

  const [fetchDataState, setFetchDataState] = useState([]);
  const [formToggleState, setFormToggleState] = useState(false);

  const [submitFormularioState, setSubmitFormularioState] = useState({});
  const [formularioState, setFormularioState] = useState({
    titulo: "",
    descricao: "",
    corpo: "",
    email: "",
    telefone: "",
    imagem: "",
    tags: "",
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
  }, []);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  // ==== JSX ================================
  return (
    <>
      <main className="home">
        <div>
          {/* ========= FORMULARIO ================= */}
          {!formToggleState ? (
            <FormularioButton onClickFormulario={onClickFormulario} />
          ) : (
            <Formulario
              onClickFormulario={onClickFormulario}
              submitFormularioState={submitFormularioState}
              setSubmitFormularioState={setSubmitFormularioState}
              formularioState={formularioState}
              setFormularioState={setFormularioState}
            />
          )}

          {/* ========= CARDS ================= */}
          {fetchDataState.map((data) => (
            <CardContainer data={data} key={`GG${data._id}`} />
          ))}

      

     
          <Modal />
        </div>
      </main>
    </>
  );
}

export default Home;
