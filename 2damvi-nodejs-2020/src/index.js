const express = require("express");
const bodyParser = require("body-parser");
const app = express()
const apijs = require('./api.js');
//Swagger things
var swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
apijs.setup(app);
app.use('/api-adz', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("El servidor está inicializado en el puerto " + port);
});