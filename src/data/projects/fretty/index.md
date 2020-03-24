---
layout: project
title: Fretty
caption: Image Processing
summary: An open source ImageJ plugin written in Java for 2D and 3D deconvolution of FRET images. The result of my iVEC internship
foldername: fretty
category: Other
date: 2010-12-1
dateVisual: December 2010 - February 2011
languages: Java
libraries: ImageJ
team: Individual
---

## Summary

I was selected to complete a paid 10 week internship/scholarship for [iVEC](http://www.ivec.org/), working with **Associate Professor Ben Corry** at UWA. My Project involved working with Ben to develop a new method for **optical microscopy** using **image analysis and Java**. The result of this internship is Fretty, my **open source** ImageJ plugin written in Java.

Fretty performs 2D and 3D deconvolution of FRET Images for research purposes.

2D and 3D deconvolution allows you to determine the distance between fluorescent molecules separated by less than 10 nm. This is done by using a technique called Fluorescent Resonance Energy Transfer (FRET), and then performing 2D and 3D spectral deconvolution on the samples gathered.

## What Fretty Does

The problem with the above method is that it results in the collection of a large number of microscope images which have to be collectively analysed. The aim of Fretty is to ease this process. Fretty is a plugin I developed for [ImageJ](http://rsbweb.nih.gov/ij/) (A popular microscopy tool) which provides the user with a way to very easily perform this analysis.

As part of the internship I also presented my project at a research forum, you can view the presentation on Fretty's Github page.

## Publications

The project contributed to a published article in JBO (Journal of Biomedical Optics) which can be found [here](http://biomedicaloptics.spiedigitallibrary.org/article.aspx?articleid=1654306)

> A plugin for ImageJ called “Fretty” has been developed to expediate the analysis of microscope images using the methods described here. This contains two methods, one for each of the Em and ExEm spectral unmixing approaches, the graphical interfaces of which are shown in Fig. 10. The final FRET analysis can either be applied on a pixel-by-pixel basis to create a FRET image, in which each pixel contains the FRET efficiency at that location, or to calculate the FRET efficiency within regions of interest. The plugin is available from the authors or through the ImageJ plugin repository.

## Open Source

Fretty is released under the LGPL licence and can be found [here on Github](https://github.com/Weetbix/Fretty).
