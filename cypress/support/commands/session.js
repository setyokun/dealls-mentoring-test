import mySessionPage from '../pages/mySessionPage';

/**
 * Verify the session details after submission
 */
Cypress.Commands.add('verifySessionDetails', () => {
  const mentorNameText = Cypress.env('mentorNameText');
  const startTime = Cypress.env('startTimeValue');
  const endTime = Cypress.env('endDateValue');
  const location = Cypress.env('locationValue');
  const notes = Cypress.env('notesValue');
  const startDate = '01';
  const endDate = '02 Jul 2025';
  const topics = Cypress.env('Topics');

  cy.contains(mentorNameText).click();
  mySessionPage.header().should('contain', 'Pending');

  mySessionPage.detailMentorName().should('have.text', mentorNameText);
  mySessionPage.detailSchedule().contains('01').contains('02 Jul 2025');
  mySessionPage
    .detailSchedule()
    .should('include.text', startTime)
    .should('include.text', endTime)
    .should('include.text', startDate)
    .should('include.text', endDate)
    .should('include.text', location)
    .should('include.text', topics);
  mySessionPage.detailNotes().should('include.text', notes);
});
