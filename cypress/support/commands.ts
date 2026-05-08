declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("login", (email, password) => {
  cy.log(`Logging user: ${email}`);
});

export {};