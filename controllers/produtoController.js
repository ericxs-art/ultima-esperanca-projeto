const path = require("path");

const produtoModel = require("../models/produtoModel");

module.exports = {
    formCadastro: (req, res) => {
        res.render("cadastrodeproduto");
    },
    salvarProduto: (req, res) => {
        const { id, nome, descricao,preco,quantidade,categoria } = req.body;
        produtoModel.salvar({ id, nome, descricao,preco,quantidade,categoria });
        res.render("produtoconfirmado");
    },
    listarProdutos: (req, res) => {
        const produtos = produtoModel.listarTodos();
        res.json(produtos);
    },
    buscarProduto: (req, res) => {
        const id = req.params.id;
        const produto = produtoModel.buscarPorId(id);
        if (!produto) {
            return res.status(404).json({ mensagem: "Produto não encontrado" });
        }
        res.json(produto);
    },
    atualizarProduto: (req, res) => {
        const id = req.params.id;
        const { nome, descricao } = req.body;
        const produtoAtualizado = produtoModel.atualizar(id, {
            nome,
            descricao,
        });
        if (!produtoAtualizado) {
            return res.status(404).json({ mensagem: "Produto não encontrado" });
        }
        res.json({ mensagem: "Produto foi atualizado" });
    },
    deletarProduto: (req, res) => {
        const id = req.params.id;
        const deletado = produtoModel.deletar(id);
        if (!deletado) {
            return res.status(404).json({ mensagem: "Produto não encontrado" });
        }
        res.json({ mensagem: "Produto foi deletado" });
    },
};