import mentoringPage from '../pages/mentoringPage';
import { generateRandomData } from '../randomData';

/**
 * Finalize the session schedule
 */
Cypress.Commands.add('finalizeSchedule', () => {
  const randomData = generateRandomData();
  const password = randomData.password;

  // Fill in password and confirmation password
  mentoringPage.inputPassword(password);
  mentoringPage.inputConfirmationPassword(password);

  // Check if checkbox1 is not already checked before clicking
  mentoringPage.commitCheckbox1().should('not.be.checked').click();
  mentoringPage.commitCheckbox2().should('not.be.checked').click();

  // Submit the form and verify that the button is enabled
  mentoringPage.finishedSteps().should('be.enabled').click();

  // Verify that the session confirmation text is displayed
  mentoringPage
    .scheduleSentText()
    .should('be.visible')
    .and('contain.text', 'Sesi mentoring kamu telah dikirimkan!');

  // Click 'See Details' and verify that 'My Sessions' tab is visible
  mentoringPage.seeDetailsButton().click();
  mentoringPage.mySessionTab().should('be.visible');
});
