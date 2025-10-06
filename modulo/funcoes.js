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
* push - Método de um array para adicionar no final elementos dentro de um array.
* find - Método de um array para procurar um elemento especifico pelo conteudo.
Retorna somente o primeiro elemento que satisfaz a condição.
* filter- Método de um array para procurar um elemento especifico pelo conteudo.
Retorna um novo array com todos os elementos que satisfazem a condição.
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

// Função para retornar todos os dados dos usuários
function getAllUsersData(){
    let message = { status: true, status_code: 200, development: "Kauan Lopes Pereira" }
    message.usersDatas = []
    dados.contatos['whats-users'].forEach(function(item){
        message.usersDatas.push(item)
    })
    if (message.usersDatas.length > 0) {
        return message
    } else {
        return MESSAGE_ERRO
    }
   
}
// console.log(getAllUsersData())

// Função para retornar todos os dados de um usuário
function getUserData(phoneNumber){
    let message = { status: true, status_code: 200, development: "Kauan Lopes Pereira",}
    let profile = dados.contatos['whats-users'].find(profile => profile.number === phoneNumber)

    if (profile != undefined) {
        message.account = profile.account
        message.nickname = profile.nickname
        message.created_since = profile['created-since']
        message.profile_image = profile['profile-image']
        message.number = profile.number
        message.background = profile.background
        return message
    
    } else {
        return MESSAGE_ERRO
}
    }
    
// console.log(getUserData('1194457796'))

// Função para retornar dados pessoais dos contatos de um usuário
function getContactUserData(phoneNumber){
    let message = { status: true, status_code: 200, development: "Kauan Lopes Pereira",}
    let profile = dados.contatos['whats-users'].find(profile => profile.number === phoneNumber)

    if (profile != undefined) {
        message.account = profile.account
        message.nickname = profile.nickname
        message.number = profile.number
        let contacts = profile.contacts
        message.contacts = []
        contacts.forEach(function(item){
            delete item.image
            delete item.messages
            message.contacts.push(item)
        })
        return message
    } else {
        return MESSAGE_ERRO
    }
   
}
// console.log(getContactUserData('11987876567'))

// Função para retornar todas as mensagens trocadas que um usuário já teve
function getAllUserMenssages(phoneNumber){
    let message = { status: true, status_code: 200, development: "Kauan Lopes Pereira",}
    let profile = dados.contatos['whats-users'].find(profile => profile.number === phoneNumber)

    if (profile != undefined) {
        message.account = profile.account
        message.nickname = profile.nickname
        message.number = profile.number
        let contacts = profile.contacts
        message.contacts = []
        contacts.forEach(function(item){
            message.contacts.push(item)
        })
        return message
    } else {
        return MESSAGE_ERRO
    }
}
// console.log(getAllUserMenssages('11987876567'))

// Função para retornar todas as mensagens trocadas entre o usuário e um contato especifico
function getUserMenssageWithContact(phoneNumberUser, phoneNumbercontact){
    let message = { status: true, status_code: 200, development: "Kauan Lopes Pereira",}
    let profile = dados.contatos['whats-users'].find(profile => profile.number === phoneNumberUser)

    if (profile != undefined) {
        message.account = profile.account
        message.nickname = profile.nickname
        message.number = profile.number
        let contacts = profile.contacts
        let dataContact = contacts.filter(userContact => userContact.number === phoneNumbercontact)
        if (dataContact.length > 0) {
            message.contact = dataContact
            return message
        } else {
            return MESSAGE_ERRO
        }
        
    } else {
        return MESSAGE_ERRO
    }
}
// console.log(getUserMenssageWithContact('11987876567', '26999999969'))

function getUserMenssageWithContactAndKeyWord(phoneNumber, contact, keyWord){
    let message = { status: true, status_code: 200, development: "Kauan Lopes Pereira",}
    let profile = dados.contatos['whats-users'].find(profile => profile.number === phoneNumber)

    if (profile != undefined) {
        message.account = profile.account
        message.nickname = profile.nickname
        message.number = profile.number
        let contacts = profile.contacts
        let filterContact = contacts.filter(userContact => userContact.number === contact)
        if (filterContact.length > 0){
            let contact = filterContact[0]
            let userMessage = contact.messages.filter(userKeyWord => userKeyWord.content.includes(keyWord))
            if (userMessage.length >0) {
                message.contact = {
                    name: contact.name, 
                    number: contact.number, 
                    description: contact.description,
                    image: contact.image,
                    messages: userMessage
                }
                return message
            } else {
                return MESSAGE_ERRO
            }
            
            
        } else {
            return MESSAGE_ERRO
        }
        
    } else {
        return MESSAGE_ERRO
    }
}
// console.log(getUserMenssageWithContactAndKeyWord('11987876567', '26999999963', 'Leonid'))
module.exports = {
   getAllUsersData,
   getAllUserMenssages,
   getUserData,
   getContactUserData,
   getUserMenssageWithContact,
   getUserMenssageWithContactAndKeyWord
}