const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");

app.use(express.json());
app.use(cors());

// Database connection with mondodb
mongoose.connect("mongodb+srv://ecommerce:user1234@cluster0.34qevlv.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0");

// Api creation
app.get("/", (req, res) => {
    res.send("Express App is running")
})

app.listen(port, (error) => {
    if(!error){
        console.log("Server is running on port " + port);
    }else{
        console.log("Error : " + error);
    }
})