const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000
const cors = require("cors");
const multer = require("multer");
const mysql = require("mysql2");
app.use(bodyParser.json());
app.use(express.static("./public"));
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


app.patch("/District/:Id", (req, res) => {
  const id = req.params.Id
  const { districtName } = req.body
  let qry = "update tbl_district set district_name = '"+districtName+"' where district_id = "+id ;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
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


app.get("/oneDistrict/:id", (req, res) => {
  const Id = req.params.id
  console.log(Id);
  let qry = "select * from tbl_district  where district_id = " + Id;
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
  let qry = "SELECT * FROM tbl_location where district_id = " + Id;
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

app.get("/updateLoc/:id", (req, res) => {
  const Id = req.params.id
  console.log(Id);
  let qry = "select * from tbl_location  where loc_id = " + Id;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        locationupdate: result,
      });
    }
  });
});

app.patch("/Location/:Id", (req, res) => {
  const id = req.params.Id
  const { loc_name,district_id } = req.body
  let qry = "update tbl_Location set loc_name = '"+loc_name+"', district_id ='"+district_id+"' where loc_id = "+id ;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
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
    var fileValue = JSON.parse(JSON.stringify(req.files));
    var info_photo = `http://127.0.0.1:${PORT}/images/${fileValue.info_photo[0].filename}`;
    const { info_name, info_details,cat_id } = req.body
    console.log(cat_id);
    // const info_photo = ""
    //  console.log(categoryDesc);
    let qry =
      "insert into tbl_informatiion (info_name,info_photo,cat_id,info_details) values('" +
      info_name + "','" + info_photo + "','" + cat_id + "','" +

      info_details + "')";
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

  app.get("/informationadding/", (req, res) => {
    // const user_id = req.params.id;
    // const Id = req.params.id
    // console.log(user_id);
    let qry = "SELECT * FROM tbl_informatiion INNER JOIN tbl_category ON tbl_informatiion.cat_id = tbl_category.cat_id";
    console.log(qry);
    db.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          info: result,
        });
      }
    });
  });
  






// information end //




//user registration //

app.post("/userregistration",upload.fields([
  { name: "user_photo", maxCount: 1 },
  { name: "user_proof", maxCount: 1 },
]),(req, res) => {
  var fileValue = JSON.parse(JSON.stringify(req.files));
  var photo = `http://127.0.0.1:${PORT}/images/${fileValue.user_photo[0].filename}`;
  var proof = `http://127.0.0.1:${PORT}/images/${fileValue.user_proof[0].filename}`;
  const { loc_id, user_name, user_contact, user_email, user_gender, user_password, user_address } = req.body
  let qry =
    "insert into tbl_user(loc_id,user_name,user_contact,user_email,user_photo,user_proof,user_gender,user_password,user_address) values('" +
    loc_id + "','" +
    user_name + "','" +
    user_contact + "','" +
    user_email + "','" +
    photo + "','" +
    proof + "','" +
    user_gender + "','" +
    user_password + "','" +
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



app.get("/userregistration/:user_id", (req, res) => {
  const user_id = req.params.user_id;
  console.log(user_id);
  // const Id = req.params.id
  // console.log(user_id);
  let qry = "select * from tbl_user  where user_id = " + user_id;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        user: result,
      });
    }
  });
});





app.patch("/editInsert/:Id", (req, res) => {
  const id = req.params.Id;
  // console.log(res);
  const { user_name, user_contact, user_email } = req.body;
  let qry = "update tbl_user set user_name ='"+user_name+"', user_contact ='"+user_contact+"',user_email='"+user_email+"' where user_id = "+id ;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});




//user registration//


// volunteer registration //

app.post("/volunteerregistration",upload.fields([
  { name: "volunteer_photo", maxCount: 1 },
  { name: "volunteer_proof", maxCount: 1 },
]),(req, res) => {
  var fileValue = JSON.parse(JSON.stringify(req.files));
  var photo = `http://127.0.0.1:${PORT}/images/${fileValue.volunteer_photo[0].filename}`;
  var proof = `http://127.0.0.1:${PORT}/images/${fileValue.volunteer_proof[0].filename}`;
  
  const { loc_id, volunteer_name, volunteer_contact, volunteer_email, volunteer_gender, volunteer_password, volunteer_address } = req.body
   
  // console.log(req.body);
  let qry =
    "insert into tbl_volunteer(loc_id,volunteer_name,volunteer_contact,volunteer_email,volunteer_photo,volunteer_gender,volunteer_password,volunteer_address,volunteer_proof) values('" +
    loc_id + "','" +
    volunteer_name + "','" +
    volunteer_contact + "','" +
    volunteer_email + "','" +
    photo + "','" +
    volunteer_gender + "','" +
    volunteer_password + "','" +
    volunteer_address + "','" +
    proof + "')";
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




app.get("/Vounteerprofile/:volunteer_id", (req, res) => {
  const volunteer_id = req.params.volunteer_id;
  // console.log(user_id);
  // const Id = req.params.id
  // console.log(user_id);
  let qry = "select * from tbl_volunteer  where volunteer_id = " + volunteer_id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        volunteer: result,
      });
    }
  });
});


