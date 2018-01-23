
  const MongoClient = require('mongodb').MongoClient;

  const url = 'mongodb://localhost:27017';
  const dbName = 'HumeSales';



    MongoClient.connect(url,function(err,client) {
      if (err){
        return console.log("Unable to connet to mongodb server:" + err);
      }else{
        const db = client.db(dbName);
        console.log("Connetted to mongodb server");

        findPromotion(db,function(){});

        findProductbyCategory(db,function(){});


        // findProductByKeyword(db,function(){});

        findUser(db,function(){});

        

       client.close();

      }
    });



    findPromotion = function(db,callback){
      db.collection('Products').find({
        isPromotion:true
     }).toArray().then((doc) => {

        console.log("promotion");
        console.log(doc)
      },(err) => {
        console.log("Unable to fetch this product",err);

      });
  }



findProductbyCategory = function(db,callback){
  db.collection('Products').find({category:"Plaster" }).toArray().then((doc) => {
    console.log(doc);
  },(err) => {
    console.log("Unable to fetch this product",err);
  });
}

findUser = function(db,callback){
  db.collection('Users').find({employeeId:"000047" }).toArray().then((doc) => {
    console.log(doc);
  },(err) => {
    console.log("Unable to fetch this u",err);
  });
}
