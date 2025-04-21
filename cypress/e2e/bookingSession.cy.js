describe('Mentoring session booking', () => {
  beforeEach(() => {
    cy.visit('/mentoring');
  });

  it('successfully books a session with an available mentor', () => {
    cy.searchMentorByKeyword('career');
    cy.requestAvailableMentor();
    cy.fillScheduleStep();
    cy.fillPersonalInfo();
    cy.finalizeSchedule();
    cy.verifySessionDetails();
  });
});
