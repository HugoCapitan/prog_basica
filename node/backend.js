pepito = "Mexico"
console.log("Arrancando server de node");

var basededatos = {
	usuario: "freddier",
	password: "mejorandola"
};

var express = require("express");
var parcero = require("body-parser");
var web = express();
web.use( parcero.urlencoded() );
var servidor;

servidor = web.listen(8080, function () {
	console.log("Servidor arrancado :D");
});

web.post("/entrar", function (req,res) {
	if(req.body.usuario == basededatos.usuario && req.body.clave == basededatos.password) {
		res.send("Bienvenido al area secreta~~~");
	}
	else {
		res.send("Shuu, shuu, fuera de aqui!!!!");
	}
	res.send("Entraste al formulario secreto");
});

web.get("/", function (req, res) {
	res.sendfile("formulario.html");
});

//prueba de variables get
web.get("/test", function (req, res) {
	res.send("tu avion es el " + req.query.avion + " y tu edad es " + req.query.edad);
});

web.get("/hola/mama-es-linda", function (req, res) {
	res.send("Hola <strong>mamá</strong>, estoy triunfando");
});