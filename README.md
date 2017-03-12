#Sentiment Engine API

A service derived from an old sentiment analysis project. Its pretty cool and you can check it out [here](http://internetthoughts.net/) or the source behind it [here](https://github.com/Jspsun/WhatDoesTheInternetThink).


##How it works (roughly)
- User GETs to the server
- The engine cross references words to corresponding sentiment values from a modified Corpus
  - The corpus was generated using Microsoft Azure. It makes context a bit harder but it let me pre-process everything for much faster lookup
- The server returns a JSON containing sentiment value for the amount of "positiveness" and "negativeness" within the text in terms of a percentage (represented in decimal format)

##Tech used
- Node.js
- Heroku

##Documentation
I wanted to make the api as simple and easy to use as possible. Super barebones but powerful, you can very easily add sentiment analysis to your project

1. Simply use the following [url](sentimentanalysisapi.herokuapp.com/)
  ```
  sentimentanalysisapi.herokuapp.com/
  ```

2. Add the text you want to be analyzed after the last slash
  ```
  sentimentanalysisapi.herokuapp.com/I love this API. But Jonathan Smells terrible.
  ```

3. The server returns a JSON file with the positive and negative sentiment percentages
  ```
  {"positive":0.42857142857142855,
  "negative":0.5714285714285714}
  ```
