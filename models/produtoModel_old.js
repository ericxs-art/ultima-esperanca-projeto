const db = require("../data/db.json")

let listaProdutos = db.Produtos

module.exports = {
  salvar: ({ id, nome, descricao, preco, quantidade, categoria, url }) => {
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
  atualizar: (id, { nome, descricao, preco, quantidade, categoria, url }) => {
    const index = listaProdutos.findIndex((user) => user.id == id);
    if (index === -1) return null;
    listaProdutos[index] = {
      ...listaProdutos[index],
      id: id || listaProdutos[index].id,
      nome: nome || listaProdutos[index].nome,
      descricao: descricao || listaProdutos[index].descricao,
      preco: preco || listaProdutos[index].preco,
      quantidade: quantidade || listaProdutos[index].quantidade,
      categoria: categoria || listaProdutos[index].categoria,
      url: url|| listaProdutos[index].url
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