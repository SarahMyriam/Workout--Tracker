const router = require("express").Router();
const Workout = require("../models/workout.js");


router.post("/api/workouts",(req,res) => {
    Workout.create(req.body, function(err, results){
        if(err){
            console.log(err);
            return;
        }
        res.json(results);
    });

});
router.put("/api/workouts/:id", (req,res) =>{
    Workout.updateOne({_id:req.params.id},req.body, function(err, results){
        if(err){
            console.log(err);
            return;
        }
        res.json(results);
    });

})
router.get("/api/workouts", (req,res) =>{
    Workout.find({}, function(err,results) {
        if (err) {
            console.log(err);
            return;
        }

        res.json(results);
    });
    

}); 
router.get("/api/workouts/:id", (req,res) =>{
    Workout.findOne({_id:req.params.id}, function(err, results){
        if(err){
            console.log(err);
            return;
        }
        res.json(results);
    });

});
router.delete("/api/workouts/:id", (req,res) =>{
    Workout.delete({_id:req.params.id}, function(err, results){
        if(err){
            console.log(err);
            return;
        }
        res.json(results);
    });

});

module.exports = router;