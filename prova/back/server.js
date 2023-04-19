const express = require("express");
const cors = require("cors");
const vendasRouter = require("./src/routes/routes");

const app = express();
//Rotas

app.use("/vendedores", vendasRouter);
app.use("/vendas", vendasRouter);
app.use("/total-vendas", vendasRouter);

// middleware para permitir o acesso a recursos de diferentes origens
app.use(cors());

// rota padrão
app.get("/", (req, res) => {
  res.send("Bem-vindo ao servidor Node.js com Express e Cors!");
});

// define a porta em que o servidor deve ser executado
const port = process.env.PORT || 3000;

// inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
