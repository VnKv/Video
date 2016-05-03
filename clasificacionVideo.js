var json = {
	peliculas : [{
			titulo: "titulo1",
			genero: "terror",
			imagen: "naruto1.jpg",
		},{
			titulo: "titulo2",
			genero: "terror",
			imagen: "naruto1.jpg",
		},{
			titulo: "titulo3",
			genero: "terror",
			imagen: "naruto1.jpg",
		},{
			titulo: "titulo4",
			genero: "comedia",
			imagen: "naruto2.jpg",
		},{
			titulo: "titulo5",
			genero: "comedia",
			imagen: "naruto2.jpg",
		},{
			titulo: "titulo6",
			genero: "comedia",
			imagen: "naruto2.jpg",
		},{
			titulo: "titulo7",
			genero: "accion",
			imagen: "naruto3.jpg",
		},{
			titulo: "titulo8",
			genero: "accion",
			imagen: "naruto3.jpg",
		},{
			titulo: "titulo9",
			genero: "accion",
			imagen: "naruto3.jpg",
		},{
			titulo: "titulo10",
			genero: "aventura",
			imagen: "naruto4.jpg",
		},{
			titulo: "titulo11",
			genero: "aventura",
			imagen: "naruto4.jpg",
		},{
			titulo: "titulo12",
			genero: "aventura",
			imagen: "naruto4.jpg",
		}]
};
var categorias = document.querySelectorAll(".categ")
var tarjetas_titulo = document.querySelectorAll(".tituloPelicula");
var tarjetas_img = document.querySelectorAll(".imgPelicula");
var terror = categorias[0];
var accion = categorias[1];
var aventura = categorias[2];
var comedia = categorias[3];

terror.addEventListener("click",clickTerror);
accion.addEventListener("click",clickAccion);
aventura.addEventListener("click",clickAventura);
comedia.addEventListener("click",clickComedia);

function clickTerror(){
	var peliculas = buscarJson("terror");
	console.log(peliculas);
	cargarTarjetas(peliculas);
	console.log(terror);
}
function clickAccion(){
	var peliculas = buscarJson("accion");
	cargarTarjetas(peliculas);
	console.log(accion);
}
function clickAventura(){
	var peliculas = buscarJson("aventura");
	cargarTarjetas(peliculas);
	console.log(aventura);
}
function clickComedia(){
	var peliculas = buscarJson("comedia");
	cargarTarjetas(peliculas);
	console.log(comedia);
}

function buscarJson(genero){
	var conjuntoGenero = [];
	for (var i = json.peliculas.length - 1; i >= 0; i--) {
		if(json.peliculas[i].genero == genero){
			conjuntoGenero.push(json.peliculas[i])
		}
	}
	return conjuntoGenero;
}

function cargarTarjetas(peliculas){
	console.log("CargandoPeliculas")
	for (var i = peliculas.length - 1; i >= 0; i--) {
		tarjetas_titulo[i].innerHTML = "";
		tarjetas_titulo[i].innerHTML = peliculas[i].titulo;
		tarjetas_img[i].src= "";
		tarjetas_img[i].src = "img/" + peliculas[i].imagen;
	}
}