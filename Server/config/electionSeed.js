const mongoose = require("mongoose");
const ElectionSchema = require('../models/Election');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/sureVote_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const electionSeed = [
  {
    date: Date.now(),
    level: "Federal",
    type: "Office",
    location: "Utah",
    office: "President of the United States",
    candidates: [ ]
  },
  {
    date: Date.now(),
    level: "Federal",
    type: "Office",
    location: "Utah",
    office: "United States Senator",
    candidates: [ ]
  },
  {
    date: Date.now(),
    level: "Federal",
    type: "Office",
    location: "Utah",
    office: "United States Representative",
    candidates: [ ]
  },
  {
    date: Date.now(),
    level: "State",
    type: "Office",
    location: "Utah",
    office: "Governor",
    candidates: [ ]
  },
  {
    date: Date.now(),
    level: "State",
    type: "Office",
    location: "Utah",
    office: "Utah State Senator",
    candidates: [ ]
  },
  {
    date: Date.now(),
    level: "State",
    type: "Office",
    location: "Utah",
    office: "Utah State Representative",
    candidates: [ ]
  },
  {
    date: Date.now(),
    level: "State",
    type: "Office",
    location: "Utah",
    office: "Utah Supreme Court",
    candidates: [ ]
  },
  {
    date: Date.now(),
    level: "State",
    type: "Referendum",
    location: "Utah",
    office: "Utah State Representative",
    candidates: [ ]
  },
  {
    date: Date.now(),
    level: "State",
    type: "Referendum",
    location: "Utah",
    office: "Utah State Representative",
    candidates: [ ]
  },
]

electionSeed.save();

console.log("Data Saved");

// ElectionSchema.Election.deleteMany({})
//   .then(() => ElectionSchema.Election.collection.insertMany(electionSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });