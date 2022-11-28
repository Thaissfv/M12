/// <reference types="cypress" />

const login = require('../fixtures/perfil.json')
var faker = require ('faker');
faker.locale = 'pt_BR';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    beforeEach(() => {
        cy.visit('/minha-conta/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        // login com usuário válido
        var pos = 1
        cy.login(login[pos].usuario, login[pos].senha)
        cy.get('.page-title').should ('contain', 'Minha conta')

        // Adicionando 4 produtos diferentes
        cy.adicionarProdutos(37, 'Troy Yoga Short', 33, 'Black', 2)
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
        cy.adicionarProdutos(3, 'Bruno Compete Hoodie', 'S', 'Blue', 2)
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
        cy.adicionarProdutos(37, 'Torque Power Short', 33, 'Purple', 2)
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
        cy.adicionarProdutos(4, 'Celeste Sports Bra', 'M', 'Green', 3)
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')

        //fazendo checkout
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let cidadeFaker = faker.address.city()
        let enderecoFaker = faker.address.streetAddress()
        let cepFaker = faker.address.zipCode()
        let foneFaker = faker.phone.phoneNumber()
      
        cy.checkout(nomeFaker, sobrenomeFaker, 'Brasil', enderecoFaker, cidadeFaker, 'Rio de Janeiro', cepFaker, foneFaker, login[pos].usuario)
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });


})