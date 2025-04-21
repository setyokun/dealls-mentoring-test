import mentoringPage from '../pages/mentoringPage';
import { generateRandomData } from '../randomData';

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
