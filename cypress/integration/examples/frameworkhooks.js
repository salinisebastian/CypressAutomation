describe("My tests", function () {
  before(function () {
    // runs once before all tests in the block
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("My first testcase1", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(":nth-child(1) > .form-control").type(this.data.name);
    cy.get("#exampleFormControlSelect1").select(this.data.gender);
    cy.get(":nth-child(4) > .ng-untouched").should(
      "have.value",
      this.data.name
    );
    cy.get(":nth-child(1) > .form-control").should(
      "have.attr",
      "minlength",
      "2"
    );
    cy.get("#inlineRadio3").should("be.visible");
    cy.get(":nth-child(2) > .nav-link").click();
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
