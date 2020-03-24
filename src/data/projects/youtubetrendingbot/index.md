---
title: Youtube Trending Slackbot
summary: A slackbot which uses Markov chains to generate messages from comments on youtube trending videos
category: Other
date: 2019-2-3
languages: Typescript, Node, Youtube APIs, Slack APIs
---

## Summary

This project is an experiment in using Markov chains to generate natural language for a slack bot, based on comments from youtube trending videos.

This project is setup as multiple smaller node micro services:

- Markov library
  - A standalone library containing all of the Markov chain logic
- Youtube API code
- Brain
  - This holds the markov instance, and updates it reguarly with new comments from youtube trending. It exposes a RESTful API which allows you to generate comments and so on. This allows you to hook up multiple consumers to the service.
- Slackbot
  - Contains all of the chatbot related code, and communicates to the brain over http when it requires message to be generated.
- Web interface
  - A simple web interface to allow you to see statistics about the bot

## Features

- Fetches new comments from youtube every night
- Web interface for viewing stats
- Easily deployable as a whole using docker-compose
- Individually deployable services with docker

## What is a Markov chain?

A Markov chain is a model describing a sequence of events, and the chance of moving to another state from a previous state. We can use this to generate text by taking a bunch of source text and creating a Markov chain from it - which shows which words follow which other words. We an then generate a string of text by choosing a starting word and generating a chain using the model.

For a great visual display of Markov chains, see [this page by Victor Powell](https://setosa.io/ev/markov-chains/)

## Open Source

Youtube Trending Slackbot is released under the MIT licence and can be found [here on Github](https://github.com/Weetbix/youtube-trending-bot).
