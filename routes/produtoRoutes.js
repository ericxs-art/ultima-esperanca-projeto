const express = require("express")

const products = express.Router()

const produtoController = require("../controllers/produtoController")

products.get("/cadastrar", produtoController.formCadastro)

products.post("/cadastrar", produtoController.salvarProduto)

products.get("/", produtoController.listarProdutos)

products.get("/:id", produtoController.buscarProduto)

products.post("/:id", produtoController.atualizarProduto)

products.get("/:id", produtoController.deletarProduto)

module.exports = products
