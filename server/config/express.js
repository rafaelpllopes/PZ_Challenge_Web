//Monta o servidor
let express = require("express");
//Carrega os modulos
let consign = require('consign');
//cuida dos request e response da pagina
let body = require('body-parser');

let cors = require('cors');

module.exports = () => {
    let app = express();

    //Middlewares
    //carrega a pagina
    app.use(cors());
    app.use(express.static('./dist'));
    app.use(body.urlencoded({extended: true}));
    app.use(body.json());
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        if ('OPTIONS' == req.method) {
            res.sendStatus(200);
        }
        else {
           next();
        }
    });

    consign()
        .include('app')
        .into(app);

    return app;    
}