var express = require('express');
var router = express.Router();

router.get('/category/:category', function(req, res) {
  var data = req.app.get('appData');
  console.log("get category:", req.params.category);


  var pagePhotos = [];
  var pageProducts = [];

  data.products.forEach(function(item) {
    if (item.category == req.params.category) {
      // if (item.id == "fb000003") {
      // console.log("item2:",item.full_name);
      pageProducts.push(item);
      pagePhotos = pageProducts.concat(item.images);
      res.send(pageProducts);
    }
  });
});

// router.get('/category',function(req.res){
//
// var data =
//
// });
