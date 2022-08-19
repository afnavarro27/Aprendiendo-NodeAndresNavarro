const express = require('express')

const app = express()
const calc = require('../notas/MiCalculadora')
app.set('view engine','ejs');
const path = require('path');

app.get("/",(req, res) => {
    res.send("Hola")
    console.log(calc.Sumar(1,2))
    
})

app.listen(8070,()=> {
    console.log("Servidor fucionando")
})