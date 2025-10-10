const db = require("../data/db.json")

let listaProdutos = db.Produtos

module.exports = {
    salvar: ({ id, nome, descricao, preco, quantidade,categoria, url }) => {
    const novoProduto = {
      id: listaProdutos.length + 1,
      id,
      nome,
      descricao,
      preco,
      quantidade,
      url,
      categoria
    };
    listaProdutos.push(novoProduto);
    console.log("Novo Produto salvo:", novoProduto);
    return novoProduto;
  },
  listarTodos: () => {
    return listaProdutos;
  },
   buscarPorId: (id) => {
    return listaProdutos.find((user) => user.id == id || null);
  },
  atualizar: (id, { nome, descricao,preco,quantidade,categoria, url }) => {
    const index = listaProdutos.findIndex((user) => user.id == id);
    if (index === -1) return null;
    listaProdutos[index] = {
      ...listaProdutos[index],
      listaProdutos: id || listaProdutos[index].id,
      listaProdutos: nome || listaProdutos[index].nome,
      listaProdutos: descricao || listaProdutos[index].descricao,
      listaProdutos: preco || listaProdutos[index].preco,
      listaProdutos: quantidade || listaProdutos[index].quantidade,
      listaProdutos: categoria || listaProdutos[index].categoria,
      listaProdutos: url || listaProdutos[index].url
    };
    return listaProdutos[index];
  },
   deletar: (id) => {
    const index = listaProdutos.findIndex((user) => user.id == id);
    if (index === -1) return false;
    listaProdutos.splice(index, 1);
    return true;
  },
};