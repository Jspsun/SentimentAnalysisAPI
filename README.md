#SentimentEngineAPI

A service derived from an old sentiment analysis project. Its pretty cool and you can check it out [here]("http://internetthoughts.net/") or the source behind it [here]("https://github.com/Jspsun/WhatDoesTheInternetThink").


##How it works (roughly)
- User posts to the server
- The engine cross references words to corresponding sentiment values from a modified Corpus
  - The corpus was generated using Microsoft Azure. It makes context a bit harder but it let me pre-process everything for much faster lookup
- The server returns a sentiment value for the amount of "positiveness" and "negativeness"

##Documentation
Stay tuned cause I'm working on it :/
