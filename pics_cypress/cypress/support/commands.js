// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
  const user = {
      email: 'carolina150897@gmail.com',
      password: 'carolina'
    };

  cy.get('.nav-opener').click();
  cy.contains('a', 'Log in').click();
  cy.get('#login-email').type(user.email);
  cy.get('#login-password').type(user.password);
  cy.contains('.btn-primary', 'Log in').click();
});

Cypress.Commands.add('clickOnThumbnail', () => {
  cy.get('.showStars > .catalogItem__media > .catalogItem__media-inner > .catalogItem__media-smallPreview')
    .click();
});
