const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/coachcenter"
);

const gymnastSeed = [
  {
    name: "Sophie Kung",
  },
  {
    name: "Mari Puckett",
  },
  {
    name: "Hanna Terrell",
  },
  {
    name: "Campbell Heiman",
  },
  {
    name: "Emily Caplan",
  },
  {
    name: "Simone Seed",
  },
  
  
];

db.Gymnast
  .remove({})
  .then(() => db.Gymnast.collection.insertMany(gymnastSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
