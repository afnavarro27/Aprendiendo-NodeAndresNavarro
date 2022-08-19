var axios = require('axios');

var data = JSON.stringify({
    "collection": "APRENDICES",
    "database": "POSAlejandroMunoz",
    "dataSource": "ADSI2364482",
    "document": {
        "Cedula":1035443888,
        "Nombre":"Carmelo",
        "Edad":18,
        "Promedio":[2,1,5,4,2],
        "ProyectoFormativo":{"NombreProyecto":"SalutApp","Descripcion":"Proyecto de vida saludable y alimentos sanos","PorcentajeAvance":60},
        "PromedioAcumulado":4.6
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-bwwxc/endpoint/data/v1/action/insertOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'xgLHtXTz7avFxHuu2xsddB2r89JchmxgCrAdlV0xOpNaoXTwbfEw9iWslYsMkCOx',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
