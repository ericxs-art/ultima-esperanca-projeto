const mysql = require("mysql2");

//criar uma variável para conexão com o banco

const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "subermercado",
    user: "root",
    password: "usbw"
})
//conecta ao banco de dados, ou tenta pleo menos
conn.connect((erro) => {
    if (erro) {
        console.log(erro)
    }
    else {
        console.log("Conexão bem sucedida!")

    }
})
module.exports = conn