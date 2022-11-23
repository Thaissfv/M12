/// <reference types="cypress" />

const login = require('../fixtures/perfil.json')
//var faker = require ('faker');

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    beforeEach(() => {
        cy.visit('/minha-conta/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        // login com usuário válido
        var pos = 2
        cy.login(login[pos].usuario, login[pos].senha)

        // Adicionando 4 produtos diferentes
        cy.adicionarProdutos(1, 'Arcadio Gym Short', 33, 'Blue', 2)
        cy.adicionarProdutos(3, 'Bruno Compete Hoodie', 'S', 'Blue', 2)
        cy.adicionarProdutos(37, 'Torque Power Short', 33, 'Purple', 2)
        cy.adicionarProdutos(4, 'Celeste Sports Bra', 'M', 'Green', 3)

        //fazendo checkout
        cy.checkout('Thais', 'Vasconcelos', 'Brasil', 'Rua das Flores', 'Fortaleza', 'Rio de Janeiro', '25254-540', '54555255245', login[pos].usuario)

    });


})