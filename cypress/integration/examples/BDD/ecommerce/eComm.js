import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/pageObjects/HomePage";
const homePage = new HomePage();

Given("I open Ecommerce Page", function () {
  cy.visit("https://rahulshettyacademy.com/angularpractice/");
});
// When I add items to cart
When("I add items to cart", function () {
  //const homePage = new HomePage();
  homePage.getShopTab().click();
  console.log(this.data);
  this.data.productName.forEach(function (element) {
    cy.selectProduct(element);
  });
});
And("Validate the total prices", function () {
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
});
//        Then Select the country submit and verify Thankyou
Then("Select the country submit and verify Thankyou", function () {
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

/*Scenario: Filling the form to shop
        Given I open Ecommerce Page
        When I fill the form details
        And Validate the forms bahaviour
        Then Select the Shop Page
*/

When("I fill the form details", function (dataTable) {
  // const homePage = new HomePage();
  name = dataTable.rawTable[1][0];
  homePage.getName().type(dataTable.rawTable[1][0]);
  homePage.getGender().select(dataTable.rawTable[1][1]);
});
And("Validate the forms bahaviour", function () {
  // const homePage = new HomePage();
  homePage.getTwoWayDataBinding().should("have.value", name);
  homePage.getName().should("have.attr", "minlength", "2");
  homePage.getEntrepreneur().should("be.visible");
});
Then("Select the Shop Page", function () {
  // const homePage = new HomePage();
  homePage.getShopTab().click();
});
//Tags in cucumber running command
// npx cypress-tags run -e TAGS='@Smoke' --headed --browser chrome
//Cucumber running command
//node_modules\.bin\cypress run --spec "cypress\integration\examples\BDD\ecommerce.feature" --headed --browser chrome
//add cucumber report options in package.json-> output.json
//use html report plugin/create js file(pass the details of outout.json)
//run js file
