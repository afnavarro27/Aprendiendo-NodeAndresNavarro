const express = require('express')

const app = express()
const calc = require('./MiCalculadora')

app.get("/",(req, res) => {
    res.send("Hola")
    console.log(calc.Sumar(1,2))
    
})

app.listen(8070,()=> {
    console.log("Servidor fucionando")
})