var express = require('express'); 

var app=express();
var port =3000;
var userRouter = express.Router();
var mysql   = require("mysql");
var md5 = require('MD5');
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


  userRouter.route('/users')
      .get(function(req,res){
          var responsejson={hello:"this is my user"};
          res.json(responsejson);
      }); 


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
app.use(express.static("css"))
app.use(express.static("images"))


app.get('/', function(req, res) { 
    res.render('pages/index.ejs');
});

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

app.listen(port,function(){
    console.log('running on port'+port);
});