const express = require('express');

const app = express();

//rotas
//app.get("/", function(req, res) {
//    res.send("Seja Bem Vindo!")
//});

app.get("/sobre", function(req, res) {
    res.send("Sobre  -  Seja Bem Vindo!")
});

app.get("/blog", function(req, res) {
    res.send("Blog  -  Seja Bem Vindo!")
});
//fim de rotas estaticas

//rotas dinamicas
app.get("/teste/:nome/:cargo/:regiao", function(req, res) {
    //    res.send("Seja Bem Vindo ao Teste Dinamico!")
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2>Seu Cargo e " + req.params.cargo + "</h2>" + "<h2>mora em " + req.params.regiao + "</h2>");
});

//chamando html
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/html/index.html");
});



//esta parametro deve sempre o ultimo trecho do codigo
app.listen(8081, function() {

    console.log('Servidor OnLine');

});