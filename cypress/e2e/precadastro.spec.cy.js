/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

//Faker cria massa de dados para os testes


describe('Funcionalidade pré-cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let nameFaker = faker.name.firstName()
        let lastNameFaker =  faker.name.lastName()
        let emailFaker = faker.internet.email(nameFaker)
        
        //Teste login
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        //Teste para completar o cadastro
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nameFaker)
        cy.get('#account_last_name').type(lastNameFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    }); 
});