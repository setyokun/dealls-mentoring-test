describe('Mentoring session booking', () => {
  beforeEach(() => {
    cy.visit('/mentoring');
  });

  it('successfully books a session with an available mentor', () => {
    Cypress.env('Topics', 'Career Planning');
    cy.searchMentor(Cypress.env('Topics'));
    cy.requestAvailableMentor();
    cy.fillScheduleStep();
    cy.fillPersonalInfo();
    cy.finalizeSchedule();
    cy.verifySessionDetails();
  });
});
