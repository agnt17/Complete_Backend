// const express = require("express");
import express  from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("This is the data that is send by server to the client side.");
});

app.get('/login',(req, res)=>{
    res.send("Yeah u are at login page!")
})


const port = 65535;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
