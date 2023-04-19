const express = require("express");
const app = express.Router();
//Vai receber os dados em json...
//app.use(express.json());

const Loja = require("../controllers/produto.controller");

app.get("/vendedores", (req, res) => {
  // Endpoint para retornar nome do vendedor, matricula, total vendido e comissão (5%)
});

app.get("/vendas", (req, res) => {
  // Endpoint para retornar as vendas feitas contendo: data, nome do produto e nome do vendedor
});

app.get("/total-vendas", (req, res) => {
  // Endpoint para retornar o valor total das vendas
});

//app.listen(3000, () => console.log("Server running on port 3000"));

module.exports = app;
