const express = require('express');
const router = express.Router();
const controller = require('./heroe.controller')

router.get('/', function (req, res){
    controller.searchHeroes(req.query.nameHeroes)
        .then((data) =>{
            res.status(200).send(data)
        })
})


module.exports= router;