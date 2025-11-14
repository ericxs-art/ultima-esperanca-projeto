// Importa o módulo de path pra saber as pastas e arquivos do projeto
const path = require("path");

// Importa tudo que tem no model
const userModel = require("../models/userModel");

module.exports = {
    // LOGIN
    // REsponde a requisição mostrando a visualização da tela de login
    formLogin: (req, res) => {
        res.render("login", { titulo: "Login" });
    },

    // Função para levar os dados preenchidos para o model realizar o login
    loginUsuario: (req, res) => {
        // Cria um objeto com as informações do body, retirados dos inputs
        const { email, senha } = req.body;
        userModel.login(email, senha, (erro, logado) => {
            if (erro) {
                return res.render("login", { titulo: "Login errado", erro: "erro no servidor" })
            }
            if (!logado) {
                res.status(401)
                res.render("login", { titulo: "login errado", erro: "email ou senha inválidos" })
            }
            else {
                res.status(200)
                res.render("index", { titulo: "Bem vindo", usuario: logado.nome })
            }
        });
    },

    // CRUD
    // C
    // Responde a requisição mostrando a visualização da tela de cadastro
    formCadastro: (req, res) => {
        res.render("usuarios/cadastroUsuarios", { titulo: "Cadastro" });
    },

    // Função para levar os dados preenchidos para o model realizar o cadastro
    salvarUsuario: (req, res) => {
        const { usuario, email, senha, tipo } = req.body;
        userModel.salvar({ usuario, email, senha, tipo }, (erro, usuarioNovo) => {

            if (erro) {
                return res.render("usuarios/erroUsuario", { 
                    titulo: "ERRO", 
                    erro: "erro ao salvar usuario" })
            }
            res.render("usuarios/confirmacaoUsuarios", {
                tipo: "cadastro",
                titulo: "cadastro confirmado",
                usuarioNovo
            });
        })
    },

    // R
    // Função para mostrar todos os usuarios
    listarUsuarios: (req, res) => {
        //guarda a lista
        const usuarios = userModel.listarTodos();
        //mostra a tela de lista pra pessoa
        res.render("usuarios/listaUsuarios",
            { usuarios, titulo: "Lista de usuários" });
    },
    // Função para mostrar apenas um usuario
    buscarUsuario: (req, res) => {
        // Busca o id vindo da url como parametro
        const id = req.params.id;
        // Guarda o usuário retornado, depois de buscar pelo model
        const usuario = userModel.buscarPorId(id);
        // Se não achar, avisa que deu erro
        if (!usuario) {
            return res.status(404).render("usuarios/erroUsuario", {
                titulo: "erro",
                mensagem: "Usuario não encontrado"
            });
        }
        // se achar, devolve as informações via json
        res.render("usuarios/editarUsuarios", {
            titulo: "editar",
            usuario
        });
    },
    // Função para atualizar informações de um usuário
    atualizarUsuario: (req, res) => {
        // Busca o id vindo da url como parametro
        const id = req.params.id;
        // Busca as novas informações para atualizar
        const { usuario, email, senha, tipo } = req.body;
        //Guarda o usuário atualizado em uma variável
        const usuarioAtualizado = userModel.atualizar(id, {
            usuario,
            email,
            senha,
            tipo
        });

        // Se não achar, avisa que deu erro
        if (!usuarioAtualizado) {
            return res.status(404).render("usuarios/erroUsario", {
                titulo: "erro",
                mensagem: " não foi possivel atualizar",
            });
        }
        // se atualizar, manda uma mensagem dizendo que deu certo
        res.render("usuarios/confirmacaoUsuarios", {
            titulo: "Edição confirmada",
            tipo: "edicao",
            usuarioAtualizado
        });
    },
    // Função para deletar um usuário
    deletarUsuario: (req, res) => {
        // Busca o id vindo da url como parametro
        const id = req.params.id;
        //Guarda o usuário deletado em uma variável
        const deletado = userModel.deletar(id);

        // Se não achar, avisa que deu erro
        if (!deletado) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }
        // se atualizar, manda uma mensagem dizendo que deu certo
        res.json({ deletado: deletado, mensagem: "Usuário foi deletado" });
    },
};
