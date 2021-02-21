import HomePage from "../../support/pageObjects/HomePage";
describe("My tests", function () {
  before(function () {
    // runs once before all tests in the block
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("My first testcase1", function () {
    const homePage = new HomePage();

    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getShopTab().click();
    console.log(this.data);
    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });

    cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link").click();
    //sum of two element and comparing with total
    let sum = 0;
    cy.get("tr td:nth-child(4) strong")
      .each(($el, index, $list) => {
        const price = $el.text();
        const ActualPrice = price.split(" ");
        const pp = ActualPrice[1].trim();
        sum = Number(sum) + Number(pp);
      })
      .then(function () {
        cy.log(sum);
      });

    cy.get("h3 > strong").then(function (ele) {
      const rr = ele.text();
      const ii = rr.split(" ");
      const total = ii[1].trim();
      expect(Number(total)).to.be.equal(sum);
    });
    //  cy.get(".sidebar").scrollTo("bottom");
    cy.get("button.btn.btn-success").click();
    cy.get("#country").type("India");
    cy.get(".suggestions > ul > li > a", { timeout: 80000 }).click();
    cy.get('[for="checkbox2"]').click({ force: true });
    cy.get(".ng-untouched > .btn").click();
    // cy.get('.alert').should('contain.text','Success! Thank you! Your order will be delivered in next few weeks :-).')

    //another way using chai
    //expecting a command to be true otherwise throw error
    cy.get(".alert").then(function (element) {
      const successtext = element.text();
      expect(successtext.includes("Success")).to.be.true;
    });
  });
});
