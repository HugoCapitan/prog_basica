function explosion() {
	alert("BOOM!!");
	document.write("<h1>Boom! Elegiste un area minada</h1>");
}

function ganaste () {
	document.write("\n Eres un ganador :)");
}

// 1 = bomba, 0 = no hay bomba
var campo = [ [1,0,0],
			  [0,1,0],
			  [1,1,1] ];

var textos = ["cesped", "bomba"];

var x, y;

alert("Estas en un campo minado \n" +
	  "elije una posicion entre el 0 y el 2 para x y para y");

x = prompt("posicion en x (entre 0 y 2)");
y = prompt("posicion en y (entre 0 y 2)");

if (x < 3 && 2 < 3) {
	var posicion = campo[x][y];
	document.write("Elegiste " + textos[posicion]);
	if (posicion == 1) {
		explosion();
	}
	else{
		ganaste();
	}
}
else{
	explosion();
}