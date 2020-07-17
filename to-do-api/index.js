const express = require('express')
const app = express();

app.get('/', function(req, res, next){
    res.send('Holitas')
})

const server = app.listen(8000, function(){
    console.log(`Servidor en puerto ${server.address().port}`)
})