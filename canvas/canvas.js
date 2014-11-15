var dibujo, canvas;
function inicio () {
	tx = document.getElementById("numeroX");
	ty = document.getElementById("numeroY");
	b = document.getElementById("dibujarlo");
	dibujo = document.getElementById("dibujito");
	canvas = dibujo.getContext("2d");

	canvas.beginPath();
	canvas.strokeStyle = "#000";
	canvas.moveTo(0,0);
	canvas.lineTo(0,300);
	canvas.moveTo(0,0);
	canvas.lineTo(300,0);
	canvas.closePath();
	canvas.stroke();
	b.addEventListener("click", dibujarGrilla);
	
}

function dibujarGrilla () {
	var rayasX = parseInt(numeroX.value);
	var rayasY = parseInt(numeroY.value);
	var ancho = dibujo.width;
	var alto = dibujo.height;
	canvas.clearRect(1, 1, ancho, alto);
	var dX = ancho / rayasX;
	var dY = alto / rayasY;
	for(linea = 1; linea <= rayasX; linea++){
		punto = linea * dX;
		canvas.beginPath();
		canvas.strokeStyle = "#666";
		canvas.moveTo(punto, 0);
		canvas.lineTo(punto, ancho);
		canvas.stroke();
		canvas.closePath();
	}
	for(linea = 1; linea <= rayasY; linea++){
		punto = linea * dY;
		canvas.beginPath();
		canvas.strokeStyle = "#666";
		canvas.moveTo(0, punto);
		canvas.lineTo(alto, punto);
		canvas.stroke();
		canvas.closePath();
	}
}
