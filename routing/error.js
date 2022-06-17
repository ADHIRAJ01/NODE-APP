const express = require('express');
const errorRouter = express.Router();

errorRouter.route('/')
    .all((req,res) => {
        res.status(404);
        res.setHeader('Content-Type', 'text/html');
        res.send("<h1>ERROR 404 FILE NOT FOUND</h1>")
    });
module.exports = errorRouter;