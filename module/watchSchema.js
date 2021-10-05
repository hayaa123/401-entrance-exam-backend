"use strict";

const mongoose = require("mongoose");

let watchShema = new mongoose.Schema({
  title: String,
  description: String,
  toUSD: Number,
  image_url: String,
});

let watchModel = mongoose.model("watch", watchShema);

const Seed = async(req,res) => {
  let newWatch =await new watchModel({
    title: "qw",
    description: "fdf",
    toUSD: "123",
    image_url: "ds",
  });
  newWatch.save()
  res.send(newWatch)
};

module.exports= {watchModel,Seed}