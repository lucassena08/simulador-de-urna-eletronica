const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/views/index.html");
})

app.post("/", (req, res) => {

})

app.listen(3000, () => {
    console.log("Server started on port 3000.")
})