const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000
const cors = require("cors");
const multer = require("multer");
const mysql = require("mysql2");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.listen(PORT, () => {
  console.log("Server is Running ");
});




const PATH = "./public/images";
const upload = multer({
  storage: multer.diskStorage({
    destination: PATH,
    filename: function (req, file, cb) {
      let origialname = file.originalname;
      let ext = origialname.split(".").pop();
      let filename = origialname.split(".").slice(0, -1).join(".");
      cb(null, filename + "." + ext);
    },
  }),
});




const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_main",
  port: 3307,
});

// Check Database Connection

db.connect((err) => {
  if (err) {
    console.error(err);
  }
})


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
  for (i = 2; i < num1; i++) {
    if (num1 % i == 0) {
      res.send({
        data: " is a prime"
      });
    }
    else {
      res.send({
        data: " not a prime"
      });
    }
  }

});


/******************************************************************main backend started**************************************************/

// district //
app.post("/District", (req, res) => {
  const { districtName } = req.body
  let qry =
    "insert into tbl_district (district_name) values('" +
    districtName +
    "')";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.get("/district", (req, res) => {
  let qry = "select * from tbl_district";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        district: result,
      });
    }
  });
});



app.delete("/district/:id", (req, res) => {
  const Id = req.params.id
  console.log(Id);
  let qry = "delete from tbl_district where district_id = " + Id;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: 'data deleted',
      });
    }
  });
});



//district end//




//category//
app.post("/category", (req, res) => {
  const { categoryName, categoryDesc } = req.body
  console.log(categoryDesc);
  let qry =
    "insert into tbl_category (cat_name,cat_description) values('" +
    categoryName + "','" + categoryDesc + "')";

  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});


app.get("/category", (req, res) => {
  let qry = "select * from tbl_category";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        category: result,
      });
    }
  });
});


app.delete("/category/:id", (req, res) => {
  const Id = req.params.id
  console.log(Id);
  let qry = "delete from tbl_category where cat_id = " + Id;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: 'data deleted',
      });
    }
  });
});

//catageory end//

//location start//

app.post("/location", (req, res) => {
  const { district_id, loc_name } = req.body
  //  console.log(categoryDesc);
  let qry =
    "insert into tbl_location (district_id,loc_name) values('" +
    district_id + "','" +
    loc_name + "')";

  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.get("/location", (req, res) => {
  let qry = "SELECT * FROM tbl_location INNER JOIN tbl_district ON tbl_location.district_id = tbl_district.district_id";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        location: result,
      });
    }
  });
});

app.get("/location/:id", (req, res) => {
  const Id = req.params.id
  let qry = "SELECT * FROM tbl_location where district_id = "+ Id;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        location: result,
      });
    }
  });
});


app.delete("/location/:id", (req, res) => {
  const Id = req.params.id
  console.log(Id);
  let qry = "delete from tbl_location where loc_id = " + Id;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: 'data deleted',
      });
    }
  });
});



//location end //

// information start //

app.post("/informationadding",
  upload.fields([
    { name: "info_photo", maxCount: 1 },
  ]), (req, res) => {
    console.log(req.files);
    var fileValue = JSON.parse(JSON.stringify(req.files));
    var info_photo = `http://127.0.0.1:${PORT}/images/${fileValue.info_photo[0].filename}`;
    const { info_name, info_details } = req.body
    //  console.log(categoryDesc);
    let qry =
      "insert into tbl_informatiion (info_name,info_photo,info_details) values('" +
      info_name + "','" + info_photo + "','" +

      info_details + "')";
    console.log(qry);
    db.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          message: "Data Saved",
        });
      }
    });
  });






// information end //




//user registration //

app.post("/userregistration", (req, res) => {
  const { loc_id, user_name, user_contact, user_email, user_gender, user_password, user_address } = req.body
  let qry =
    "insert into tbl_location (loc_id,user_name,user_contact,user_email,user_gender,user_password,user_address) values('" +
    loc_id + "','" +
    user_name + "','" +
    user_contact + "''" +
    user_email + "''" +
    user_gender + "''" +
    user_password + "''" +
    user_address + "')";
    console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});





//user registration//