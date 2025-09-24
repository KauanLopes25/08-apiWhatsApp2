'use strict'

/********************************************************************************************
* Objetivo: Arquivo responsável por rodar a aplcação da api, utilizando EndPoints referente 
a API de estados e cidades
* Autor: Kauan Lopes Pereira
* Data: 15/09/2025
* Versão: 1.1.09.25
********************************************************************************************/

/* Comentário em bloco */
// Comentário em linha

/********************************************************************************************
********************************* COMANDOS UTILIZADOS ***************************************

************************************** OBSERVAÇÕES ******************************************
* Instalação do Express, cors, Body-Parser.
* npm install express      --save
* npm install cors         --save
* npm install body-parser  --save
* npm i - Tudo que estiver no package,json sera instalado no node_modules, serve para quando
utilizarmos o projeto em outro computador.
******************************** BIBLIOTECAS UTILIZADAS *************************************
* Express
* Cors
* Body-parser
********************************************************************************************/
// Responsável pela API
const express = require('express')
// Responsável pelas permissões da API (APP)
const cors = require('cors')
// Responsável por gerenciar a chegada dos dados da api com o front
const bodyParser = require('body-parser')
// Importação do arquivo de funcões da API
const dados = require('./modulo/funcoes.js')

// Retorna a porta do servidor local ou colocamos uma porta local
const PORT = process.PORT || 8080
// Criando uma instancia de uma classe do express
const app = express()

// Configuração de permissões
// next ?
app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*') // Servidor de origem da API
    response.header('Access-Control-Allow-Methods', 'GET') // Verbos permitidos na API
    app.use(cors()) // Carrega as configurações no Cors da API
    next() // Próximo, carregar os proximos endpoints
})
