const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});


app.post("/", function(req,res){
    var n1 = Number(req.body.no1);
    var n2 = Number(req.body.no2);
    console.log(req.body.no2);
    var result = n1/(n2 * n2);
    res.send("BMI is: " + result);
});

app.listen(3000, function()
{
    console.log("Server has started on port 3000");
});

