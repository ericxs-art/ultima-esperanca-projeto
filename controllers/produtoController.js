const path = require("path")

const produtoModel = require("../models/produtoModel");
module.exports = {
formCadastro: (req,res) => {
res.render("produtos/cadastroProduto", {titulo:"Cadastro"})
},
salvarProduto: (req,res) => {
const {id, nome, descricao, preco, quantidade, categoria, url } = req.body

userModel.salvar({id, nome, descricao, preco, quantidade, categoria, url }, (erro,produtoNovo) => {

if(erro){
  return res.status(500).render("produtos/erroProdutos", {
    titulo:"Erro",
    mensagem:"Erro ao salvar o produto"
  })
}
//se deu certo
res.render("produtos/produtoConfirmado",{
  titulo:"Cadastro confirmado",
  tipo: "cadastro",
  produtoNovo
})
})
},
//R = LER
listarProdutos: (req,res) => {
produtoModel.listarTodos((erro,produtos) => {

if(erro){
  return res.status(500).render("produtos/erroProdutos",{
    titulo:"Erro",
    mensagem: "Erro ao listar produto"
  })
}
res.render("produtos/listarProdutos", {
titulo:"Lista de produtos",
produtos
})
})
},
//U = ATUALIZAR
buscarProduto: () => {

},
atualizarProduto: () => {

},
// D =DELETA
deletarProduto: () => {

    }
}