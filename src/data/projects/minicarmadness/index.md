---
layout: project
title: Minicar Madness!
caption: Arcade Racing
summary: Minicar Madness is an old-school arcade styled racer inspired by titles such as Mario Kart and Diddy Kong Racing.
video_url: http://www.youtube.com/embed/EBrldbPH7so?rel=0
order: 6
foldername: minicarmadness
category: University
date: 1-6-2009
dateVisual: Semester 2, 2009
languages: OpenGL, Boost, Glut, OpenAL, GLee
libraries: XNA
team: Me, David Clark, Troy Cumpsty (sound)
---

![](award.png)_This project was awarded The WA Industry Selected Games Design and Programming Prize_

## Summary

A fun, old-school styled racing game where the aim is to power slide! This project was completed for ICT207 (Games Design and Programming) in Semester 2, 2009.

It was a 2-part assignment, part one involved maintaining extending a legacy code base which modelled a section of the the Bush Court area at Murdoch University. We extended the 3D world and modelled the Tavern section of the university, including the closest wall to the Tavern. The second section of the assigment involved creating our game, and the transition between the two worlds.

One of the goals of the assignment was teachinng students the extension, encapsulation and management of old, poor quality code. For example the original world was built in 1 main.c file which contained over 5000 lines of code and hundreds of #defines.

## Features

- Lap timer, and a ghost car showing your fastest lap
- Multi-threaded particle system
- Hardware-accelerated bitmap font rendering system which loads AngelCode [Bitmap Font Generator](http://www.angelcode.com/products/bmfont/) files
- Game states organised using a state pattern
- Hand rolled sphere and wall collision detection
- 3D terrain meshes, loaded from heightmap files
- Maps are generated from a single loop of points, stored in a config file
- Power sliding leaves tyre marks on the terrain
- Invisible checkpoints and wrong-way detection
