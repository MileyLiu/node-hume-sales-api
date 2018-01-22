
  const MongoClient = require('mongodb').MongoClient;

  const url = 'mongodb://localhost:27017';
  const dbName = 'HumeSales';

    MongoClient.connect(url,function(err,client) {
      if (err){
        return console.log("Unable to connet to mongodb server:" + err);
      }else{
        const db = client.db(dbName);
        console.log("Connetted to mongodb server");

        deleteOneUser(db,function(){});
        deleteProducts(db,function(){});
        findOneAndDelete(db,function(){});

       client.close();

      }
    });


    deleteOneUser = function(db,callback){
      db.collection('Users').deleteOne({
        employeeId:'000047'}).then((result) => {

        console.log("delete 00047 User");
        console.log(result)
      },(err) => {
        console.log("Unable deleteUsers",err);
      });
  }



   deleteProducts = function(db,callback){
  db.collection('Products').deleteMany({category:"Plaster" }).then((result) => {
    console.log(doc);
  },(err) => {
    console.log("Unable to fetch this product",err);
  });
}

findOneAndDelete = function(db,callback){
  db.collection('Users').findOneAndDelete({employeeId:"000047" }).then((result) => {
    console.log(result);
  },(err) => {
    console.log("Unable to fetch this user",err);
  });
}

  // findProductByKeyword = function(db,callback){
  //       db.collection('Products').find({
  //         category:"000047"
  //      }).toArray().then((doc) => {
  //
  //         console.log(doc);
  //       },(err) => {
  //         console.log("Unable to fetch this user",err);
  //
  //       });
  //   }
