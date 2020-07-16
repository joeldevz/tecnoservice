'use strict'
//REQUIRING LIBRARIES
const express = require('express')
const bodyParser = require('express')
const path = require('path')
const routes = require('./routes')
const app = express()
const cron = require('node-cron')
const fs = require('fs')
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../views')))

app.use(express.static(path.join(__dirname, '../views/roboto.txt')))
app.use(routes)



cron.schedule('* * * *  7', () => {
    console.log('running a task every minute');
    fs.rmdir('./views/dist/pdf/',{recursive :true},(err) => {
        fs.mkdir('./views/dist/pdf/', { recursive: true }, (err) => {
            if (err) throw err;
          });
        if (err){
            throw err
        }else{
            
        }
    
    });
});

module.exports = app