/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe";

describe("My First Test Suite", function () {
  it("My FirstTest case", function () {
    console.log(Cypress.config());
    cy.visit(Cypress.env("url") + "/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");
    cy.wait(5000);
    cy.iframe().find('a[href*="mentorship"]').eq(0).click();
    cy.iframe().find('div[class="row"]').should("have.length", 4);
  });
});
