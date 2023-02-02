const path = require('path');
const express = require('express');
const routes= (app) => {
    app.get("/", (req,res)=> {
        res.sendFile(path.join(__dirname,'/public/index.html'));
    });
    app.get("/contact", (req,res)=> {
        res.sendFile(path.join(__dirname,'/public/contact.html'));
    });
    app.get("/signin", (req,res)=> {
        res.sendFile(path.join(__dirname,'/public/user.html'));
    });
    app.get("/index-alt", (req,res)=> {
        res.sendFile(path.join(__dirname,'/public/index-alt.html'));
    });
    app.get("/signup", (req,res)=> {
        res.sendFile(path.join(__dirname,'/public/register.html'));
    });
    app.get("/contact-success", (req, res) => {
      res.sendFile(path.join(__dirname, "/public/success.html"));
    });
    app.use('/static/', express.static(__dirname+'/public'));
}
module.exports = routes;