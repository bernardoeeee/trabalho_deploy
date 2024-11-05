const express = require('express');
const cors = require('cors');
//definir a porta
const porta = 3001;
const app = express();
//habilitar o cors e utilizar json
app.use(cors());
app.use(express.json());
//testar
app.listen(porta, () => console.log(`rodando na porta ` + porta));
 
 
const connection = require('./db_config');
 
app.post('/usuario/cadastrar', (request, response) => {
    let params = Array(

        request.body.cpf,
        request.body.nome,
        request.body.email,
        request.body.senha
    );
 console.log(params)
    
    let query = "INSERT INTO usuarios(cpf, nome, email, senha) values(?,?,?,?);";
   
    connection.query(query, params, (err, results) => {
        if(results) {
            response
            .status(201)
            .json({
                success: true,
                message: "Sucesso",
                data: results
            })
 
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            })
        }
    })
});