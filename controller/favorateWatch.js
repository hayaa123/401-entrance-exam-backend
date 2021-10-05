"use strict"

const { watchModel } = require("../module/watchSchema");

const favorateWatch =(req,res)=>{
    let allFav = watchModel.find({}).then(data=>{
        res.send(data)
    })
}

module.exports={favorateWatch}