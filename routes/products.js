  var express = require('express');
  var router = express.Router();

  router.get('/products', function(req, res) {
    var data = req.app.get('appData');
    var pagePhotos = [];
    var pageProducts = data.products;
    var info = '';

    data.products.forEach(function(item) {
      console.log("item");
      pagePhotos = pagePhotos.concat(item.images);
      res.send(data.products);
      res.statusCode = 300;
      res.setHeader('Content-Type', 'text/plain');

    });
  });

  router.get('/products/:productid', function(req, res) {
    var data = req.app.get('appData');
    console.log("get id:", req.params.productid);


    var pagePhotos = [];
    var pageProducts = [];
    var info = ``

    data.products.forEach(function(item) {
      if (item.id == req.params.productid) {
        // if (item.id == "fb000003") {
        console.log("item:",item.full_name);
        pageProducts.push(item);
        pagePhotos = pageProducts.concat(item.images);
        res.send(pageProducts);

      }

    });
  });




  module.exports = router;
