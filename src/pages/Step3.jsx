import { useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./Step3.module.css";
import Logo from "../components/Logo";
import Frase from "../components/Frase";
import ResumoOrigemDestino from "../components/ResumoOrigemDestino";
import FormPacoteEnvio from "../components/FormPacoteEnvio";

function Step3() {
  const location = useLocation();
  const [formData, setFormData] = useState(location.state || {});

  const handleSubmitPacote = (pacoteData) => {
    const dadosCompletos = { ...formData, ...pacoteData };
    console.log("Dados Finais:", dadosCompletos);
    // navigate para próxima etapa se quiser
  };

  return (
    <div className={styles.page}>
      <Logo />
      <Frase texto="Teste Calculadora Postaqui" />

      <ResumoOrigemDestino formData={formData} />

      <FormPacoteEnvio onSubmit={handleSubmitPacote} />
    </div>
  );
}

export default Step3;
