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
    // Manda as informações do objeto para o model
    userModel.login(email, senha, (erro, logado) => {
      if (erro) {
        return res.render("login", {
          titulo: "Login errado",
          erro: "erro no servidor",
        });
      }
      // Se não conseguiu logar, manda uma mensagem de erro
      if (!logado) {
        res.render("login", {
          titulo: "Login errado",
          erro: "Email ou senha inválidos",
        });
      }
      // Se conseguiu manda uma mensagem de confirmação
      else {
        res.status(200);
        res.render("index", { titulo: "Bem vindo", usuario: logado.nome });
      }
    });
  },

  //CRUD

  //C = CRIAR
  formCadastro: (req, res) => {
    //renderiza a pagina de cadasrto
    res.render("usuarios/cadastroUsuarios", { titulo: "Cadastro" });
  },
  salvarUsuario: (req, res) => {
    //criar um objeto com a info da view
    const { usuario, email, senha, tipo } = req.body;
    //manda as infos pro model
    userModel.salvar({ usuario, email, senha, tipo }, (erro, usuarioNovo) => {
      //erro monstra a tela de erro
      if (erro) {
        return res.status(500).render("usuarios/erroUsuario", {
          titulo: "Erro",
          mensagem: "Erro ao salvar o usuario",
        });
      }
      //se deu certo
      res.render("usuarios/confirmacaoUsuarios", {
        titulo: "Cadastro confirmado",
        tipo: "cadastro",
        usuarioNovo,
      });
    });
  },
  //R = LER
  listarUsuarios: (req, res) => {
    //acessa ao model e as infos
    userModel.listarTodos((erro, usuarios) => {
      //erro
      if (erro) {
        return res.status(500).render("usuarios/erroUsuario", {
          titulo: "Erro",
          mensagem: "Erro ao listar usuario",
        });
        //se deu certo renderiza
      }
      res.render("usuarios/listaUsuarios", {
        titulo: "Lista de usuários",
        usuarios,
      });
    });
  },
  //U = ATUALIZAR
  buscarUsuario: (req, res) => {
    //Busca o id vindo da url
    const id = req.params.id;
    //acessar o model para a busca
    userModel.buscarPorId(id, (erro, usuario) => {
      if (erro) {
        return res.status(500).render("usuarios/erroUsuario", {
          titulo: "Erro",
          mensagem: "Erro ao buscar o usuá rio",
        });
      }
      //se encontrar monstra isso
      res.render("usuarios/editarUsuarios", {
        titulo: "Edição",
        usuario,
      });
    });
  },
  atualizarUsuario: (req, res) => {
    //Busca o id vindo da url
    const id = req.params.id;
    // criar o objeto com as infos da view
    const { usuario, email, senha, tipo } = req.body;
    //acessar o model e atualizar o usuario
    userModel.atualizar(id,{ usuario, email, senha, tipo },
      (erro, atualizado) => {
        // se deu red
        //ou por incopetencia
        if (erro) {
          return res.status(500).render("usuarios/erroUsuario", {
            titulo: "Erro",
            mensagem: "Erro ao atualizar o usuário",
          });
        }
      
    const usuarioAtualizado = atualizado
    res.render("usuarios/confirmacaoUsuarios", {
      tipo: "edicao",
      titulo: "Edição confirmada",
      usuarioAtualizado
    });
    }
    );
  },
  // D =DELETA
  deletarUsuario: (req, res) => {
    //buscar o id via url
    const id = req.params.id;

    userModel.deletar(id, (erro, sucesso) => {
      if (erro || !sucesso) {
        return res.status(500).render("usuarios/erroUsuario", {
          titulo: "Erro",
          mensagem: "Erro ao deletar o usuário",
        });
      }
      const deletado = {usuario : "selecionado"}
      //se der bommm
      res.render("usuarios/confirmacaoUsuarios", {
        tipo: "Excluir",
        titulo: "Usuario deletado",
        deletado
      });
    });
  },
};
