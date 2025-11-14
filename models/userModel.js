// Importar o json para servir como banco de dados
const db = require("../data/db.json");

// Variável pra armazenar os usuários vindos do db
let listaUsuarios = db.usuarios;

//area nova conexao com o banco de dados
//variavel que importa a conexão com o banco
const conn = require("../config/conexao-banco.js");

module.exports = {
 
  login: (usuario, senha, callback) => {
    // busca na lista usuarios, se tem aquele usuario com info mesmo

    //variavel que guarda a consulta sql
    const sql = `SELECT * FROM usuarios 
                WHERE email = ?
                AND senha =?`
//valores para consulta sql
                const valores = [ email, senha]

                conn.query(sql,valores, () =>{

if (erro){
  return callback(erro,null)
}
// deu certo
callback(null, resultados[0] || (null))
                })
  },

  //CRUD
  // Função para cadastrar um novo usuario
  salvar: ({ usuario, email, senha, tipo }, callback) => {
    //variavel que guarda a consulta sql
    const sql = `INSERT INTO usuarios (usuario,email,senha,tipo)
    VALUES(?,?,?,?)
    `

    //VALORES PARA CONSULTA SQL
    const valores = [usuario,email,senha,tipo]
//função pra executar o sql,fazendo a requisição pro banco
    conn.query(sql,valores,(erro,resultados) =>{
      if(erro){
        return callback(erro,null)
      }
      //variavel que armazena as informações que foram adicionados
      const novoUsuario = {id:resultados.insertId,usuario,email,senha,tipo}
//função que retorna pra controller
      callback(null, novoUsuario)
    })
  },
  // Busca todos os usuários do banco
  listarTodos: () => {
   
  },
  // Busca um usuário específico do banco
  buscarPorId: (id) => {
  
  },

  atualizar: (id, { usuario, email, senha, tipo }) => {
  
   
  
  },
  deletar: (id) => {
    
  },
};
