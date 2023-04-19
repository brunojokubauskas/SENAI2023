const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senha',
  database: 'produtos',
});

// Endpoint que retorna nome do vendedor, matricula, total vendido e comissão (5%)
app.get('/vendedores', (req, res) => {
  const query = `
    SELECT 
      v.nome AS vendedor,
      v.matricula,
      SUM(p.valor) AS total_vendido,
      SUM(p.valor) * 0.05 AS comissao
    FROM 
      vendedores v
      INNER JOIN vendas vd ON v.id = vd.vendedor_id
      INNER JOIN produtos p ON vd.produto_id = p.id
    GROUP BY 
      v.id
  `;
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

// Endpoint que retorna as vendas feitas contendo: data, nome do produto e nome do vendedor
app.get('/vendas', (req, res) => {
  const query = `
    SELECT 
      vd.data,
      p.nome AS produto,
      v.nome AS vendedor
    FROM 
      vendas vd
      INNER JOIN produtos p ON vd.produto_id = p.id
      INNER JOIN vendedores v ON vd.vendedor_id = v.id
  `;
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

// Endpoint que retorna o valor total das vendas
app.get('/total-vendido', (req, res) => {
  const query = `
    SELECT 
      SUM(valor) AS total_vendido
    FROM 
      produtos
  `;
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
