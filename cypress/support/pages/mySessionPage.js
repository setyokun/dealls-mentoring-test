class MySessionPage {
  header() {
    return cy.get('header.mb-4');
  }

  detailMentorName() {
    return cy.get('.line-clamp-1 p');
  }

  detailNotes() {
    return cy.get('.whitespace-pre-line');
  }

  detailSchedule() {
    return cy.get('.border-neutral-15 .flex-col.gap-3');
  }
}

export default new MySessionPage();
