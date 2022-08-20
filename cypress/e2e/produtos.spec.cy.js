/// <reference types="cypress"/>

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products-grid')
            //.first()
            //.last()
            //.eq(3) busca pelo número do array
            //busca pelo nome do elemento string
            .contains('Ajax Full-Zip Sweatshirt')
            .click()
    });
    
    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3
        
        cy.get('.products-grid').contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-notices-wrapper').should('contain', '3 × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
    });
}); 