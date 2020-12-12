const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    // CODE HERE

    name : String, // String is shorthand for {type: String}
    author: String,
    body: String,

    type: String,

    weights: Number,

    sets: Number,

    reps: Number,

    duration:Number
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;