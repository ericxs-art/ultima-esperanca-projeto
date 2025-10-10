const express = require("express")

const products = express.Router()

const produtoController = require("../controllers/produtoController")

products.get("/cadastrar", produtoController.formCadastro)

products.post("/", produtoController.salvarProduto)

products.get("/", produtoController.listarProdutos)

products.get("/:id", produtoController.buscarProduto)

products.put("/:id", produtoController.atualizarProduto)

products.delete("/:id", produtoController.deletarProduto)

module.exports = products
