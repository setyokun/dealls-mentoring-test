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
  mentoringPage.mentorCard().should('be.visible');
  mentoringPage.chooseAvailableMentor()
    .eq(0).should('be.visible')
    .click({ force: true });

  mentoringPage.ajukanJadwalButton().should('be.visible').click();
});
