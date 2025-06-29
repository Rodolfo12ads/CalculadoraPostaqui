import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ResumoOrigemDestino from "../components/ResumoOrigemDestino";
import styles from "./Step4.module.css";

function Step4() {
  const location = useLocation();
  const navigate = useNavigate();

  const [pedidoCompleto, setPedidoCompleto] = useState(null);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  const frete = location.state?.frete || [];
  const pedidoId = location.state?.pedido?.id;

  // Proteção contra acesso direto
  useEffect(() => {
    if (!frete.length || !pedidoId) {
      alert("Dados do pedido não encontrados. Retornando à etapa inicial.");
      navigate("/");
    }
  }, [frete, pedidoId, navigate]);

  // Buscar dados do banco
  useEffect(() => {
    const buscarPedido = async () => {
      try {
        const resposta = await fetch(`http://localhost:3001/api/pedido/${pedidoId}`);
        const dados = await resposta.json();
        setPedidoCompleto(dados);
      } catch (err) {
        console.error("Erro ao buscar pedido do banco:", err);
      }
    };

    if (pedidoId) buscarPedido();
  }, [pedidoId]);

  const handleEscolherFrete = async () => {
    if (!opcaoSelecionada) return alert("Selecione uma opção de frete.");

    try {
      await fetch(`http://localhost:3001/api/pedido/${pedidoId}/escolher`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ escolhido: opcaoSelecionada })
      });

      alert("Frete escolhido salvo com sucesso!");
      navigate("/sucesso");
    } catch (error) {
      console.error("Erro ao salvar frete escolhido:", error);
    }
  };

  if (!pedidoCompleto) return <p>Carregando...</p>;

  // Dados de origem e destino a partir do banco
  const origem = pedidoCompleto.sender;
  const destino = pedidoCompleto.receiver;

  return (
    <div className={styles.page}>
      <h2>Escolha o frete</h2>

      <ResumoOrigemDestino origem={origem} destino={destino} />

      <ul className={styles.lista}>
        {frete.map((opcao) => (
          <li key={opcao._id} className={opcaoSelecionada?._id === opcao._id ? styles.selecionado : ""}>
            <label>
              <input
                type="radio"
                name="frete"
                onChange={() => setOpcaoSelecionada(opcao)}
              />
              <strong>{opcao.carrier}</strong> - R$ {opcao.price.toFixed(2)} (Desconto: R$ {opcao.discount.toFixed(2)})
            </label>
          </li>
        ))}
      </ul>

      <button onClick={handleEscolherFrete}>Confirmar frete</button>
    </div>
  );
}

export default Step4;
