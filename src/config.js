'use strict'
const mongodb= {url: 'mongodb://localhost:27017/AdminV1' }
const port =process.env.PORT || 8080
const pages = {
    abbreviations:"TS",
    name:"TECNOSERVICES",
    bgHeader: "background-image: url('dist/img/header3.jpg');"
}
module.exports = {mongodb, port, pages}
