var mysql=require('mysql');
var db=mysql.createConnection({
    host     : 'localhost',
    user     : 'nodejs',
    password : '00000000',
    database : 'opentutorials'
  });
  db.connect();
  module.exports=db;