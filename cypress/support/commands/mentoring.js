import mentoringPage from '../pages/mentoringPage';

/**
 * Search mentor by keyword on mentoring page
 * @param {string} keyword
 */
Cypress.Commands.add('searchMentorByKeyword', (keyword) => {
  cy.title().should('contain', 'Mentor');
  cy.url().should('include', '/mentoring');
  mentoringPage.searchMentor().type(keyword);
});

/**
 * Request to the first available mentor by searching for "Bisa Request" text
 */
Cypress.Commands.add('requestAvailableMentor', () => {
  cy.contains('Bisa Request').first().click();

  cy.contains('Ajukan Jadwal').click();
  cy.log('✅ Berhasil request mentor pertama yang tersedia.');
});
