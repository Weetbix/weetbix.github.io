context("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the summary", () => {
    cy.contains("software engineer with over 9 years");
  });

  it("should have the links to the other pages", () => {
    cy.contains("a", "Projects");
    cy.contains("a", "Photography");
    cy.contains("a", "Social");
  });

  it("clicking projects should go to projects", () => {
    cy.contains("a", "Projects").click();
    cy.location("pathname").should("include", "projects");
  });

  it("clicking photography should go to photgraphy", () => {
    cy.contains("a", "Photography").click();
    cy.location("pathname").should("include", "photography");
  });

  it("clicking social should go to social", () => {
    cy.contains("a", "Social").click();
    cy.location("pathname").should("include", "social");
  });
});
