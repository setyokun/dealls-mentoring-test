class MentoringPage {
  loginButton() {
    return cy.get('#dealls-navbar-login-btn');
  }

  loginSuccessText() {
    return cy.get('.ant-message-success');
  }

  searchMentor() {
    return cy.get('#searchMentor');
  }

  mentorCard() {
    return cy.get('.MentorCard_mentor_card__zMRXB');
  }
  
  chooseAvailableMentor() {
    return cy.contains('div', 'Bisa Request');
  }

  sessionHasBeenRequestedText() {
    return cy.contains('h3 .flex.w-full');
  }

  ajukanJadwalButton() {
    return cy.contains('Ajukan Jadwal');
  }

  mentorName() {
    return cy.get('h1.font-bold');
  }

  careerPlanningButton() {
    return cy.get('#book-session-form').find('button').contains('Career');
  }

  nextStep1() {
    return cy.get('#mentoring-schedule-topic-request-session-btn');
  }

  calendarButton() {
    return cy.get('.rmdp-container');
  }

  monthButton() {
    return cy.get('.rmdp-header-values');
  }

  chooseMonth(month) {
    return cy.contains('span', month);
  }

  startDate() {
    return cy.get('div[aria-label*="July 01 of 2025"] span.sd');
  }

  endDate() {
    return cy.get('div[aria-label*="July 02 of 2025"] span.sd');
  }

  startTime() {
    return cy.get('#proposedTimes_0_startTime');
  }

  endTime() {
    return cy.get('#proposedTimes_0_endTime');
  }

  location() {
    return cy.get('#proposeLocation');
  }

  notes() {
    return cy.get('#notes');
  }

  nextStep2() {
    return cy.get('#mentoring-schedule-pick-schedule-request-session-btn');
  }

  fullName() {
    return cy.get('#fullName');
  }

  whatsappNumber() {
    return cy.get('#whatsapp');
  }

  email() {
    return cy.get('#email');
  }

  birthDate() {
    return cy.get('#birthDate');
  }

  uploadCV(filename) {
    return cy.get('#cv').attachFile(filename);
  }

  verifyPDFUploaded() {
    return cy.get('.line-clamp-1');
  }

  linkURLButton() {
    return cy.contains('URL');
  }

  inputlinkURL() {
    return cy.get('#customPortfolios_0_url');
  }

  nextStep3() {
    return cy.get('#mentoring-schedule-personal-information-request-session-btn');
  }

  inputPassword(password) {
    return cy.get('#password').type(password);
  }

  inputConfirmationPassword(ConfirmationPassword) {
    return cy.get('#confirmPassword').type(ConfirmationPassword);
  }

  commitCheckbox1() {
    return cy.contains('Saya telah memposting');
  }

  commitCheckbox2() {
    return cy.contains('I commit to attend');
  }

  commitCheckbox() {
    return cy.get('#commitCheckbox');
  }

  finishedSteps() {
    return cy.get('#mentoring-schedule-finish-request-session-btn');
  }

  scheduleSentText() {
    return cy.get('h2.text-center');
  }

  seeDetailsButton() {
    return cy.get('button.items-center.rounded-full');
  }

  mySessionTab() {
    return cy.get('a[href="/mentoring/my-session"]');
  }
}

export default new MentoringPage();
