import mentoringPage from '../pages/mentoringPage';

/**
 * Search mentor by keyword on mentoring page
 * @param {string} keyword
 */
Cypress.Commands.add('searchMentor', (keyword) => {
  cy.title().should('contain', 'Mentor');
  cy.url().should('include', '/mentoring');
  mentoringPage.searchMentor().should('be.enabled').type(keyword);
});

/**
 * Request to the first available mentor by searching for "Bisa Request" text
 */
Cypress.Commands.add('requestAvailableMentor', () => {
  mentoringPage
    .mentorCard()
    .first()
    .should('be.visible')
    .should('contain.text', 'Career Planning')
    .contains('Bisa Request')
    .click();

  mentoringPage.mentorCard().should('not.exist');
});
