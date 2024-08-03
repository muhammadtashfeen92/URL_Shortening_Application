const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.listen(8080, function (req, res) {  // Create Server
    console.log("Your Server is running at Port 8080");
});

const DB = "mongodb+srv://tashfeen92:A.sheamus123456@cluster0.isehowm.mongodb.net/smartfoodstore?retryWrites=true&w=majority";   // Connection with MongoDB
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, })
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => console.log("No Connection"));

app.get("/", function (req, res) {
    res.send("Welcome :)")
})