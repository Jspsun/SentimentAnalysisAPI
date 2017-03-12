module.exports = (req, res) => {
  // const models = data.models;
  //
  // res.status(200).json({ models });

  var inputText=req.params.inputText;

  var analysisResult={
    answer : inputText
  };
  res.status(200).json( analysisResult );
};
