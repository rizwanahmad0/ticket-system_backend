const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/tiket-system",(err)=>{
    if(!err){
        console.log("data base connected")
    }
})