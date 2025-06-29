import { useState } from "react";
import styles from "./Forms.module.css";
import logo from "../assets/logo.svg"; // ajuste se necessário

function Forms() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  const fields = [
    { label: "Nome completo", name: "nome", type: "text" },
    { label: "CPF", name: "cpf", type: "text" },
    { label: "Telefone", name: "telefone", type: "text" },
    { label: "E-mail", name: "email", type: "email" },
    { label: "CEP", name: "cep", type: "text" },
    { label: "Estado", name: "estado", type: "text" },
    { label: "Cidade", name: "cidade", type: "text" },
    { label: "Bairro", name: "bairro", type: "text" },
    { label: "Rua", name: "rua", type: "text" },
    { label: "Número", name: "numero", type: "text" },
    { label: "Complemento", name: "complemento", type: "text", placeholder: "Opcional" }
  ];

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h2>Teste Calculadora Postaqui</h2>
      </div>

      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.formTitle}>Dados de Origem</div>

        <div className={styles.formGrid}>
          {fields.map((field) => (
            <div className={styles.formGroup} key={field.name}>
              <label className={styles.label}>{field.label}</label>
              <input
                className={styles.input}
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.name !== "complemento"}
                placeholder={field.placeholder || ""}
              />
            </div>
          ))}
        </div>

        <button type="submit" className={styles.button}>Avançar</button>
      </form>
    </div>
  );
}

export default Forms;
