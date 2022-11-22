/// <reference types="cypress" />

const login = require('../fixtures/perfil.json')
const produtos = require('../fixtures/produtos.json')


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/minha-conta/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        //fazer login (COLOCAR AQUI UMA VARIÁVEL PARA ACESSAR O USUARIO QUE EU QUISER)
        cy.login(login.usuario, login.senha)

        // Depois de acessar, agora deve-se adicionar os produtos 4x
        //var prod1 = '0'
        cy.adicionarProdutos(produtos.pagina, produtos.produto, produtos.tamanho, produtos.cor, produtos.quant)
        //cy.adicionarProdutos(produtos[prod1].produto, produtos[prod1].tamanho, produtos[prod1].cor, produtos[prod1].quant)


        //fazendo checkout

        // validando compra


    });


})