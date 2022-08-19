const express = require('express')

const app = express()
//const PORT = process.env.PORT || 9000;
const path = require('path');


app.set('view engine','ejs')

app.set('views',path.join(__dirname,'/views'))



app.get("/",(req, res) => {
    //console.log(path.__dirname);
    res.render('pages/index')
    
})

app.listen(8070,()=> {
    console.log("Servidor fucionando")
})