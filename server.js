const express = require("express");
const mysql = require("mysql");
const bodyParser = require('body-parser');

const app = express();

const con = mysql.createConnection({
    host: "db4free.net",
    user: "akanshaagarwal",
    password: "samsung018",
    database: "mocksurvey"
});

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(8081, 'localhost', 0, function () {
    con.connect(function(err) {
        if (!err) {
            console.log("Connection success");
        }
    });
});

app.get('/users/:userName', function (req, res) {
    res.send({msg : `Welcome ${req.params.userName}`});
});

app.post('/signUp', function (req, res) {
    let values = '';
    for (let key in req.body) {
        values = `${values}, '${req.body[key]}'`;
    }
    values = values.substring(1);
    let sql = `INSERT INTO user_details (username,password,email,firstname,lastname) VALUES (${values})`;
    con.query(sql, function (err, result) {
        if (err) {
            res.status(400).send("query_error");
        } else {
            res.redirect(`/users/${req.body.username}`);
        }
    })
});

app.post('/login', function (req, res) {
    let sql = `SELECT username,password FROM user_details WHERE username = "${req.body.username}"`;
    con.query(sql,function(err,result){
        if (err) {
            res.status(400).send("query_error");
        } 
        else if(!result.length) {
            res.send({msg : `No such user record`});
        }
        else if(result[0].password === req.body.password){
            res.redirect(`/users/${req.body.username}`);
        }
        else {
            res.send({msg : `Incorrect Password ! Retry ?`});
        }
    })
});


