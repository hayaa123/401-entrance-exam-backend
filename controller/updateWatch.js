"use strict";

const { watchModel } = require("../module/watchSchema");

const updateWatch = (req, res) => {
  let id = req.params.id
  let title = req.body.title;
  let description = req.body.description;
  let toUSD = req.body.toUSD;
  let image_url = req.body.image_url;
  watchModel.find({"_id":id}).then(data=>{
      data[0].title=title
      data[0].description=description
      data[0].toUSD=toUSD
      data[0].image_url=image_url
      data[0].save()
  })
//  
  res.send("its working")
};

module.exports = {updateWatch}