const path = require("path");

const produtoModel = require("../models/produtoModel");

module.exports = {
    formCadastro: (req, res) => {
        res.render("produtos/cadastroProduto", { titulo: "Cadastro" });
    },
    salvarProduto: (req, res) => {
        const { id, nome, descricao, preco, quantidade, categoria, url } = req.body;
        produtoNovo = produtoModel.salvar({ id, nome, descricao, preco, quantidade, categoria, url });
        res.render("produtos/produtoConfirmado", {
            tipo: "cadastro",
            titulo: "cadastro confirmando",
            produtoNovo
        });
    },
    listarProdutos: (req, res) => {
        const produtos = produtoModel.listarTodos();
        res.render("produtos/listarProdutos",
            { produtos, titulo: "Lista de produtos" });
    },
    buscarProduto: (req, res) => {
        const id = req.params.id;
        const produto = produtoModel.buscarPorId(id);
        if (!produto) {
            return res.status(404).render("produtos/erroProdutos", {
                titulo:"erro",
                mensagem:"Usuario não encontrado"
            });
        }
        res.render("produtos/editarProdutos", {
            titulo: "editar",
            produto

        });
    },
    atualizarProduto: (req, res) => {
        const id = req.params.id;
        const { nome, descricao, preco, quantidade, categoria, url } = req.body;
        const produtoAtualizado = produtoModel.atualizar(id, {
            nome,
            descricao,
            preco,
            quantidade,
            categoria,
            url
        });
        if (!produtoAtualizado) {
            return res.status(404).render("produtos/erroProdutos", {
                titulo: "erro",
                mensagem: "Não foi possivel atualizar o produto"

            })
        }
        res.render("produtos/produtoConfirmado", {
            titulo: "edição confirmada",
            tipo: "edicao",
            produtoAtualizado
        })
    },
    deletarProduto: (req, res) => {
        const id = req.params.id;
        deletado = produtoModel.deletar(id);
        if (!deletado) {
            return res.status(404).json({ mensagem: "Produto não encontrado" });
        }
        res.json({ deletado: deletado, mensagem: "Produto foi deletado" });
    },
};