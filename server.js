const express = require('express');
require('dotenv').config();
const cors = require('cors');
const{gettingWatch}= require('./controller/getWatch')
const axios = require('axios');
const PORT = process.env.PORT
const mongoose = require ("mongoose")
const app= express();
const{Seed}= require('./module/watchSchema')
app.use(cors());
const {addWatch} = require("./controller/addWatch")
const {favorateWatch}=require("./controller/favorateWatch")
const {deleteWatch} = require("./controller/deleteWatch.js")
const {updateWatch}= require("./controller/updateWatch")

app.use(express.json());
mongoose.connect(`${process.env.ATLAS}`)


app.get("/watch",gettingWatch)
app.get ("/seed",Seed)
app.post("/addWatch",addWatch)
app.get("/favWatch",favorateWatch)
app.delete('/deleteById/:id', deleteWatch)
app.put('/updateWatch/:id',updateWatch)
app.listen(PORT ,()=>{
    console.log(`listining to port ${PORT}`)
})