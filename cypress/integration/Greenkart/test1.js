/// <reference types ="cypress" />
describe("My First Test Suite", function () {
  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword:visible").type("ca");
    cy.wait(2000);
    cy.get("div.product:visible").should("have.length", 4);
    cy.get(".products").as("productlocator");
    cy.get("@productlocator").find("div.product").should("have.length", 4);
    cy.get("@productlocator")
      .find("div.product")
      .eq(2)
      .contains("ADD TO CART")
      .click()
      .then(function () {
        console.log("hello salini");
      });
    cy.get("@productlocator")
      .find("div.product")
      .each(($el, index, $list) => {
        const Vegtext = $el.find("h4.product-name").text();

        if (Vegtext.includes("Cashews ")) {
          cy.wrap($el).contains("ADD TO CART").click();
        }
      });

    cy.get("div.brand.greenLogo").then(function (logoelemnt) {
      cy.log(logoelemnt.text());
    });
    cy.get("div.brand.greenLogo").should("have.text", "GREENKART");
  });
});
