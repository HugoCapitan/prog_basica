function patito(minimo, maximo)
{
	var numero;
	numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var usuario = {opcion: 0, ganados: 0};
var maquina = {opcion: 0, ganados: 0};

var opciones = ["piedra","papel","tijera","lagarto","spock"];

while (usuario.ganados != 2 && maquina.ganados != 2)
{
	usuario.opcion = prompt("Elige una opcion:\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4","0");
	maquina.opcion = patito(0,4);

	alert("El usuario eligió:" + " " + opciones[usuario.opcion]);
	alert("Javascript eligió:" + " " + opciones[maquina.opcion]);

	var piedra = 0;
	var papel = 1;
	var tijera = 2;
	var lagarto = 3;
	var spock = 4;

	if(usuario.opcion == piedra)
	{
		if(maquina.opcion == piedra)
		{
			alert("Empate!");
		}
		else if(maquina.opcion == papel)
		{
			alert("Papel cubre piedra\nPerdiste!");
			maquina.ganados = maquina.ganados + 1;
		}
		else if(maquina.opcion == tijera)
		{
			alert("Piedra rompe tijera\nGanaste!");
			usuario.ganados = usuario.ganados + 1;
		}
		else if(maquina.opcion == lagarto)
		{
			alert("Piedra aplasta lagarto\nGanaste!");
			usuario.ganados = usuario.ganados + 1;
		}
		else if(maquina.opcion == spock)
		{
			alert("Spock vaporiza piedra\nPerdiste!");
			maquina.ganados = maquina.ganados + 1;
		}
	}
	else if(usuario.opcion == papel)
	{
		if(maquina.opcion == piedra)
		{
			alert("Papel cubre piedra\nGanaste!");
			usuario.ganados = usuario.ganados + 1;
		}
		else if(maquina.opcion == papel)
		{
			alert("Empate!");
		}
		else if(maquina.opcion == tijera)
		{
			alert("Tijera corta papel\nPerdiste!");
			maquina.ganados = maquina.ganados + 1;
		}
		else if(maquina.opcion == lagarto)
		{
			alert("Lagarto se come el papel\nPerdiste!");
			maquina.ganados = maquina.ganados + 1;
		}
		else if(maquina.opcion == spock)
		{
			alert("Papel refuta a Spock\nGanaste!");
			usuario.ganados = usuario.ganados + 1;
		}
	}
	else if(usuario.opcion == tijera)
	{
		if(maquina.opcion == piedra)
		{
			alert("Piedra rompe tijera\nPerdiste!");
			maquina.ganados = maquina.ganados + 1;
		}
		else if(maquina.opcion == papel)
		{
			alert("Tijera corta papel\nGanaste!");
			usuario.ganados = usuario.ganados + 1;
		}
		else if(maquina.opcion == tijera)
		{
			alert("Empate!");
		}
		else if(maquina.opcion == lagarto)
		{
			alert("Tijera decapita lagarto\nGanaste!");
			usuario.ganados = usuario.ganados + 1;
		}
		else if(maquina.opcion == spock)
		{
			alert("Spock destroza tijera\nPerdiste!");
			maquina.ganados = maquina.ganados + 1;
		}
	}
	else if(usuario.opcion == lagarto)
	{
		if(maquina.opcion == piedra)
		{
			alert("Piedra aplasta lagarto\nPerdiste!");
			maquina.ganados = maquina.ganados + 1;
		}
		else if(maquina.opcion == papel)
		{
			alert("Lagarto se come el papel\nGanaste!");
			usuario.ganados = usuario.ganados + 1;
		}
		else if(maquina.opcion == tijera)
		{
			alert("Tijera decapita lagarto\nPerdiste!");
			maquina.ganados = maquina.ganados + 1;
		}
		else if(maquina.opcion == lagarto)
		{
			alert("Empate!");
		}
		else if(maquina.opcion == spock)
		{
			alert("Lagarto envenena a Spock\nGanaste!");
			usuario.ganados = usuario.ganados + 1;
		}
	}
	else if(usuario.opcion == spock)
	{
		if(maquina.opcion == piedra)
		{
			alert("Spock vaporiza piedra\nGanaste!");
			usuario.ganados = usuario.ganados + 1;
		}
		else if(maquina.opcion == papel)
		{
			alert("Papel refuta a Spock\nPerdiste!");
			maquina.ganados = maquina.ganados + 1;
		}
		else if(maquina.opcion == tijera)
		{
			alert("Spock destroza tijera\nGanaste!");
			usuario.ganados = usuario.ganados + 1;
		}
		else if(maquina.opcion == lagarto)
		{
			alert("Lagarto envenena a Spock\nPerdiste!");
			maquina.ganados = maquina.ganados + 1;
		}
		else if(maquina.opcion == spock)
		{
			alert("Empate!");
		}
	}
}

if(usuario.ganados == 2)
{
	alert("Felicidades! Has ganado el juego!");
}
else
{
	alert("Uh, Lo siento, suerte para la proxima :/")
}