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

  const handleSubmitPacote = async (pacoteData) => {
  const dadosCompletos = { ...formData, ...pacoteData };

  const payload = {
    sender: {
      fullname: formData.nome,
      cpf: formData.cpf,
      phone: formData.telefone,
      email: formData.email,
      address: {
        cep: formData.cep,
        state: formData.estado,
        uf: formData.estado,
        city: formData.cidade,
        neighborhood: formData.bairro,
        street: formData.rua,
        number: formData.numero,
        complement: formData.complemento
      }
    },
    receiver: {
      fullname: formData.nomeDestino,
      cpf: formData.cpfDestino,
      phone: formData.telefoneDestino,
      email: formData.emailDestino,
      address: {
        cep: formData.cepDestino,
        state: formData.estadoDestino,
        uf: formData.estadoDestino,
        city: formData.cidadeDestino,
        neighborhood: formData.bairroDestino,
        street: formData.ruaDestino,
        number: formData.numeroDestino,
        complement: formData.complementoDestino
      }
    },
    package: {
      weight: pacoteData.peso,
      height: pacoteData.altura,
      width: pacoteData.largura,
      length: pacoteData.comprimento,
      reverse: pacoteData.entregaReversa || false,
      ar: pacoteData.avisoRecebimento || false,
      own_hands: pacoteData.maosProprias || false,
      information: {
        amount: pacoteData.valorDeclarado,
        quantity: pacoteData.quantidade,
        description: pacoteData.descricao
      }
    }
  };

  try {
    const response = await fetch("https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/shipping_calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const resultado = await response.json();
    console.log("Resultado da simulação:", resultado);

    // Aqui você pode salvar no banco também, se quiser, ou navegar pra próxima etapa
  } catch (error) {
    console.error("Erro ao enviar os dados:", error);
  }
};


  const origemData = {
    nome: formData.nome,
    cpf: formData.cpf,
    cep: formData.cep,
    estado: formData.estado,
    cidade: formData.cidade,
    bairro: formData.bairro,
    rua: formData.rua,
    numero: formData.numero,
    complemento: formData.complemento,
  };

  const destinoData = {
    nome: formData.nome,
    cpf: formData.cpf,
    cep: formData.cep,
    estado: formData.estado,
    cidade: formData.cidade,
    bairro: formData.bairro,
    rua: formData.rua,
    numero: formData.numero,
    complemento: formData.complemento,
  };

  return (
    <div className={styles.page}>
      <Logo />
      <Frase texto="Teste Calculadora Postaqui" />

      <ResumoOrigemDestino origem={origemData} destino={destinoData} />

      <FormPacoteEnvio onSubmit={handleSubmitPacote} />
    </div>
  );
}

export default Step3;
