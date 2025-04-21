// Import commands.js using ES2015 syntax:
import './commands';

Cypress.on('uncaught:exception', () => {
  // return false to prevent Cypress from failing the test
  return false;
});
