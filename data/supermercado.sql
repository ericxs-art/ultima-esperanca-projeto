-- criação do banco
create database subermercado;
-- utilização do banco
use subermercado;

-- criando tabela usuario
create table usuarios(
id int auto_increment primary key,
usuario varchar(255),
email varchar(255),
senha varchar(255),
tipo varchar(255)
);

-- criando tabela produto
create table produtos(
id int auto_increment primary key,
 nome varchar(255),
 categoria varchar(255),
 descricao varchar(255),
 url varchar(255),
 preco decimal(6,2),
 quantidade int
);
-- visualizar tabela de usuarios
select * from usuarios;
-- visualizar tabela de produtos
select * from produtos;
-- insert de usuarios
insert into usuarios(id, usuario,email,senha,tipo)
values (default,'Erick','delriogmail@com.br','27','Administrador'),
(default,'Ana Silva','ana.silva@mail.com','senha123','cliente'),
(default,'Bruno Costa','bruno.costa@mail.com','bruno2025','cliente'),
(default,'Carla Souza','carla.souza@mail.com','carla@123','cliente'),
(default,'Diego Lima','diego.lima@mail.com','diego123','cliente'),
(default,'Eduarda Melo','eduarda.melo@mail.com','ed2025','cliente');
-- insert de produtos
insert into produtos(id,nome,categoria,descricao,url,preco,quantidade)
values (default, "Manto", "roupa de gala","Camisa do Flamengo","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GczXOCNzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s",1981,10),
(default,'Smartphone X1','eletrico','Smartphone 6.5\" 128GB, câmera 48MP',"https://encrypted-tbn0.gstatic.com/images?q=tn:ANd9GcQzXOCNzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s",1499,20),
(default,'Fone Bluetooth A2','eletrico','Fone sem fio com microfone e estojo',"https://encrypted-tbn0.gstatic.com/image?q=tbn:ANd9GcQzXOCNzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s",129,50),
(default,'Notebook Lite','eletrico','Notebook 14\" 8GB RAM 256GB SSD',"https://encrypted-tbn0.gstatic.com/images?q=tbn:Ad9GcQzXOCNzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s",299,8),
(default,'Mouse Gamer Z','eletrico','Mouse óptico 6 botões RGB',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOCNzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s",89,35),
(default,'Teclado Mecânico','eletrico','Teclado mecânico USB retroiluminado',"https://encrypted-tbn0.gstatic.com/images?qtbn:ANd9GcQzXOCNzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s",249,15),
(default,'Smartwatch S','eletrico','Relógio inteligente com monitor cardíaco',"https://encrypted-tbn0.gstatic.com/imagesq=tbn:ANd9GcQzXOCNzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s",399,30),
(default,'Câmera Action','eletrico','Câmera de ação 4K à prova dágua',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANdGcQzXOCNzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s",549,12),
(default,'Carregador USB-C','eletrico','Carregador rápido 30W',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXONzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s",59,60),
(default,'Roteador WiFi6','eletrico','Roteador dual-band Wi-Fi 6',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GczXOCNzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s",399,10),
(default,'SSD 500GB','eletrico','SSD SATA 500GB para notebooks/PCs',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANdGcQzXOCNzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s",279,25),
(default,'Camiseta Básica','roupa','Camiseta algodão unissex tamanho M',"https://encrypted-tbn0.gstatic.com/images?q=tn:ANd9GcQzXOCNzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s",39,100),
(default,'Calça Jeans','roupa','Calça jeans masculina regular fit',"https://encrypted-tbn0.gstatic.com/images?q=tbn:Ad9GcQzXOCNzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s",129,40),
(default,'Vestido Floral','roupa','Vestido feminino estampa floral P',"https://encrypted-tbn0.gstatic.com/images?qbn:ANd9GcQzXOCNzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s",89,25),
(default,'Jaqueta Nylon','roupa','Jaqueta corta-vento com capuz',"https://encrypted-tbn0.gstatic.com/images?q=tbn:Nd9GcQzXOCNzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s",149,18),
(default,'Tênis Corrida','roupa','Tênis esportivo amortecimento leve 42',"https://encrypted-tbn0.gstatic.com/imas?q=tbn:ANd9GcQzXOCNzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s",199,30);

update usuarios
set usuario = "Delrio", senha ="29"
where id = 1;

update produtos
set url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXOCNzed2n5GBDwtKsWSj67k4mdhyjmOp9Q&s", quantidade = 10
where id = 1;