app.patch("/voleditInsert/:Id", (req, res) => {
  const id = req.params.Id;
  // console.log(res);
  const { volunteer_name, volunteer_contact, volunteer_email } = req.body;
  let qry = "update tbl_volunteer set volunteer_name ='"+volunteer_name+"', volunteer_contact ='"+volunteer_contact+"',volunteer_email='"+volunteer_email+"' where volunteer_id = "+id ;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});






// volunteer registration end //


// complaint start //

app.post("/complaint", (req, res) => {
  const { complaint_title, complaint_details,complaint_date,user_id } = req.body

  let qry =
    "insert into tbl_complaint (complaint_title,complaint_details,complaint_date,user_id) values('" +
    complaint_title + "','" +
    complaint_details + "','" +
    complaint_date + "','" +
    user_id + "')";
 console.log(qry)
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

app.get("/complaint/", (req, res) => {
  const user_id = req.params.user_id;
  // const Id = req.params.id
  // console.log(user_id);
  let qry = "select * from tbl_complaint "
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        user: result,
      });
    }
  });
});


app.patch("/complaint/:id", (req, res) => {
  const id = req.params.id
  const { complaint_title, complaint_details,complaint_date,user_id } = req.body
  let qry = "update tbl_complaint set complaint_title = '"+complaint_title+"',complaint_details ='"+complaint_details+"',complaint_date ='"+complaint_date+"', user_id ='"+user_id+"' where complaint_id = "+id ;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});

app.delete("/complaint/:id", (req, res) => {
  const Id = req.params.id
  console.log(Id);
  let qry = "delete from tbl_complaint where complaint_id = " + Id;
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

// complaint end //



// user feedback //


app.post("/userfeedback", (req, res) => {
  const {  feedback_details,user_id } = req.body

  let qry =
    "insert into tbl_userfeedback (feedback_details,user_id) values('" +
    feedback_details + "','" +
    user_id + "')";
 console.log(qry)
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

app.get("/userfeedback/", (req, res) => {
  const user_id = req.params.user_id;
  // const Id = req.params.id
  // console.log(user_id);
  let qry = "select * from tbl_userfeedback"
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        user: result,
      });
    }
  });
});

app.delete("/userfeedback/:id", (req, res) => {
  const Id = req.params.id
  console.log(Id);
  let qry = "delete from tbl_userfeedback where feedback_id = " + Id;
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

//user feedback end//


// volunteer feedback //


app.post("/volunteerfeedback", (req, res) => {
  const {  vfeedback_details,volunteer_id } = req.body

  let qry =
    "insert into tbl_volunteerfeedback (vfeedback_details,volunteer_id) values('" +
    vfeedback_details + "','" +
    volunteer_id + "')";
 console.log(qry)
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

app.get("/volunteerfeedback/", (req, res) => {
  // const user_id = req.params.user_id;
  // const Id = req.params.id
  // console.log(user_id);
  let qry = "select * from tbl_volunteerfeedback"
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        volunteer: result,
      });
    }
  });
});

app.delete("/volunteerfeedback/:id", (req, res) => {
  const Id = req.params.id
  console.log(Id);
  let qry = "delete from tbl_volunteerfeedback where vfeedback_id = " + Id;
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






// volunteer feedbackend//

// login start //


app.post("/login", (req, res) => {
  let selAdmin = "select * from tbl_admin where admin_email='" + req.body.email + "' and admin_password='" + req.body.password + "'";
  let selUser = "select * from tbl_user where user_email='" + req.body.email + "' and user_password='" + req.body.password + "'";
  let selvolunteer = "select * from tbl_volunteer where volunteer_email='" + req.body.email + "' and volunteer_password='" + req.body.password + "'";
  
  
  db.query(selAdmin, (err, result) => {
    if (err) {
      console.log("Error");
    }
    else if (result.length > 0) {
      res.send({
        message: "Login Successful",
        id: result[0].admin_id,
        login: "admin"
      })
    }
  })

   
  db.query(selUser, (err, result) => {
    if (err) {
      console.log("Error");
    }
    else if (result.length > 0) {

      res.send({
        message: "Login Successful",
        id: result[0].user_id,
        login: "user"
      })
    }
  })
 

   
  db.query(selvolunteer, (err, result) => {
    if (err) {
      console.log("Error");
    }
    else if (result.length > 0) {
      res.send({
        message: "Login Successful",
        id: result[0].volunteer_id,
        login: "volunteer"
      })
    }
  })
})

// login end //

//apply start //

app.post("/apply", (req, res) => {
  console.log(req.body);
  const { info_id,user_id } = req.body

  let qry =
    "insert into tbl_apply(apply_curdate,info_id,user_id) values(curdate(),'" +
    info_id + "','" +
    user_id + "')";
 console.log(qry)
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



app.get("/applyfetch/", (req, res) => {
  // const user_id = req.params.id;
  // const Id = req.params.id
  // console.log(user_id);
  let qry = "SELECT * FROM tbl_apply INNER JOIN tbl_informatiion ON tbl_apply.info_id = tbl_informatiion.info_id ";
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        apply: result,
      });
    }
  });
});


