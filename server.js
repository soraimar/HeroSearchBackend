const express = require('express');
const app = express();
const router = require('./network/router');
const {PORT, HOST} = require("./config")
const cors = require("cors");

app.use(cors());
router(app);

app.listen(PORT, function (){
    console.log('La app está escuchando en '+ HOST +':'+ PORT);
})
