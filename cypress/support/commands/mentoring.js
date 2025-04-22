import mentoringPage from '../pages/mentoringPage';
import { generateRandomData } from '../randomData';

/**
 * Search mentor by keyword on mentoring page
 * @param {string} keyword
 */
Cypress.Commands.add('searchMentor', (keyword) => {
  cy.title().should('contain', 'Mentor');
  cy.url().should('include', '/mentoring');
  mentoringPage.searchMentor().should('not.be.disabled').type(keyword, { force: true });
});

/**
 * Request to the first available mentor by searching for "Bisa Request" text
 */
Cypress.Commands.add('chooseAvailableMentor', () => {
  mentoringPage
    .mentorCard()
    .first()
    .should('be.visible')
    .should('contain.text', 'Career Planning')
    .contains('Bisa Request')
    .dblclick();

  mentoringPage.mentorCard().should('not.exist');
});

/**
 * Helper function to save data to environment
 */
const saveScheduleData = () => {
  cy.saveTextToEnv('.rmdp-container', 'dateValue');
  cy.saveValueToEnv('#proposedTimes_0_startTime', 'startTimeValue');
  cy.saveValueToEnv('#proposedTimes_0_endTime', 'endDateValue');
  cy.saveTextToEnv('.propose-location-select', 'locationValue');
  cy.saveValueToEnv('#notes', 'notesValue');
};

/**
 * Fill the scheduling step with necessary details
 */
Cypress.Commands.add('fillScheduleStep', () => {
  mentoringPage.ajukanJadwalButton().should('be.visible').click();
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

/**
 * Fill in personal information with random data
 */
Cypress.Commands.add('fillPersonalInfo', () => {
  const randomData = generateRandomData();
  const pdfName = 'samplecv.pdf';

  // Only log essential information
  cy.log(`Filling personal information for ${randomData.name} with email ${randomData.email}`);

  mentoringPage.fullName().clear().type(randomData.name);
  mentoringPage.email().clear().type(randomData.email);
  mentoringPage.whatsappNumber().clear().type(randomData.phone);
  mentoringPage.birthDate().clear().type(randomData.dateOfBirth);
  mentoringPage.uploadCV(pdfName); // Ensure this file exists in /fixtures folder
  mentoringPage.verifyPDFUploaded().should('have.text', pdfName);

  mentoringPage.linkURLButton().click();
  mentoringPage.inputlinkURL().type(randomData.portfolioLink);

  mentoringPage.nextStep3().should('be.enabled').click();
});

/**
 * Finalize the session schedule
 */
Cypress.Commands.add('finalizeSchedule', () => {
  const randomData = generateRandomData();
  const password = randomData.password;
  mentoringPage.inputPassword(password);
  mentoringPage.inputConfirmationPassword(password);

  mentoringPage.commitCheckbox1().should('not.be.checked').click();
  mentoringPage.commitCheckbox2().should('not.be.checked').click();
  mentoringPage.finishedSteps().should('be.enabled').click();

  mentoringPage
    .scheduleSentText()
    .should('be.visible')
    .and('contain.text', 'Sesi mentoring kamu telah dikirimkan!');
  mentoringPage.seeDetailsButton().click();
  mentoringPage.mySessionTab().should('be.visible');
});

