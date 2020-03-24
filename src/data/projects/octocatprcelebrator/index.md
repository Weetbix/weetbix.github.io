---
title: Octocat PR Celebrator
summary: An octocat which dances when you merge a PR!
category: Other
date: 2018-9-19
languages: C, Arduino (ESP8266), Github APIs
---

## Summary

Whenever you merge a PR, Octocat will do a randomly generated dance as a reward for your hard work.

This is an IoT project built using an ESP8266 and the github API. It parses your github event feed every 3 or so seconds and if a PR is merged, generates some dance patterns for a connected servo. The servo is connected to the octocat skeleton which is made out of left over cardboard packaging found around my flat.

## Features

- Dances are randomly generated
- Sends an ETag header so you will not encouter rate-limit issues with the Github API
- Runs over wifi
- Uses WiFIiManager to connect to wifi, and provide a github token in a safe manner

## Open Source

This little octocat is released under the MIT licence and can be found [here on Github](https://github.com/Weetbix/arduino-pr-merged-celebration).
