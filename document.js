function Pokemon(n,v,a){
	this.grito = "Pika!";	
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function (){
		alert(this.grito);
	}
}

function inicio () {
	var rattata = new Pokemon("Rattata", 40, 2);
	nombrePokemon.innerText = rattata.nombre;
	datosPokemon.innerText = "La vida del pokemon es: "
	+ rattata.vida + "\n El atque del pokemon es: " + rattata.ataque;
}


//DOCUMENT OBJECT MODEL
//Objeto
//  Variables
//  Funciones

// function Pokemon(nombrePoke, vidaPoke, ataPoke){
// 	var estructuraPokemon = {
// 	nombre: nombrePoke,
// 	vida: vidaPoke,
// 	ataque: ataPoke,
// 	datos: {tipo: "Tierra", debilidad: "Fuego"}
// 	};
// 	return estructuraPokemon;
// }

// var pikachu = Pokemon("Pikachu", 100, 55);
// var bulbasaur = Pokemon("Bulbasaur", 90, 50);

// console.log(bulbasaur);