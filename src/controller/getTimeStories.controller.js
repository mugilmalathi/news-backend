const express = require("express");
const router = express.Router();
const News = require("../model/getTimeStories.model");

//Crud controller

router.post("/getTimeStories", async(req, res)=>{ //Post Method to add new data to DB

    try{
        const getTimeStories = await News.create(req.body);
        return res.status(201).send(getTimeStories);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/getTimeStories", async(req, res)=>{ //Get all datas from DB

    try{
        const getTimeStories = await News.find().lean().exec();
        return res.status(201).send(getTimeStories);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/getTimeStories/:id", async (req, res)=>{ //Get single data using id from DB
    
    try{
        const getTimeStories = await News
        .find(req.params.id)
        .lean()
        .exec();
        return res.status(201).send(getTimeStories)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/getTimeStories/:id", async (req, res)=>{ //Update existing data from DB using id
    
    try{
        const getTimeStories = await News.findByIdAndUpdate(
            req.params.id,
            req.body,{
               new:true
            });
        return res.send(getTimeStories)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/getTimeStories/:id", async (req, res)=>{  //delete particular data from Db using id
    
    try{
        const getTimeStories = await News.findByIdAndDelete(
            req.params.id
            );
        return res.send(getTimeStories)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;