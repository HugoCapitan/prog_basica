console.log("Iniciando server");

var arDrone = require("ar-drone");

var express = require("express");
var web = express();
var servidor;

servidor = web.listen(8080, function (){
	console.log("servidor arrancado :D")
});

web.get("/", function (req, res) {
	console.log("Home");
	res.sendfile("opciones.html");
});
web.get("/despegar", function (req, res) {
	console.log("Despegando");
	res.sendfile("opciones.html");
});
web.get("/aterrizar", function (req, res) {
	console.log("aterrizando");
	res.sendfile("opciones.html");
});