//apply end //

// admin dashboard start//


app.get("/Userdetails/", (req, res) => {
 
  let qry = "SELECT * FROM tbl_apply INNER JOIN tbl_informatiion ON tbl_apply.info_id = tbl_informatiion.info_id INNER JOIN tbl_user on tbl_apply.user_id = tbl_user.user_id ";
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        details: result,
      });
    }
  });
});


// admin dashboard end//

//  volunteer fetch //
app.get("/volfetch/", (req, res) => {
  let qry = "select * from tbl_volunteer"
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        volunteerdata: result,
      });
    }
  });
});


app.get("/volfetchbyId/:id", (req, res) => {
  const Id = req.params.id
  let qry = "select * from tbl_volunteer  where loc_id = " + Id 
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        volunteerdatabyId: result,
      });
    }
  });
});


//  volunteer fetch //


// volunteer booking by user //

app.post("/requestForvol", (req, res) => {
  console.log(req.body);

  const { volunteer_id,user_id,req_Details } = req.body
  //  console.log(volunteer_id);
  let qry =
    "insert into tbl_request(req_date,volunteer_id,user_id,req_Details) values(curdate(),'" +
    volunteer_id + "','" +
    user_id + "','" +
    req_Details + "')";
 console.log(qry)
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

// volunteer booking by user //

// user req //

app.get("/request/:id", (req, res) => {
  const Id = req.params.id
  let qry = "SELECT * FROM tbl_request r INNER JOIN tbl_user u ON r.user_id = u.user_id INNER JOIN tbl_volunteer v  on r.volunteer_id = v.volunteer_id  where v.volunteer_id = "+ Id + " AND r.req_status = 0"
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        requestdata: result,
      });
    }
  });
});



app.patch("/reqaccept/:Id", (req, res) => {
  const id = req.params.Id
  // const { districtName } = req.body
  let qry = "update tbl_request set req_status = 1 where req_id = "+id ;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});


app.patch("/reqreject/:Id", (req, res) => {
  const id = req.params.Id
  // const { districtName } = req.body
  let qry = "update tbl_request set req_status = 2 where req_id = "+id ;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});



// user req end //

// user password change //

app.patch("/changepass/:id", (req, res) => {
  let id = req.params.id;
  let qry = "update tbl_user set user_password ='"+req.body.newuser_password+"' where user_id=" + id;
  console.log(qry);
  db.query(qry,(err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "updated",
      });
    }
  });
});


// user password change //

// volunteer password change //



app.patch("/volchangepass/:id", (req, res) => {
  let id = req.params.id;
  let qry = "update tbl_volunteer set volunteer_password ='"+req.body.newvol_password+"' where volunteer_id=" + id;
  console.log(qry);
  db.query(qry,(err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "updated",
      });
    }
  });
});


// volunteer password change //

// volunteer verification //


app.get("/volverification", (req, res) => {
 
  let qry = "SELECT * FROM tbl_volunteer "
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        verificationdata: result,
      });
    }
  });
});



// volunteer verification //

//user verification //


app.get("/userverification", (req, res) => {
 
  let qry = "SELECT * FROM tbl_user "
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        userverificationdata: result,
      });
    }
  });
});


//user verification //

// user verify by admin //

app.patch("/userrequestaccept/:Id", (req, res) => {
  const id = req.params.Id
  // const { districtName } = req.body
  let qry = "update tbl_user set userreq_status = 1 where user_id = "+id ;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});



app.patch("/userrequestreject/:Id", (req, res) => {
  const id = req.params.Id
  // const { districtName } = req.body
  let qry = "update tbl_user set userreq_status = 2 where user_id = "+id ;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});
// user verify by admin //


// volunteer verify by admin //

app.patch("/volunteerrequestaccept/:Id", (req, res) => {
  const id = req.params.Id
  // const { districtName } = req.body
  let qry = "update tbl_volunteer set volreq_status = 1 where volunteer_id = "+id ;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});



app.patch("/volunteerrequestreject/:Id", (req, res) => {
  const id = req.params.Id
  // const { districtName } = req.body
  let qry = "update tbl_volunteer set volreq_status = 2 where volunteer_id = "+id ;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});


// volunteer verify by admin //

