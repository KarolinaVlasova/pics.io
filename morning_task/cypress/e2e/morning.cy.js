/// <reference types='cypress' />

const { generateUser } = require('../support/generate');

const user = {
  username: 'Hogwarts_1234',
  password: 'Patronus1!'
};

describe('Demoblaze', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow register new user', () => {
    const data = generateUser();
    
    cy.get('#signin2').click();
    cy.get('#sign-username').type(data.username);
    cy.get('#sign-password').type(data.password);
    cy.contains('button', 'Sign up').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Sign up successful.`);
    });
  });

  it('should allow user to login', () => {
    cy.get('#login2').click();
    cy.get('#loginusername').type(user.username);
    cy.get('#loginpassword').type(user.password);
    cy.contains('button', 'Log in').click();
    cy.url().should('contain', '/index.html');
  });

  it('should allow user to add the product into cart', () => {
    cy.login();
    cy.contains('a', 'Samsung galaxy s6').click();
    cy.contains('a', 'Add to cart').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added.`);
    });
  });
});
