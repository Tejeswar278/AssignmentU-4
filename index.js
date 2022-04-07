const express = require("express");
const app = express();

app.get("", function (req,res){
    res.send("Hellow")
})

app.get("/books", function (req,res){
    res.send({
        book1: "http://www.mysearch.org.uk/website2/pdf/36.1.pdf",
        book2: "http://www.mysearch.org.uk/website2/pdf/36.1.pdf",
        book3: "http://www.mysearch.org.uk/website2/pdf/36.1.pdf",
        book4: "http://www.mysearch.org.uk/website2/pdf/36.1.pdf",
})
})

app.listen(2345, ()=>{
    console.log("Listening on port 2345")
});