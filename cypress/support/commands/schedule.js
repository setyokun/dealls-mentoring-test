import mentoringPage from '../pages/mentoringPage';

/**
 * Helper function to save data to environment
 */
const saveScheduleData = () => {
  cy.saveTextToEnv('.rmdp-container', 'dateValue');
  cy.saveValueToEnv('#proposedTimes_0_startTime', 'startTimeValue');
  cy.saveValueToEnv('#proposedTimes_0_endTime', 'endDateValue');
  cy.saveValueToEnv('#notes', 'notesValue');
};

/**
 * Fill the scheduling step with necessary details
 */
Cypress.Commands.add('fillScheduleStep', () => {
  cy.saveTextToEnv('h1.font-bold', 'mentorNameText');
  mentoringPage.careerPlanningButton().click();
  mentoringPage.nextStep1().should('be.enabled').click();

  mentoringPage.calendarButton().click();
  mentoringPage.monthButton().click();
  mentoringPage.chooseMonth('July').click({ force: true });
  mentoringPage.startDate().click();
  mentoringPage.endDate().click();
  mentoringPage.startTime().type(1900);
  mentoringPage.endTime().type(2000);

  mentoringPage.location().then(($el) => {
    if (!$el.is(':disabled')) {
      cy.wrap($el).click();
      cy.get('input[value="Online"]').click();
    } else {
      cy.log('Location field is disabled, no need to select location');
    }
  });

  cy.fixture('notes').then((value) => {
    mentoringPage.notes().clear().type(value.notes);
  });

  saveScheduleData();
  mentoringPage.nextStep2().should('be.enabled').click();
});
