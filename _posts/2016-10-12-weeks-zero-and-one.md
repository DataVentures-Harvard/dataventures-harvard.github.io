---
layout: post
title: "Workshops Weeks 0 + 1"
description: "A summary of Data Ventures Workshops Week 0 and 1"
date: 2016-10-12
tags: [workshop, homework]
comments: true
share: true
---

### quick aside

If you don't know what the Data Ventures workshops are, you can learn a little more [here](/about/). Basically, the workshops are the program that our trainees go through to become full fledged Data Ventures members, or Fellows.

### Week 0

In Week 0, we covered the basics of Python, along with the most useful Python tools, like Pandas. You can find the relevant material [here](https://github.com/dataventures/workshops/tree/master/0). Start with [Intro](https://github.com/dataventures/workshops/blob/master/0/Intro.ipynb), though you'll want to download all of the Jupyter notebooks so that you can run the code samples.

##### snafu
Unfortunately, due to a miscommunication, some of the code (the introductory material) is written using Python 3, and thelater material (Pandas) is written using Python 2. Please use Python 2 for now (there shouldn't be any major differences for the work you'll be doing right now, though occasionally we'll come across unicode gotchas).

### Week 1

In Week 1, we covered the beginnings of the basics of **supervised learning**, including the train-test-validation split, how to measure error, and covered simple linear models. You can access the material [here](https://github.com/dataventures/workshops/tree/master/1)

##### homework

For Week 1, there's a simple homework assignment: given the set of (x, y) pairs in [this](https://github.com/dataventures/workshops/blob/master/1/dataset_4_full.txt) file, create a Jupyter notebook that:
1. splits the file into train and validation sets
2. builds a linear model of the data, minimizing validation error

Note that while the model itself should be linear, the **features** that the model uses doesn't necessarily have to be linear. Assume that the assumptions of linear least-squares models are valid for this dataset. 
