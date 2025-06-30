
# 📦 Calculadora de Frete Postaqui

Este projeto é uma aplicação full stack para simulação e cálculo de fretes, com formulário multi-etapas (origem, destino e pacote), integração com uma API externa de frete e geração de código de rastreamento. Ele salva os dados no banco de dados via Prisma.

---

## 🚀 Tecnologias Utilizadas

### 🔧 Back-End
- Node.js + Express
- Prisma ORM
- Banco de dados SQLite (ou MongoDB configurável)
- API externa mockada via Postman

### 🌐 Front-End
- React.js (Vite)
- React Router DOM
- CSS Modules

---

## 🧪 Funcionalidades

- Formulário dividido em etapas (Step1 → Step2 → Step3 → Step4)
- Envio de dados para simulação de frete
- Exibição de várias opções de transportadoras
- Salvamento do pedido no banco de dados
- Escolha de frete e geração de código de rastreamento(ausentes nao deu para implementar)

---

## 🛠️ Como Rodar o Projeto

### 🔌 Pré-requisitos

- Node.js instalado
- (opcional) Docker ou banco local
- Yarn ou npm

---

### 📦 Instalar dependências

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

### 🗃️ Rodar o banco de dados e iniciar servidor

```bash
# Backend
cd backend

# Criar banco de dados com Prisma
npx prisma migrate dev --name init

# Iniciar servidor
node index.js
```

---

### 💻 Rodar o Front-End

```bash
cd frontend
npm run dev
```

---

## 🔌 Endpoints API

- `POST /api/pedido` – Cria pedido e simula frete
- `GET /api/pedido/:id` – Retorna dados do pedido por ID
- `PUT /api/pedido/:id/escolher` – Salva a opção de frete escolhida e gera código de rastreamento

---

## 📝 Observações

- A API externa utilizada está mockada via Postman.
- O sistema pode ser adaptado para uso em produção com APIs reais de transportadoras.
- Todos os dados são armazenados em banco de dados utilizando Prisma.

---

## 👨‍💻 Autor

Desenvolvido por **Rodolfo André** – Projeto full stack com React + Node + Prisma.
