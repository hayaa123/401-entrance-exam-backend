"use strict";

const { watchModel } = require("../module/watchSchema");

const addWatch = (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let toUSD = req.body.toUSD;
  let image_url = req.body.image_url;

  let newWatch = new watchModel({
    title: title,
    description: description,
    toUSD: toUSD,
    image_url: image_url,
  });
  newWatch.save()
  res.send("its working")
};

module.exports = {addWatch}