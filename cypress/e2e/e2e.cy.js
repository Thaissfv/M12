/// <reference types="cypress" />

const login = require('../fixtures/perfil.json')
//import ProdutosPage from '../support/page_objects/listadeprodutos.page'
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
       //conseguir fazer uma lista de produtos e só passar a variável de parametro
        cy.adicionarProdutos(produtos.pagina, produtos.produto, produtos.tamanho, produtos.cor, produtos.quant)
        cy.adicionarProdutos(1, 'Arcadio Gym Short', 33, 'Blue', 2)
        cy.adicionarProdutos(37, 'Torque Power Short', 33, 'Purple', 2)
        cy.adicionarProdutos(4, 'Celeste Sports Bra', 'M', 'Green', 3)
        //ProdutosPage.addProdutos(produtos[x].produto, produtos[x].tamanho, produtos[x].cor, produtos[x].quant)


        //fazendo checkout
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()

        // validando compra


    });


})