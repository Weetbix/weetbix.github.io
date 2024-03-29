context("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the summary", () => {
    cy.contains("I am a software engineer who enjoys bringing");
  });

  it("should have the links to the other pages", () => {
    cy.contains("a", "Projects");
    cy.contains("a", "Photography");
  });

  it("clicking projects should go to projects", () => {
    cy.contains("a", "Projects").click();
    cy.location("pathname").should("include", "projects");
  });

  it("clicking photography should go to photgraphy", () => {
    cy.contains("a", "Photography").click();
    cy.location("pathname").should("include", "photography");
  });
});
