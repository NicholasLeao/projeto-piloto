import CardPequeno from "../components/CardPequeno";
import Formulario from "../components/Formulario";
import CardGrande from "../components/CardGrande";
import Modal from "../components/Modal";
import styles from "../styles/Home.module.css";
import { useState, useEffect, useCallback } from "react";

function Home() {
  // STATES
  const [submitFormularioState, setSubmitFormularioState] = useState();
  const [formularioState, setFormularioState] = useState({
    titulo: "",
    descricao: "",
    corpo: "",
    email: "",
    telefone: "",
    tags: [],
  });

  // ==== JSX ================================
  return (
    <>
      <main className={styles["home"]}>
        <div>
          <CardPequeno />
          <Formulario
            submitFormularioState={submitFormularioState}
            setSubmitFormularioState={setSubmitFormularioState}
            formularioState={formularioState}
            setFormularioState={setFormularioState}
          />
          <CardGrande />
          <Modal />
        </div>
      </main>
    </>
  );
}

export default Home;
