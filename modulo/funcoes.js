'use strict'

/********************************************************************************************
* Objetivo: Arquivo de funções para gerenciar a API de whatsaap.
* Autor: Kauan Lopes Pereira
* Data: 24/09/2025
* Versão: 1.0.09.25
********************************************************************************************/

/* Comentário em bloco */
// Comentário em linha

/********************************************************************************************
********************************* COMANDOS UTILIZADOS ***************************************
* forEach - Método de um array que percorre todos os indices.
* push - Método de um array para adicionar elementos dentro de um array.
* find - Método de um array para procurar um elemento especifico pelo conteudo.
************************************** OBSERVAÇÕES ******************************************
* Todo array possui um indice, e para acessar um indice devemos dizer qual a sua posição [0],
[3] ou [n], seria a posição em que aquele elemento se encontra dentro de todo array.
* Todo Json pode ser acessado com ".nomeAtributo".
******************************** BIBLIOTECAS UTILIZADAS *************************************

********************************************************************************************/
// Mensagem de erro
const MESSAGE_ERRO = { status: false, status_code: 500, development: "Kauan Lopes Pereira" }


const { json } = require('body-parser')
// Importação dos dados de contatos
const dados = require('./contatos.js')

// module.exports = {
   
// }