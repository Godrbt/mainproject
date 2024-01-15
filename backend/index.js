const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000
const cors = require("cors");
const mysql = require("mysql2");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.listen(PORT, () => {
  console.log("Server is Running ");
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "",
  port: 3308,
});

// Check Database Connection

db.connect((err) => {
  if(err){
    console.error(err);
  }
})

// const sideMenu =document.querySelector("aside");
// const menuBtn = document.querySelector("#menu-btn");
// const closeBtn = document.querySelector("#close-btn"); 

// menuBtn.addEventListener('click', () => {
//  sideMenu.style.display = 'block';
// })

// closeBtn.addEventListener('click', () => {
//  sideMenu.style.display = 'none';
// })



app.get("/Test", (req, res) => {
  res.send({
    message: "Hai",
  });
});

app.post("/addDistrict", (req, res) => {
  const { districtName } = req.body
  console.log(districtName);
  res.send({
    message: districtName,
  });
});
app.post("/addcat", (req, res) => {
  const { catName } = req.body
  console.log(catName);
  res.send({
    message: catName,
  });
});



app.get("/calc", (req, res) => {
  num1 = req.body.num1
  num2 = req.body.num2
  result = num1 + num2
  res.send({
    message: "Hai",
    data: result
  });
});
app.get("/largest", (req, res) => {
  num1 = req.body.num1
  num2 = req.body.num2
  num3 = req.body.num3
  if (num1 > num2 && num1 > num3) {
    result = num1
  }
  
    else if (num2 > num1 && num2 > num3) {
      result = num2
    }
    else {
      result = num3

    }
    res.send({

      data: result
    });

  });
  app.get("/prime", (req, res) => {
    num1 = req.body.num1
    for(i=2;i<num1;i++){
    if(num1%i==0)
    {
    res.send({
      data:" is a prime"
    });}
    else
    {
      res.send({
        data:" not a prime"
      });}
    }
   
  });