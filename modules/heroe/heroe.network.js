const express = require('express');
const router = express.Router();
const controller = require('./heroe.controller')

router.get('/', function (req, res){
    controller.searchHeroes(req.query.nameHeroes)
        .then((data) =>{
            res.status(200).send(data)
        })
})

router.get('/id', function(req,res){
    console.log("quiero saber id " +  req.query.idHeroe)
    controller.searchHeroeForId( req.query.idHeroe)
        .then((data) =>{
            res.status(200).send(data)
        })
})

module.exports= router;