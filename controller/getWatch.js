"use strict"

const { default: axios } = require("axios")

const gettingWatch=(req,res)=>{
    axios.get("https://watches-world.herokuapp.com/watches-list/").then(data=>{
        res.json(data.data)
    })
}

module.exports = {gettingWatch}