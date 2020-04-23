# Personal website & portfolio

A modern, statically generated site build with React, Typescript, Gatsby and GraphQL.

All data for the site is created as JSON, markdown or YAML, and is transformed at build time to create static pages which are deployed to github pages.

Features:
- Fully static site built with GatsbyJS
- Cypress.io used for end to end tests
- GitHub actions for CI/CD which:
  - Runs E2E tests
  - Runs visual regression tests on all pages using Percy
  - Dependabot automatic pull request opening / merging after CI passing
  - Deploys on new pushes to the source branch
