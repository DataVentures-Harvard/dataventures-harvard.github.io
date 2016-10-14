---
layout: post
title: "How to Install Scientific Python"
description: "the title says it all"
date: 2016-10-13
tags: []
comments: true
share: true
---

Up until now we've been using our public Jupyterhub instance. However, as we move one it'll be vital that you have access to a Python environment of your own in order to play around, write code, and submit results. Unfortunately, the process of installing Python can be a huge pain, unless you use the [Anaconda](https://www.continuum.io/downloads) Python distribution. 


#### Instructions
So here are the steps:

1. Click [here](https://www.continuum.io/downloads) to download and install Anaconda.
2. Run the following code in your terminal:

```bash
conda update conda
conda update ipython
```
3. Run `ipython notebook`
4. If necessary, go to the URL `http://localhost:8888/`
