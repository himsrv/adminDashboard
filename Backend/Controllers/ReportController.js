const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
// import and initiate the posts model to query the database
const Area = mongoose.model("Area");
const Line = mongoose.model("Line");
const Other = mongoose.model("Other");

// function for base route on "/"
exports.baseRoute = async (req, res) => {
  res.send("Server Running");
};

// function to get data for area chart
exports.getArea = async (req, res) => {
  const data = await Area.find();
  res.json(data);
};

exports.getLine = async (req, res) => {
  const data = await Line.find();
  res.json(data);
};

exports.getOther = async (req, res) => {
  const data = await Other.find();
  res.json(data);
};

