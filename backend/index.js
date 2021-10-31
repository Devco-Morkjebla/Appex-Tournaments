const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express();
const PORT = 3001;

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'appex'
})

app.use( bodyParser.json() )
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})

const tournament = (req, res) => {
  res.send('test');
}

let tournamentID = 0;
app.get("/test", tournament);
app.get("/gettournaments", (req, res) => {
  // MongoDB versjon. Sliter med å bestemme meg for mySQL eller mongoDB
  /*MongoClient.connect('mongodb://localhost:27017/appex', function(err, db) {
    if (err) throw err;
  
    db.collection('tournaments').find().toArray(function (err, result) {
      if (err) throw err
      res.send(result)
      console.log(result)
      db.close();
    })
  });*/
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'appex'
  })
  
  connection.connect()
  connection.query('SELECT * FROM `tournaments`', function (err, rows, fields) {
    if (err) throw err
    res.send(rows)
    //console.log(rows)
  })
  
  connection.end()
  
})
app.post("/newtournament", (req, res) => {
  const { name, players } = req.body;
  res.send(`Tournament name: ${name}\n${players}`);
  
  /*MongoClient.connect(process.env.MONGODB_URL, function(err, db) {
    if (err) throw err;
    var dbo = db.db("appex");
    var tournament = { tournamentId: tournamentID, name: name, date: date, players: players };
    dbo.collection("tournaments").insertOne(tournament, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      dbo.close();
    });
  });*/
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'appex'
  })
  connection.connect()
  connection.query(`INSERT INTO tournaments (name, players) VALUES ("${name}", "${players}")`, function (err, rows, fields) {
    if (err) throw err
  
    console.log('INSERT')
  })
  res.send("Get ")
  connection.end()
  tournamentID++;
});