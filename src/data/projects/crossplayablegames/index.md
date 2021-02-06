---
title: Crossplayable.games
summary: Fast, static website for finding crossplayable games on different platforms
date: 2020-11-13
languages: Typescript, React, Gatsby, GraphQL, Github Actions, AWS, Terraform
category: Other
---

## Summary

[Crossplayble.games](https://crossplayable.games) is a fast and fully static website that lets you easily view games which are
crossplayable on different combinations of platforms.

It's built with React, Typescript, Gatsby and GraphQL and hosted on AWS with S3.

The key features of this project is that it lets you view games that are crossplayable and _also_ free for PSNow or Xbox Gamepass users. This data is not available in any other central location, and is collated by scraping the Sony and Xbox sites.

## Features

- Combines data from several sources (Wikipedia, Sony, Microsoft, IGDB)
- Fully static site built with GatsbyJS
- Infrastructure managed with Terraform
- Deployed to AWS (using S3, Cloudfront, ACM and Route 53)
- CI/CD with GitHub Actions:
  - Runs E2E tests with Cypress
  - Dependabot automatic pull request opening / merging after CI passing
  - Deploys with Terraform on new pushes to the `main` branch

## Open Source

This site is released under the MIT licence and can be found [here on Github](https://github.com/Weetbix/crossplayable.games).
