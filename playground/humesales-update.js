
  const MongoClient = require('mongodb').MongoClient;

  const url = 'mongodb://localhost:27017';
  const dbName = 'HumeSales';

    MongoClient.connect(url,function(err,client) {
      if (err){
        return console.log("Unable to connet to mongodb server:" + err);
      }else{
        const db = client.db(dbName);
        console.log("Connetted to mongodb server");

        updateUser(db,function(){});
       updateProduct(db,function(){});


       client.close();

      }
    });


    updateUser = function(db,callback){
      db.collection('Users').findOneAndUpdate({
        employeeId:'000047'},{
            $set:{
                name:'Mike'
            }
        }).then((result) => {
               console.log(result);
      },(err) => {
        console.log("Unable update",err);
      });
  }



  updateProduct = function(db,callback){
    db.collection('Products').findOneAndUpdate({
      category:'Plaster'},{
          $set:{
              category:'Metal'
          }
      }).then((result) => {
             console.log(result);
    },(err) => {
      console.log("Unable update",err);
    });
}
