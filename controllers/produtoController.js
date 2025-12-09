const path = require("path");

const produtoModel = require("../models/produtoModel");
module.exports = {
  formCadastro: (req, res) => {
    res.render("produtos/cadastroProduto", { titulo: "Cadastro" });
  },
  salvarProduto: (req, res) => {
    const { id, nome, descricao, preco, quantidade, categoria, url } = req.body;

    produtoModel.salvar(
      { id, nome, descricao, preco, quantidade, categoria, url },
      (erro, produtoNovo) => {
        if (erro) {
          return res.status(500).render("produtos/erroProdutos", {
            titulo: "Erro",
            mensagem: "Erro ao salvar o produto",
          });
        }
        //se deu certo
        res.render("produtos/produtoConfirmado", {
          titulo: "Cadastro confirmado",
          tipo: "cadastro",
          produtoNovo
        });
      }
    );
  },
  //R = LER
  listarProdutos: (req, res) => {
    produtoModel.listarTodos((erro, produtos) => {
      if (erro) {
        return res.status(500).render("produtos/erroProdutos", {
          titulo: "Erro",
          mensagem: "Erro ao listar produto",
        });
      }
      res.render("produtos/listarProdutos", {
        titulo: "Lista de produtos",
        produtos,
      });
    });
  },
  //U = ATUALIZAR
  buscarProduto: (req, res) => {
    const id = req.params.id;

    produtoModel.buscarPorId(id, (erro, produto) => {
      if (erro) {
        return res.status(500).render("produtos/erroProdutos", {
          titulo: "Erro",
          mensagem: "Erro ao buscar o produto",
        });
      }
      res.render("produtos/editarProdutos", {
        titulo: "Edição",
        produto,
      });
    });
  },
  atualizarProduto: (req, res) => {
        const id = req.params.id;

        const { nome, descricao, preco, quantidade, categoria, url } = req.body;
        
       produtoModel.atualizar(
          id,
          { nome, descricao, preco, quantidade, categoria, url },
          (erro, atualizado) => {
            if (erro) {
              return res.status(500).render("produtos/erroProdutos", {
                titulo: "Erro",
                mensagem: "Erro ao atualizar o produto",
              });
            }
         
        const atualizarProduto = atualizado
        res.render("produtos/produtoConfirmado", {
          tipo: "edicao",
          titulo: "Edição confirmada",
          atualizarProduto
        });
         }
        );
  },
  // D =DELETA
  deletarProduto: (req, res) => {
    const id = req.params.id;

    produtoModel.deletar(id, (erro, sucesso) => {
      if (erro || !sucesso) {
        return res.status(500).render("produtos/erroProdutos", {
          titulo: "Erro",
          mensagem: "Erro ao deletar o produto",
        })
      }
      const deletado = {produto:"selecionado"}
      res.render("produtos/produtoConfirmado", {
        tipo: "excluir",
        titulo: "Produto deletado",
        deletado
      });
    });
  },
};
