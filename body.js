const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
app.use(bodyParser.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kavin'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Database connection is done!');
});
 
//show
app.get('/body',(req, res) => {
    let sql = "SELECT * FROM user";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
      console.log("data has been Fetched ")
    });
  });

app.post('/body/add',(req, res) => {
  let data = {name: req.body.name, dep: req.body.dep, email: req.body.email, number: req.body.number, year: req.body.year};
  let sql = "INSERT INTO user SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    console.log("data has been added")
  });
});
 

app.put('/body/:id',(req, res) => {
  let sql = "UPDATE user SET name='"+req.body.name+"', dep='"+req.body.dep+"', email='"+req.body.email+"', number='"+req.body.number+"', year='"+req.body.year+"' WHERE id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    console.log("data has been updated")
  });
});
 
//Delete 
app.delete('/body/:id',(req, res) => {
  let sql = "DELETE FROM user WHERE id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
      console.log("data has been deleted")
  });
});
 
//Server listening
app.listen(3000, () => {
    console.log('listening on port 3000')
  });