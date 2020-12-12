const express = require("express");
//mongojs that comes from npm
const mongojs = require("mongojs");
//morgan lightweight logger that helps us log every req(request)
const logger = require("morgan");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const apiroute = require("./routes/api.js");
const PORT  = process.env.PORT || 3000;
//logging posr req middlewhare(addes payload to req.body)
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve static files from the public(matches path) => for the app to make the public directory and file that matches the path available,no need to create route if true
app.use(express.static("public"));
app.use("/", apiroute);


const databaseUrl = "Workoutsdb";
const collections = ["workouts"];

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workoutsdb", { useNewUrlParser: true });
//get ,send the index.html from the public folder
app.get("/", (req, res) => {
  res.sendFile(path.join(_dirname,"public/exercise.html"));
});

//routes
//GET Api workouts
//


// Listen on port 3000
app.listen(PORT, () => {
  console.log(`http://localhost:3000`,);
});
