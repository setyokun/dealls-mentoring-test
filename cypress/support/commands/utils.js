/**
 * Save text from an element to Cypress.env for later use
 * @param {string} selector - The element selector
 * @param {string} envKey - The key to save the text in Cypress.env
 */
Cypress.Commands.add('saveTextToEnv', (selector, envKey) => {
  cy.get(selector)
    .invoke('text')
    .then((text) => {
      Cypress.env(envKey, text.trim());
      cy.log(`Saved "${text.trim()}" to Cypress.env('${envKey}')`);
    });
});

/**
 * Save value from an input element to Cypress.env for later use
 * @param {string} selector - The element selector
 * @param {string} envKey - The key to save the value in Cypress.env
 */
Cypress.Commands.add('saveValueToEnv', (selector, envKey) => {
  cy.get(selector)
    .invoke('val')
    .then((val) => {
      Cypress.env(envKey, val);
      cy.log(`Saved "${val}" to Cypress.env('${envKey}')`);
    });
});
