let clients = require('restify-clients');
module.exports = app => {
    app.get('/json', (request, response)=> {
        // Cria o criente json
        let client = clients.createJsonClient({ url: 'http://pbmedia.pepblast.com' });

        client.get('/pz_challenge/assets.json', function(erro, req, res, retorno) {
            if(erro){
                console.log(erro);
                response.status(400).send(erro);
                return;
            }
            //console.log(retorno);  
            response.status(200).json(retorno);
        });
    });
}