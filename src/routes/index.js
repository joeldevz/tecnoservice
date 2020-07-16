'use strict'
//REQUIRING LIBRARIES
const express = require('express')
const api = express.Router()
const config = require('../config')
const sendemail = require('../controllers/email')
const error = require('../middlewares/error')
const pdf = require('../controllers/pdf')
api.get('/', (req, res) => {
    res.status(200).render('home', { name: config.pages.name, bgHeader: config.pages.bgHeader })
})
api.get('/distribudor-digi-oficial', (req, res) => {
    res.status(200).render('digi', { name: config.pages.name, bgHeader: config.pages.bgHeader })
})
api.get('/avisolegal', (req, res) => {
    res.status(200).render('avisolegal', { name: config.pages.name, bgHeader: config.pages.bgHeader })
})
api.get('/servicio-tecnico', (req, res) => {
    res.status(200).render('servicio-tecnico', { name: config.pages.name, bgHeader: config.pages.bgHeader })
})
api.get('/lowcost', (req, res) => {
    res.status(200).render('lowcost', { name: config.pages.name, bgHeader: config.pages.bgHeader })
})
api.get('/abaout', (req, res) => {
    res.status(200).render('abaout', { name: config.pages.name, bgHeader: config.pages.bgHeader })
})
api.get('/contacto', (req, res) => {
    res.status(200).render('contact', { name: config.pages.name, bgHeader: config.pages.bgHeader })
})
api.get('/finetwork', (req, res) => {
    res.status(200).render('finetwork', { name: config.pages.name, bgHeader: config.pages.bgHeader })
})
api.get('/lowi', (req, res) => {
    res.status(200).render('lowi', { name: config.pages.name, bgHeader: config.pages.bgHeader })
})
api.get('/republica-movil', (req, res) => {
    res.status(200).render('republica-movil', { name: config.pages.name, bgHeader: config.pages.bgHeader })
})
api.get('/politica-privacidad', (req, res) => {
    res.status(200).render('politicaprivacidad', { name: config.pages.name, bgHeader: config.pages.bgHeader })
})
api.get('/politica-cookies', (req, res) => {
    res.status(200).render('politicacookies', { name: config.pages.name, bgHeader: config.pages.bgHeader })
})
api.get('/configurador-digi', (req, res) => {
    res.status(200).render('confi-digi', { name: config.pages.name, bgHeader: config.pages.bgHeader })
})
api.get('/generatepdf', (req, res) => {
   
    res.status(200).render('templatepdf', req.query)
})
api.get('/api/pdf', pdf.generatePDF)
api.get('/api/download/:name', (req, res) => {

    res.download('./views/dist/pdf/' + req.params.name, 'Oferta.pdf', function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("listop")
        }
    })
})
api.post('/api/sendemail', sendemail.enviar)
api.use(error.error404)
module.exports = api