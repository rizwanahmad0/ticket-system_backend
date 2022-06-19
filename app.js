const cors = require('cors');
require("./config/db")
const userRoute =require('./routes/user.routes')
const express = require('express');
const app = express();
//app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
//app.use(xss());
//app.use(mongoSanitize());

// gzip compression
//app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());
const port = 4000;
app.use("/",userRoute)
app.listen(port,(err)=>{
   if(!err){
    console.log(`Server is up at : ${port}`);
   }
})