import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Frase from "../components/Frase";
import Forms from "../components/Forms";
import styles from "./Step2.module.css"; // criamos esse CSS
import Logo from "../components/Logo";

function Step2() {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(location.state || {});

  const handleNext = () => {
    console.log("Dados finais:", formData);
    navigate("/step3", { state: formData });
  };

  return (
    <div className={styles.page}>
        <Logo/>
      <h2 className={styles.title}>Origem</h2>

      <div className={styles.dadosConfirmacao}>
       
        {Object.entries(formData).map(([campo, valor]) => (
          <div key={campo} className={styles.dado}>
            <strong>{campo.charAt(0).toUpperCase() + campo.slice(1)}:</strong>
            <span>{valor || "—"}</span>
          </div>
        ))}
      </div>
        <Frase texto="destino"/>
      <Forms formData={formData} setFormData={setFormData} onNext={handleNext} />
    </div>
  );
}

export default Step2;
