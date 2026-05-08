describe("Login flow", () => {

  it("should open homepage", () => {

    cy.visit("/");

    cy.contains("Kitchen Sink")
      .should("be.visible");
  });

});