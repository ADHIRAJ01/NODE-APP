const express = require('express');
const token = express.Router();

token.route('/')
    .all((req, res, next) =>{
        res.send("posts");
    })
    .post((req, res) =>{
        res.json({
            message: "POST CREATED...."
        })
    })
