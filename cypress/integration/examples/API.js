describe("My First Test Suite", function () {
  it("My FirstTest case", function () {
    cy.request("GET", "http://dummy.restapiexample.com/api/v1/employees").then(
      function (response) {
        expect(response.status).to.be.eq(200);
      }
    );
    cy.request("POST", "http://dummy.restapiexample.com/api/v1/create", {
      name: "david23794856",
      salary: "7345634765",
      age: "77",
    }).then(function (response) {
      expect(response.status).to.be.eq(200);
      expect(response.body).to.have.property(
        "message",
        "Successfully! Record has been added."
      );
    });
  });
});
