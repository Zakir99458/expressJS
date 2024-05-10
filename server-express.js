const express = require('express');

// Createing an express instance
const app = express();
app.get("/home", (req, res) => {
    res.sendFile(__dirname+"/index.html")
    console.log(`Request information: ${req}`);
    console.log(`Response information: ${res}`);
});

app.listen(5000, () =>{
    console.log("Server is listening... on port 5000");
});
