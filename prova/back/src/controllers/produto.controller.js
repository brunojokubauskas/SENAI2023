const con = require("../dao/connect");
const Loja = require("../models/loja.model");

// Métodos que recebem uma lista e aplicam o modelo em todos os elementos
const modelarListaVendedores = (lista) => {
  for (i = 0; i < lista.length; i++) lista[i] = new Vendedor(lista[i]);
  return lista;
};

const modelarListaProdutos = (lista) => {
  for (i = 0; i < lista.length; i++) lista[i] = new Produto(lista[i]);
  return lista;
};

const modelarListaData = (lista) => {
  for (i = 0; i < lista.length; i++) lista[i] = new Data(lista[i]);
  return lista;
};

// Funções CRUD para a tabela "vendedores"
const criarVendedor = (req, res) => {
  let vendedor = new Vendedor(req.body);
  con.query(vendedor.create(), (err, result) => {
    if (err == null) res.status(201).end();
    else res.status(500).json(err).end();
  });
};

const listarVendedores = (req, res) => {
  let vendedor = new Vendedor(req.params);
  con.query(vendedor.read(), (err, result) => {
    if (err == null) {
      res.json(modelarListaVendedores(result)).end();
    }
  });
};

const alterarVendedor = (req, res) => {
  let vendedor = new Vendedor(req.body);
  con.query(vendedor.update(), (err, result) => {
    if (result.affectedRows > 0) res.status(202).end();
    else res.status(404).end();
  });
};

const excluirVendedor = (req, res) => {
  let vendedor = new Vendedor(req.params);
  con.query(vendedor.delete(), (err, result) => {
    if (result.affectedRows > 0) res.status(204).end();
    else res.status(404).end();
  });
};

// Funções CRUD para a tabela "produtos"
const criarProduto = (req, res) => {
  let produto = new Produto(req.body);
  con.query(produto.create(), (err, result) => {
    if (err == null) res.status(201).end();
    else res.status(500).json(err).end();
  });
};

const listarProdutos = (req, res) => {
  let produto = new Produto(req.params);
  con.query(produto.read(), (err, result) => {
    if (err == null) {
      res.json(modelarListaProdutos(result)).end();
    }
  });
};

const alterarProduto = (req, res) => {
  let produto = new Produto(req.body);
  con.query(produto.update(), (err, result) => {
    if (result.affectedRows > 0) res.status(202).end();
    else res.status(404).end();
  });
};

const excluirProduto = (req, res) => {
  let produto = new Produto(req.params);
  con.query(produto.delete(), (err, result) => {
    if (result.affectedRows > 0) res.status(204).end();
    else res.status(404).end();
  });
};

// Funções CRUD para a tabela "datas"
const criarData = (req, res) => {
  let data = new Data(req.body);
  con.query(data.create(), (err, result) => {
    if (err == null) res.status(201).end();
    else res.status(500).json(err).end();
  });
};

const listarDatas = (req, res) => {
  let data = new Data(req.params);
  con.query(data.read(), (err, result) => {
    if (err == null) {
      res.json(modelarListaData(result)).end();
    }
  });
};

const alterarData = (req, res) => {
  let data = new Data(req.body);
  con.query(data.update(), (err, result) => {
    if (result.affectedRows > 0) res.status(202).end();
    else res.status(404).end();
  });
};

const excluirData = (req, res) => {
  let data = new Data(req.params);
  con.query(data.delete(), (err, result) => {
    if (result.affectedRows > 0) res.status(204).end();
    else res.status(404).end();
  });
};

module.exports = {
  criarVendedor,
  listarVendedores,
  alterarVendedor,
  excluirVendedor,
  criarProduto,
  listarProdutos,
  alterarProduto,
  excluirProduto,
  criarData,
  listarDatas,
  alterarData,
  excluirData,
};
