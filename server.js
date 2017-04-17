var express = require('express'); 

var app=express();
var port =3000;
var userRouter = express.Router();
var mysql   = require("mysql");
var md5 = require('MD5');
var ejs = require("ejs");
var path = require("path")
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

   var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : "root",
  database : 'lafamille'
})

connection.connect();

app.set('view engine', 'views');
app.use('/api',userRouter); 
app.use(express.static("../landingpage/css"))
app.use(express.static("../landingpage/images"))
app.use(express.static("../landingpage/views/js"))
app.use(bodyparser.urlencoded({
    extended : true
}))
app.use(bodyparser.json())

app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) { 
    res.sendFile(path.join (__dirname + "/views/pages/index.html"));
});
console.log("dirname", __dirname)
app.get('/login', function(req, res) {  
    var post = { 
  first_name: 'satyam',
  last_name: 'singh',
  email: 'kishan0111r@gmail.com',
  password: 'kishansssu',
  active: 'y' 
    }

 //   connection.query('SELECT * from user_signup', function (error, results, fields) {
 // if (error) throw error; 

 // console.log('The solution is: ', results[0]);
//});  

 connection.query('INSERT INTO user_signup SET ?', post, function (err, result)  { 
      console.log('connection done', result)
});
    //console.log('result is ', res)
});

app.post("/signup", function(req, res) {
    console.log(req.body) 
    var user = {
     first_name: req.body.first_name,
     last_name: req.body.last_name,
     email: req.body.email,
     password: req.body.password,
     active: 'y' 
    }
    
     connection.query('INSERT INTO user_signup SET ?', user, function (err, result)  { 
      console.log('connection done', result) 
      if(result) {
          res.sendfile(path.join (__dirname + "/views/pages/welcome.html"))
      }
    });

})

app.listen(port,function(){
    console.log('running on port'+port);
});