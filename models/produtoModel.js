//importa a conexão com o banco de dados
const conn =  require("../config/conexao-banco.js")

module.exports ={


// C = CREATE
salvar : ({id, nome, descricao, preco, quantidade, categoria, url }) => {
//sql com a info desejada
const sql = `
INSERT INTO produtos (id, nome, descricao, preco, quantidade, categoria, url)
VALUES (?, ?, ?, ?,?,?,?)
`
//valores q vai usar na consultar
const valores = [id, nome, descricao, preco, quantidade, categoria, url]

//executar o comando no banco
conn.query(sql,valores, (erro,resultado) => {
//lidar com erro
if(erro){
  return callback(erro, null)
}
const novoProduto = {id: resultado.insertId, nome, descricao, preco, quantidade, categoria, url}

callback(null, novoProduto)
})
},
//R = Read
listarTodos: (callback) => {
//guarda o sql
const sql = `SELECT * FROM produtos`

//executar o comando no banco
conn.query(sql, (erro, resultados) => {
if(erro){
  return callback(erro, null)
}
callback(null, resultados)
})
},
//U = Atualizar
//Buscar usuario
buscarPorId: (id, callback) => {
  //guarda a info
  const sql = `SELECT * FROM produtos
  WHERE id = ?`
//info oculta
const valor = [id]
  //executar o comando no banco
  conn.query(sql, valor, (erro,resultados) => {
if(erro){
  return callback(erro,null)
}
callback(null, resultados[0] || null)
  })
},
//Atualizar as info
atualizar : (id, {nome, descricao, preco, quantidade, categoria, url},callback) => {
//guarda a info
const sql = `UPDATE produtos
SET nome = ?, descricao = ?, preco = ?, quantidade = ?, categoria = ?, url = ?
WHERE id = ? `
// guarda a info oculta
const valores = [nome, descricao, preco, quantidade, categoria, url,id]
//EXERCUTAR O COMANDO 
conn.query(sql,valores, (erro,callback) => {
  if(erro){
    return callback(erro,null)
  }
  callback(null,resultado.affectedRows > 0);
});
},
//D = deletar
deletar: (id, callback) => {
//guarda a info
const sql = `DELETE FROM produtos
WHERE id = ?`
//variavell com a info oculta
const valor = [id]
//executar o comando no banco
conn.query(sql,valor,(erro, resultado) => {
  if(erro){
    return callback(erro, null)
  }
  callback(null, resultado.affectedRows > 0)
})
}
}



