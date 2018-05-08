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

// app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/users/:userName', function (req, res) {
    console.log("ca", req.params);
    // res.writeHead(200, { 'content-Type': 'text/html' });
    res.send(`Welcome ${req.params.userName}`);
    // res.end();
});

app.post('/signUp', function (req, res) {
    let values = '';
    for (let key in req.body) {
        values = `${values}, '${req.body[key]}'`;
    }
    values = values.substring(1);
    let sql = `INSERT INTO user_details VALUES (${values})`;
    con.query(sql, function (err, result) {
        if (err) {
            res.status(400).send("query_error");
        } else {
            // res.status(200).send("ok");
            res.redirect(`/users/${req.body.username}`);
        }
    })
});

app.post('/login', function (req, res) {

});


app.listen(8081, 'localhost', 0, function () {
    con.connect(function r(err) {
        if (!err) {
            console.log(
                "Connection success"
            )
        }
    });
});