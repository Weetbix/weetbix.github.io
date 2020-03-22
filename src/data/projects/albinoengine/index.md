---
layout: project
title: Albino Engine &amp Cantankerous
caption: Game Engine
summary: The Albino Engine is a C++ and Lua game engine. Cantankerous is a hover tank game used to showcase the engine.
video_url: http://www.youtube.com/embed/n8ZQxAYQiJk?rel=0
order: 2
foldername: albinoengine
category: University
date: 1-1-2010
dateVisual: Semester 1, 2010
languages: C++ and Lua
libraries: OpenGL, Boost, Lua, Luabind, Assimp, Bullet, SFML (Window handling), CML
team: Me, David Clark
---

## Summary

The Albino Engine is a high level C++ and Lua game engine which renders hardware accelerated 3D graphics. The engine has many features but one of the strongest is being completely exposed to Lua. This allows users to create entire projects in Lua with Albino Engine, without touching any C++ code.

The goal of this project was to create a game engine and an accompanying game which shows off the engine. This project was created for ICT311 (Advanced Games Design and Programming) in semester 1, 2010.

The result is the Albino Engine and a team-based hover tank game called Cantankerous

## Engine Features

- Engine completely exposed to Lua (lets you create games entirely through Lua scripts)
- Abstract rendering interface allows multiple graphics APIs to be implemented (OpenGL is the only provided implementation)
- Material System for multi-texturing and pixel shaders
- Scene graph
  - Component based (similar to Unity)
  - Each scene node can have various components including: Terrain, Mesh, Camera, Light, RigidBody and so on
- Terrain
  - On the fly LOD generation using a combination of Geometry Mipmapping and Tesselation
  - Sharder textures terrain based on slope and height
  - Ray collision detection
  - Terrain generation using the [Fault Formation algorithm](http://www.lighthouse3d.com/opengl/terrain/index.php?fault)
- Physics
  - [Bullet](http://bulletphysics.org/) physics integration
  - Includes rigid bodies and premade Bullet vehicles
- Entities and AI systems
  - Entity system which allows users to easily extend a base entity class using either C++ or Lua
  - State machine system allows users to easily extend and create new states for controlling entities using Lua
  - Inter-agent messaging system
- MD2 Key frame animation support
- Math library including 2D and 3D vectors, matrices and quaternions
- Extensive file format support (.3ds, .obj, .mdl, .x and more)

## Cantankerous

Cantankerous is a showcase game created to display the features and power of the Albino Engine. It is a team-based hover tank game, black tanks versus red tanks.

It was written entirely in Lua and is roughly 1100 lines of code.

## Features

- Physics
- AI tanks
  - Over 20 AI tanks battling it out
  - State based behaviour including follow, attack, flee (etc) states
  - Search for ammo and health when low on either
- Limited ammo and health
- Health and ammo pickups
