/// <reference types ="cypress" />
describe("My Second Test Suite", function () {
  it("My Second test case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword:visible").type("ca");
    cy.wait(2000);
    cy.get("div.product:visible").should("have.length", 4);
    cy.get(".products").as("productlocator");
    cy.get("@productlocator").find("div.product").should("have.length", 4);
    cy.get("@productlocator")
      .find("div.product")
      .each(($el, index, $list) => {
        const Vegtext = $el.find("h4.product-name").text();

        if (Vegtext.includes("Cashews ")) {
          cy.wrap($el).contains("ADD TO CART").click();
        }
      });
    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.wait(5000);
    cy.contains("Place Order").click();
  });
});
