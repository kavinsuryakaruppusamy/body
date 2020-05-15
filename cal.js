const express = require('express')
const app = express();
var bodyParser = require('body-parser')




app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())


  
// app.post('/addtion', (req, res) => {
//     console.log("values",req.body)
//     var a = req.body.value1 + req.body.value2    
//     console.log("result",a)
//     res.json(a)
// });

// app.post('/subraction', (req, res) => {
//     console.log("values",req.body)
//     var b = req.body.value2 - req.body.value1    
//     console.log("result",b)
//     res.json(b)
// });

// app.post('/multiplication', (req, res) => {
//     console.log("values",req.body)
//     var c = req.body.value1 * req.body.value2    
//     console.log("result",c)
//     res.json(c)
// });

// app.post('/division', (req, res) => {
//     console.log("values",req.body)
//     var d = req.body.value1 / req.body.value2    
//     console.log("result",d)
//     res.json(d)
// });


app.get('/addtion/:value1/:value2', function(req, res) {
var c = parseInt(req.params.value1) + parseInt(req.params.value2)
console.log("result",c)
res.json(c)
});

app.get('/subraction/:value1/:value2', function(req, res) {
  var c = parseInt(req.params.value1) - parseInt(req.params.value2)
  console.log("result",c)
  res.json(c)
  });
  
  app.get('/multiplication/:value1/:value2', function(req, res) {
    var c = parseInt(req.params.value1) * parseInt(req.params.value2)
    console.log("result",c)
    res.json(c)
    });

    app.get('/division/:value1/:value2', function(req, res) {
      var c = parseInt(req.params.value1) / parseInt(req.params.value2)
      console.log("result",c)
      res.json(c)
      });

app.listen(1001, () => {
  console.log('listening on port 1001!')
});