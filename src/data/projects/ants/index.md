---
layout: project
title: Ants
caption: Ant Simulator
summary: A programmable ant simulator, written in C++ and Lua using SFML
video_url: https://www.youtube.com/embed/YTujNFTO1zI?rel=0
order: 5
foldername: ants
category: University
date: 1-6-2009
dateVisual: Semester 2, 2009
languages: C++ and Lua
libraries: SFML, Boost, Luabind
team: Individual
---

### Summary

This is a programmable ant simulator. Each ant can collect food, bring food back to their nest, fight other ants for food, flee and so on.

This project was created as part of the course work for ICT219 (Intelligent Systems) in semester 2, 2009. The project requirements were very open ended, as long as the result was an AI based project.

I decided to make an ant based AI project, in the style of Sim Ant, and to compare different social strategies of ants to determine the best strategy for the particular environment the ants inhabited. My secondary goal was to create a game where players could write their own AI scripts and pit them against existing ants to see who can find the best strategy (similar to [Guntactyx](http://apocalyx.sourceforge.net/guntactyx/)).

### Programmable Ants

I decided to use [Lua](http://www.lua.org/) as an embedded scripting language for the ant AI. This allows players or users to extend the game and create their own ant AI to battle against the existing ants.

In order to create a level playing field, control of the game is not completely handed over to the Lua scripts. Players must write scripts using the provided APIs. In order to move ants, pickup food, and other actions which interact with the world, the Lua files call certain C++ functions which impose restrictions. All communication between other entities (attacking, finding closest ants, finding distance to an ant, picking up food etc) needs to be requested through an entity management system ran on the C++ side.

### Features

- AI ants controlled by Lua
- Fully user programmable and extendable
- Comes with 4 types of ants (food collectors, aggressive ants, soldiers and mixed)
- Lua used to build and setup the worlds. This allows users to easily create and run their own scenarios
- Modifiable time scale. Fast battles or slow!
- Simulations are scored. See which ants are more successful!
