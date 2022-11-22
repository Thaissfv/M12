/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //fazer login 
        cy.get('#username').type("aluno_ebac@ebac.com")
        cy.get('#password').type("teste@teste.com")
        cy.get('.woocommerce-form > .button').click()

        // acessar a loja e escolher e adicionar produtos 4x

        //fazendo checkout

        // validando compra



        // escolher e adicionar produtos 4x

        //fazendo checkout

        // validando compra


    });


})