
const SAEngine = require('../../Engine/Engine');
const Engine=new SAEngine();

module.exports = (req, res) => {
  var inputText=req.params.inputText;
  var results=Engine.analyze(inputText);

  var analysisResult={
    positive : results[0],
    negative : results[1]
  };
  res.status(200).json( analysisResult );
};
