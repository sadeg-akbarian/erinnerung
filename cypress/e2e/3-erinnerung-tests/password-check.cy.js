///<reference types="cypress" />

describe("testing the toggle-button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("diplays two text-inputs and button-text 'Hide Passwords'", () => {
    cy.get('[data-cy="test-first-password"]')
      .should("have.attr", "type", "password")
      .type("Hallo");
    cy.get('[data-cy="test-second-password"]')
      .should("have.attr", "type", "password")
      .type("Wiedersehen");
    cy.get('[data-cy="test-toggle-button"]')
      .should("have.text", "Show Passwords")
      .click()
      .should("have.text", "Hide Passwords");
    cy.get('[data-cy="test-first-password"]')
      .should("have.attr", "type", "text")
      .should("have.value", "Hallo");
    cy.get('[data-cy="test-second-password"]')
      .should("have.attr", "type", "text")
      .should("have.value", "Wiedersehen");
  });
});

describe("testing the symbols", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("tests two different passwords", () => {
    cy.get('[data-cy="test-first-password"]').type("hallo");
    cy.get('[data-cy="test-second-password"]').type("Hallo");
    cy.get('[data-cy="test-equalSymbol"]').should("have.text", "❌");
    cy.get('[data-cy="test-lowCaseSymbol"]').should("have.text", "❌");
    cy.get('[data-cy="test-uppCaseSymbol"]').should("have.text", "❌");
    cy.get('[data-cy="test-numberCheck"]').should("have.text", "❌");
    cy.get('[data-cy="test-tenCharacterSymbol"]').should("have.text", "❌");
  });
  it("has same Passwords, but no UppCase, no number, not at least 10 characters", () => {
    cy.get('[data-cy="test-first-password"]').type("H");
    cy.get('[data-cy="test-second-password"]').type("H");
    cy.get('[data-cy="test-equalSymbol"]').should("have.text", "✅");
    cy.get('[data-cy="test-lowCaseSymbol"]').should("have.text", "❌");
    cy.get('[data-cy="test-uppCaseSymbol"]').should("have.text", "✅");
    cy.get('[data-cy="test-numberCheck"]').should("have.text", "❌");
    cy.get('[data-cy="test-tenCharacterSymbol"]').should("have.text", "❌");
  });
  it("has same Passwords, meeting all necessary criteria", () => {
    cy.get('[data-cy="test-first-password"]').type("Willkommen5");
    cy.get('[data-cy="test-second-password"]').type("Willkommen5");
    cy.get('[data-cy="test-equalSymbol"]').should("have.text", "✅");
    cy.get('[data-cy="test-lowCaseSymbol"]').should("have.text", "✅");
    cy.get('[data-cy="test-uppCaseSymbol"]').should("have.text", "✅");
    cy.get('[data-cy="test-numberCheck"]').should("have.text", "✅");
    cy.get('[data-cy="test-tenCharacterSymbol"]').should("have.text", "✅");
  });
});
