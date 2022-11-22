class ProdutosPage {

    addProdutos(pagina, produto, tamanho, cor, quant){
            cy.get('#primary-menu > .menu-item-629 > a').click()
            cy.get('[class="page-numbers"]').contains(pagina).click()
            cy.get('[class="product-block grid"]').contains(produto).click()
            cy.get('.button-variable-item-' + tamanho).click()
            cy.get('.button-variable-item-'+ cor).click()
            cy.get('.input-text').clear().type(quant)
            cy.get('.single_add_to_cart_button').click()
            cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
    }

}

export default new ProdutosPage()