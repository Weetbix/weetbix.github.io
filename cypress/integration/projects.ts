context("Projects", () => {
  beforeEach(() => {
    cy.visit("/projects");
  });

  it("clicking a facebot should navigate to the facebot page", () => {
    cy.contains("a", "Cardo").click({ force: true });
    cy.location("pathname").should("include", "projects/cardo");
    cy.contains("Facebot").should("not.exist");
  });
});
