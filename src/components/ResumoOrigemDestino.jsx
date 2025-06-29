// ResumoOrigemDestino.jsx
import styles from "./ResumoOrigemDestino.module.css";

function ResumoOrigemDestino({ formData }) {
  const origem = {
    nome: formData.nome,
    cpf: formData.cpf,
    endereco: `${formData.cep} - ${formData.estado} - ${formData.cidade} - ${formData.bairro} - ${formData.rua} - ${formData.numero} ${formData.complemento || ""}`,
  };

  const destino = {
    nome: formData.nomeDestino,
    cpf: formData.cpfDestino,
    endereco: `${formData.cepDestino} - ${formData.estadoDestino} - ${formData.cidadeDestino} - ${formData.bairroDestino} - ${formData.ruaDestino} - ${formData.numeroDestino} ${formData.complementoDestino || ""}`,
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.origem}`}>
        <h3>Origem</h3>
        <p>{origem.nome} - {origem.cpf}</p>
        <p>{origem.endereco}</p>
      </div>

      <div className={styles.arrow}>
        <span>→</span>
      </div>

      <div className={`${styles.card} ${styles.destino}`}>
        <h3>Destino</h3>
        <p>{destino.nome} - {destino.cpf}</p>
        <p>{destino.endereco}</p>
      </div>
    </div>
  );
}

export default ResumoOrigemDestino;
