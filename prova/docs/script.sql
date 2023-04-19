DROP DATABASE IF EXISTS produtos;

CREATE DATABASE produtos CHARSET = UTF8 COLLATE utf8_general_ci;

USE produtos;

DROP TABLE IF EXISTS vendedores;

CREATE TABLE
  vendedores (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    matricula VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  );

INSERT INTO
  vendedores (nome, matricula)
VALUES
  ('Stefany Antonely', '14644'),
  ('Stella Viana', '01516'),
  ('Tomás Isaac', '50913'),
  ('Osvaldo Galvão', '72193');

DROP TABLE IF EXISTS produtos;

CREATE TABLE
  produtos (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (id)
  );

INSERT INTO
  produtos (nome, valor)
VALUES
  ('Samsung Galaxy M53', 2211.11),
  ('Motorola Moto G42', 1499.00),
  ('Rainha das Chamas', 36.90),
  (
    'Crônicas Saxônicas - O Cavaleiro da Morte',
    57.90
  ),
  ('O Milagre do Amanhã', 56.59),
  ('Lavadora de Roupas Brastemp BWK12AB', 2199.00),
  ('Fogão Atlas 4 Bocas', 899.00);

DROP TABLE IF EXISTS datas;

CREATE TABLE
  datas (
    id INT NOT NULL AUTO_INCREMENT,
    datahora DATETIME NOT NULL,
    PRIMARY KEY (id)
  );

INSERT INTO
  datas (datahora)
VALUES
  ('2023-04-18 08:39:00'),
  ('2023-04-18 08:39:00'),
  ('2023-04-18 08:39:00'),
  ('2023-04-18 08:39:00'),
  ('2023-04-18 08:39:00'),
  ('2023-04-18 08:39:00');