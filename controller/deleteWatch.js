"use strict";

const { watchModel } = require("../module/watchSchema");

const deleteWatch =(req,res)=>{
    let id = req.params.id
    watchModel.findByIdAndDelete(id,(err,data)=>{
        if (err) {
            res.send(err)
        }
    })
    res.send("working")
}

module.exports={deleteWatch}