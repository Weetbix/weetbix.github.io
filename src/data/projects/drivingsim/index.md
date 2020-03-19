---
layout: project
title: Driving Sim
caption: Murdoch Driving Simulator
summary: An on-going student project at Murdoch University
video_url: http://www.youtube.com/embed/Ihrn9OICJlE
order: 4
foldername: drivingsim
category: University
date: Semester 1, 2011
languages: C++
libraries: Ogre, Raknet, Boost, MySQL
team: Me, David Clark, Aidan Harney, Phoebe Downes
---

### Murdoch Driving Simulator

The Murdoch driving simulator is an on-going student project contributed to by students undertaking ICT313. ICT313 is the capstone unit of the information technology degree at Murdoch. The unit is aimed at honing project management and team work skills by pairing student teams with clients, and using agile project management techniques to deliver software which meets the clients requirements. The project also gives students experience in improving and maintaining large existing codebases.

The Driving Simulator project was started in 2002, by the Department of Planning and Infrastructure. Over the years many student teams have contributed, and the project has been built with many different technologies. The purpose of the project is to provide a software solution which can be used to replace the current [Hazard Perception Test](http://mylicence.sa.gov.au/hazard-perception-test) for driving license candidates.

### Features

The simulator is build with C++ and Ogre and includes many features:

- Allows operators to drive freely through the streets of Murdoch
- Fully networked, allowing multiple drivers to drive in the same environment together.
- Integration with a (very retro) virtual reality headset
- Fully working traffic light system integrated with AI, and allows operator incidents such as running red lights to be recorded
- Assess or review drivers:
  - Build scenarios with obstacles for operators to respond to
  - View replays of sessions
  - Run sessions as users, and track users errors / sessions separately
  - Driving incidents are reported (speeding, going through red lights, collisions)
  - Session data logged in MySQL database
  - Web front-end for viewing session details
- Admin control panel
  - Can be used in real time during sessions to manipulate the current driving environment (add obstacles etc)
  - Change environment details such as time of day, rain, fog, clouds
  - Visually add waypoints for AI cars
  - Setup zones (school zones, speed limits and so on)
- Realtime mirrors
- Night time mode, using deferred rendering for fast streetlights.
