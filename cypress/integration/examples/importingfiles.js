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
    homePage.getName().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should("have.value", this.data.name);
    homePage.getName().should("have.attr", "minlength", "2");
    homePage.getEntrepreneur().should("be.visible");
    homePage.getShopTab().click();
    /*cy.get('.card.h-100').each(($el, index, $list) => {
        if ($el.find('.card-title').text().includes('Blackberry')) {
            cy.wrap($el).find('.btn.btn-info').click()
        }
    })*/
    //another method
    //array stored in commands(combination of data driven and reusable function)
    console.log(this.data);
    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });
  });
});
