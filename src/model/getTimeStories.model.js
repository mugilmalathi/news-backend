const mongoose = require("mongoose");

const getTimeStoriesSchema = new mongoose.Schema({  //added the collection of schemas
    id:{type: Number},
    title:{type: String, required:true},
    link:{type: String, required:true},
    date:{type: String, required:true}
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("getTimeStories", getTimeStoriesSchema);