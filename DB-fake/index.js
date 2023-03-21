var pool = require("./connection")
var express = require('express');
const app = express();
const ejs = require('ejs');

var bodyparser = require("body-parser");

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended:true}));

app.set("view engine","ejs");
// app.set('view engine', 'ejs');

// app.use(express.static(__dirname + '/students.ejs'));


// app.get("/", function(req, res){
//     res.sendFile(__dirname +"/register.html");

// });

    // to connect database or else to display not connected database...

pool.connect((err, client, done) => {
  if (err) {
    console.error('', err);
    // Redirect to another page
    app.get('/', (req, res) => {
      res.redirect('/error');
      
    });
  } else {
    console.log('Connected to database');
    // Continue with your application logic
    app.get('/', (req, res) => {
    //   res.render(__dirname +"/search-students.ejs");
    // res.send('database error. Please try again later.....!');
    return res.redirect('/home');
    });
  }
});

app.get('/error', (req, res) => {
//   res.send('database error. Please try again later.....!');
//   res.render(__dirname +"/error.ejs");
  // return res.redirect('/error');
  res.render(__dirname +"/error.ejs");
});


app.get('/home', (req, res) => {
  res.render(__dirname+"/index.ejs");
  // res.send('/index.ejs')
})

// ---------------------------------------------------------------------------------------------------

// app.get("/",function(req, res){
//   pool.connect(function(error){
//       if(error) console.log(error);

//       var postgres = 'SELECT datname FROM pg_database WHERE datistemplate'; 

//       pool.query(postgres,function(error, result){
//       if(error) console.log(error); 
//       // console.log(result);
//       // res.send('/index.ejs'),{students:result.rows});
    

//       });
//   });
// });


// ---------------------------------------------------------------------------------------------------

app.listen(7000, function(){
    console.log("Sever Is Connected....at port no - 7000!")
});