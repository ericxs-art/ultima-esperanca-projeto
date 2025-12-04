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
buscarPorId: () => {

},
//Atualizar as info
atualizar : () => {

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