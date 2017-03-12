var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports=function Engine(){
  var words={};

  //Method to add individual elements to hashmap
  // this.loadMap = function(){

    words={};

    var file="https://raw.githubusercontent.com/Jspsun/SentimentAnalysisAPI/master/Engine/Corpus.txt";

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function (){
      if(rawFile.readyState === 4){
        if(rawFile.status === 200 || rawFile.status == 0){
          var lines = rawFile.responseText.trim().split('\n'), line;
          for(line = 0; line < lines.length; line++){
            // console.log(lines[line]);
            var tokens = lines[line].split(" ");
            words[tokens[0]]=tokens[1];
          }
        }
      }
    }
    rawFile.send(null);

    // console.log(words);


  //returns {positive, negative}
  this.analyze=function(givenText){
    givenText = givenText.toLowerCase();
    var word = givenText.split(' ');
    var negative=0;
    var positive=0;
    var total=0;
    for (var i=0;i< word.length;i++){
      //check if contained
      if (word[i] in words){
        var temp=parseInt(words[word[i]]);
        total+=Math.abs(temp);
        if (temp>0){
          positive+=temp;
        }
        else{
          negative-=temp;
        }
      }
    }
    if(total==0){
      return [-1,-1];
    }
    else{
      return [positive*1.0/total,negative*1.0/total];
    }
  }

  //return the top n most used words
  // this.getTopWords=function(text,numberOfWords){
  //   //count each occurance
  //   text=text.toLowerCase();
  //   var word = text.split(' ');
  //
  //   //count occurances of each word
  //   var occurances ={};
  //   for (var i=0;i<word.length;i++){
  //     if (word[i] in occurances){
  //       occurances[word[i]] ++;
  //     }
  //     else{
  //       occurances [word[i]]=1;
  //     }
  //   }
  //   //sort
  //   var keySorted = Object.keys(occurances).sort(function(a,b){return occurances[b]-occurances[a]});
  //   //returns a list of the most used words
  //   return keySorted.slice(0,Math.min(numberOfWords, keySorted.length));
  // }
}
