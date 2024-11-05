create database deployCadastro; 
use deployCadastro;

create table usuarios(
	usuario enum("Cliente", "Administrador") default("Cliente"),
    id_usuario int not null primary key auto_increment,
    cpf varchar(45) unique,
    nome varchar(45),
    email varchar(45) unique,
    senha varchar(45)
);