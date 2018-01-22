
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'HumeSales';

  var user = {
    name:'Miley',
    employeeId:'000047',
    location:'SGV',
    position:'Softeare Developer',
    role:'admin',
    qrCode:'8101371454382943150739694465068',
    email:'miley.l@humeplaster.com.au',
    password:'12345'
  };

  var product = {

     full_name:'10mm recessed edge ceiling board',
     category:'Plaster',
     sub_category:'Speciality Plasterboard',
     sub_sub_category:'Celling Board',
     description:'Ceiling Board is 10mm thick plasterboard used as a ceiling lining where framing members are spaced at up to 600mm centres.',
     isPromotion:false,
     images:["http://www.humeplaster.com.au/hume/wp-content/uploads/2016/09/10CBM2-104x99.jpg","http://www.humeplaster.com.au/hume/wp-content/uploads/2016/09/10CBM2_2-104x99.jpg"],
     specfication:"Physical Properties:\nThickness: 10mm\nStandard Size: 1200mm*3000mm; 1200mm*3600mm; 1200mm*4200mm; 1200mm*4800mm; 1200mm*6000mm; 1350mm*3000mm; 1350mm*3600mm; 1350mm*4200mm; 1350mm*4800mm; 1350mm*6000mm\nFeatures & Benefits:\n"
  }

  MongoClient.connect(url,function(err,client) {
    if (err){
      return console.log("Unable to connet to mongodb server:" + err);
    }else{
      const db = client.db(dbName);
      console.log("Connetted to mongodb server");

     insertProduct(db,function(){
        // client.close();
        console.log("insertProduct sucessful");

     });

     insertOneUser(db,function(){
        // client.close();
          console.log("insert one user sucessful");
     });

     client.close();

    }
  });


  const insertProduct = function(db, callback) {
  // Get the documents collection
   const collection = db.collection('Products');
  // Insert some documents
   collection.insertOne(
     product, function(err, result) {

        console.log("InsertedOneProuct" ,result.ops[0].full_name);
       callback(result);
     });
   }


   const insertOneUser = function(db,callback){
     const collection = db.collection('Users');
     collection.insertOne(user,function(err,result){

       if (err){
         return console.log("unable to insert user", err);
       }
        console.log("InsertedOneUser" ,result.ops[0].name," at ",result.ops[0]._id.getTimestamp());
        callback(result);
     });
   }
