//importa a conexão com o banco de dados
const conn =  require("../config/conexao-banco.js")

module.exports ={
//login
login : (email,senha,callback) => {
//guarda o sql
const sql = `
SELECT * FROM usuarios
WHERE email = ? 
AND senha = ?
`
// oq sera utilizado na consulta
const valores = [email, senha]

//executa funcao
conn.query(sql,valores,(erro,resultados) => {
  //erro
  if(erro){
    return callback(erro,null)
  }
  // retorna para o controller (resulatdo)
  callback(null, resultados[0] || null)
})
},

// C = CREATE
salvar : ({usuario,email,senha,tipo},callback) => {
//sql com a info desejada
const sql = `
INSERT INTO usuarios (usuarios,email,senha,tipo)
VALUES (?, ?, ?, ?)
`
//valores q vai usar na consultar
const valores = [usuario, email, senha, tipo]

//executar o comando no banco
conn.query(sql,valores, (erro,resultado) => {
//lidar com erro
if(erro){
  return callback(erro, null)
}
const novoUsuario = {id: resultado.insertId, usuario, email, senha, tipo}

callback(null, novoUsuario)
})
},
//R = Read
listarTodos: (callback) => {
//guarda o sql
const sql = `SELECT * FROM usuarios`

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
  const sql = `SELECT * FROM usuarios
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
atualizar : (id, {usuario,email, senha, tipo},callback) => {
//guarda a info
const sql = `UPDATE usuarios
SET usuario = ?, email = ?, senha = ?, tipo = ?
WHERE id = ? `
// guarda a info oculta
const valores = [usuario,email,senha,tipo,id]
// criar um objeto para retorna o usuario
const atualizado = {
  usuario:valores[0]
}
//EXERCUTAR O COMANDO 
conn.query(sql,valores, (erro,resultado) => {
  if(erro){
    return callback(erro,null);
  }
  callback(null,atualizado);
});
},
//D = deletar
deletar: (id, callback) => {
//guarda a info
const sql = `DELETE FROM usuarios
WHERE id = ?`
//variavell com a info oculta
const valor = [id]
//executar o comando no banco
conn.query(sql,valor,(erro, resultado) => {
 if(erro){
    return callback(erro, null)
  }
  callback(null, resultado.affectedRows > 0)
});
}
}