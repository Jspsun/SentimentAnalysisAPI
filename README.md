#Sentiment Engine API

A service derived from an old sentiment analysis project. Its pretty cool and you can check it out [here](http://internetthoughts.net/) or the source behind it [here](https://github.com/Jspsun/WhatDoesTheInternetThink).

To see the API in action follow the documentation on the README or just check it out [here](http://www.SentimentAnalysisEngine.com/Wow amazing.)

##How it works (roughly)
- User GETs to the server
- The engine cross references words to corresponding sentiment values from a modified Corpus
  - The corpus was generated using Microsoft Azure. It makes context a bit harder but it let me pre-process everything for much faster lookup
- The server returns a JSON containing sentiment value for the amount of "positiveness" and "negativeness" within the text in terms of a percentage (represented in decimal format)

##Documentation
###Usage
I wanted to make the api as simple and easy to use as possible. Super barebones but powerful, you can very easily add sentiment analysis to your project

1. Simply use the following [url](http://www.SentimentAnalysisEngine.com/)
  ```
  www.SentimentAnalysisEngine.com/
  ```

2. Add the text you want to be analyzed after the last slash. [link](http://www.SentimentAnalysisEngine.com/I love this API. But Jonathan Smells terrible.)
  ```
  www.SentimentAnalysisEngine.com/I love this API. But Jonathan Smells terrible.
  ```

3. The server returns a JSON file with the positive and negative sentiment percentages.
  ```
  {"positive":0.42857142857142855,
  "negative":0.5714285714285714}
  ```

###Running it locally
Running the service locally is really easy. Here's a beginner-friendly guide!
1. Make sure you have git installed for your shell. Clone the repo by typing into your terminal:
  ```
  git clone https://github.com/Jspsun/SentimentAnalysisAPI.git
  ```
2. First make sure you have Node installed. You can check by typing into your terminal:
  ```
  node -v
  ```
3. Navigate to inside wherever the SentimentAnalysisAPI repo is stored in terminal.
4. Install all the dependancies in terminal using:
  ```
  npm install
  ```
5. Run the node server using:
  ```
  node app.js
  ```
6. In your browser go to this [link](http://localhost:1337/) (or to whichever port/address you are using):
  ```
  http://localhost:1337/
  ```
7. Add the text you want to be analyzed after the last slash.
  ```
  http://localhost:1337/Jonathan is such a nice guy for making this guide
  ```

##Tech used
- Node.js
  - Express
  - xmlhttprequest
- Heroku

##Contributing/Crediting
- If there are any issues, be sure to mark it in the repo and if you can fix it, don't be afraid to make a pull request
- If you like using it, don't forget to credit me (and the repo) in your project README
- I know they don't matter, but starring the project warms my heart <3
