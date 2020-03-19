---
layout: project
title: Pool Deck Simulator
caption: Simulator
summary: A simulator. Including physics, emotions, AI, chats and affordances. Using C++, Ogre and Lua
video_url: http://www.youtube.com/embed/VcyN5_KDVWc?rel=0
order: 2
foldername: pooldeck
category: University
date: Semester 2, 2010
languages: C++, Lua &amp; Ogre
libraries: Boost, Lua, Luabind, TinyXML, CEGUI
team: Me, David Clark, Terje Lowe
---

### Summary

The goal of this project was to create a complex simulator with many different aspects including in house AI and physics. We were required to model a virtual environment from a real location on the Murdoch University campus and to write the physics engine ourselves. We chose to model the pool deck area at the student village.

Our project allows you to walk around in a 3D virtual environment which replicates the student village. You are able to talk to various different AI controlled agents, what you say to them will affect how they behave and talk. You may pickup and throw objects at AI agents to knock them to the ground, at which point other agents will run to the falled agent to help them back onto their feet.

### Features

- Realistic virtual world (Modelling the pool deck area at Murdoch Student Village)
- Our own rigid body physics engine (Thysics)
  - Collision detection
  - Sphere-plane, Sphere-sphere, Sphere-OBB etc
  - Coarse collision checks
  - Collision callbacks for material pair types
  - Bounding box and sphere generation from meshes
- AI Agents
  - Completely coded and controlled using Lua scripts
  - 3 different kinds of AI, each acts differently
  - Entity manager and inter-entity messaging system
  - Stack based Finite State Machines
  - A\* path finding allows agents to wander around the world
  - You can push agents down and other agents will run to help them
  - Agents have emotions
    - Your actions affect their emotions (chat choices)
    - Agent behavior depends on their emotional state
- Affordances
  - Actions are modelled using the concept of affordances
  - Agents use affordances to determine who they can help
  - The user uses affordances to determine what they can pick up
- Flexible chat dialog box system
  - Fully Lua based chat dialogs
  - 'Sequentially' executing chat scripts
  - Chat scripts allow complex logic directly inside them
- Lua console
