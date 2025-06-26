import { useState } from "react";

function Forms(){
    // Estado inicial do formulário
    const [formData, setFormData] = useState({
        nome:'',
        cpf:'',
        telefone:'',
        email:'',
        cep:'',
        estado:'',
        cidade:'',
        bairro:'',
        rua:'',
        numero:'',
        complemento:''
    })
    // Atualiza os campos do formulário
    const handleChange = (e)=>{
        const { name, value } = e.target;

        setFormData((prev)=>({
            ...prev,
            [name]:value
        }));
    }

    const handleSubmit = (e)=>{
       e.preventDefault();
       console.log("Dados enviados:", formData);
    }
    
return(
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Cadastro</h2>

      <label>Nome:</label>
      <input name="nome" type="text" value={formData.nome} onChange={handleChange} required />

      <label>CPF:</label>
      <input name="cpf" type="text" value={formData.cpf} onChange={handleChange} required />

      <label>Telefone:</label>
      <input name="telefone" type="text" value={formData.telefone} onChange={handleChange} required />

      <label>Email:</label>
      <input name="email" type="email" value={formData.email} onChange={handleChange} required />

      <label>CEP:</label>
      <input name="cep" type="text" value={formData.cep} onChange={handleChange} required />

      <label>Estado:</label>
      <input name="estado" type="text" value={formData.estado} onChange={handleChange} required />

      <label>Cidade:</label>
      <input name="cidade" type="text" value={formData.cidade} onChange={handleChange} required />

      <label>Bairro:</label>
      <input name="bairro" type="text" value={formData.bairro} onChange={handleChange} required />

      <label>Rua:</label>
      <input name="rua" type="text" value={formData.rua} onChange={handleChange} required />

      <label>Número:</label>
      <input name="numero" type="text" value={formData.numero} onChange={handleChange} required />

      <label>Complemento:</label>
      <input name="complemento" type="text" value={formData.complemento} onChange={handleChange} />

      <button type="submit">Enviar</button>
    </form>
)
}

export default Forms

