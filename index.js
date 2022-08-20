const express = require('express')

const app = express()
//const PORT = process.env.PORT || 9000;
const path = require('path');


app.set('view engine','ejs')

app.set('views',path.join(__dirname,'/views'))



app.get("/",(req, res) => {

    let gato = ['michi','peludo',1];
    let user = [
        nombre = 'felipe',
        apellido ='Navarro',
        edad = '19'
    ]

    res.render('pages/index',
    {
        gat:gato,
        usuario:user
    }
       
    );

    /*var nombre='Felipe Navarro'
    res.render('pages/index',
    {name:nombre}
    );*/

    //res.render('pages/index')
    
})

app.listen(8070,()=> {
    console.log("Servidor fucionando")
})