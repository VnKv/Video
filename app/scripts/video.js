var json = {
	peliculas : [{
	titulo: "titulo1",
	genero: "terror",
	imagen: "naruto1.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion terror"
	},{
	titulo: "titulo2",
	genero: "terror",
	imagen: "naruto1.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion terror"
	},{
	titulo: "titulo3",
	genero: "terror",
	imagen: "naruto1.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion terror"
	},{
	titulo: "titulo4",
	genero: "comedia",
	imagen: "naruto2.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion comedia"
	},{
	titulo: "titulo5",
	genero: "comedia",
	imagen: "naruto2.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion comedia"
	},{
	titulo: "titulo6",
	genero: "comedia",
	imagen: "naruto2.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion comedia"
	},{
	titulo: "titulo7",
	genero: "accion",
	imagen: "naruto3.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion accion"
	},{
	titulo: "titulo8",
	genero: "accion",
	imagen: "naruto3.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion accion"
	},{
	titulo: "titulo9",
	genero: "accion",
	imagen: "naruto3.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion accion"
	},{
	titulo: "titulo10",
	genero: "aventura",
	imagen: "naruto4.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion aventura"
	},{
	titulo: "titulo11",
	genero: "aventura",
	imagen: "naruto4.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion aventura"
	},{
	titulo: "titulo12",
	genero: "aventura",
	imagen: "naruto4.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion aventura"
	},{
	titulo: "titulo13",
	genero: "terror",
	imagen: "naruto1.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion terror"
	},{
	titulo: "titulo14",
	genero: "terror",
	imagen: "naruto1.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion terror"
	},{
	titulo: "titulo15",
	genero: "terror",
	imagen: "naruto1.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion terror"
	}]
};

var app = angular.module('video',[]);
app.controller('videoController',function($scope){
	$scope.busquedaGenero = function(genero){
		var peliculas = buscarJson(genero);
		$scope.peliculasBloque = [];
		$scope.peliculasBloque.push(obtenerTarjetas(0,3,peliculas));
		$scope.peliculasBloque.push(obtenerTarjetas(3,6,peliculas));
		console.log($scope.peliculasBloque)
	};
	$scope.busquedaTexto = function(){
		var pelicula = buscarPelicula(textoBusqueda.value);
		console.log(pelicula);
	};
	$scope.cargarVideo = function(titulo){
		var pelicula = buscarPelicula(titulo);
		console.log(pelicula);
		bloqueTarjetas.style.display = "none";
		bloqueVideo.style.display = "inline";
		video.firstElementChild.src = pelicula.video
		parrafoDescripcion.innerHTML = pelicula.descripcion 
		video.load();
	};
});

var categorias = document.querySelectorAll(".categ")
var tarjetas_titulo = document.querySelectorAll(".tituloPelicula");
var tarjetas_img = document.querySelectorAll(".imgPelicula");

var botonBusqueda = document.getElementById("botonBusqueda");
var textoBusqueda = document.getElementById("textoBusqueda");
var bloqueTarjetas = document.getElementById("bloqueTarjetas");
var bloqueVideo = document.getElementById("bloqueVideo");
var video = document.getElementById("video");
var parrafoDescripcion = document.getElementById("parrafoDescripcion");

//botonBusqueda.addEventListener("click",busqueda);
bloqueTarjetas.style.display = "inline";
bloqueVideo.style.display = "none";

function buscarGenero(genero){
	var peliculas = buscarJson(genero);
	cargarTarjetas(peliculas);
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
		tarjetas_img[i].src = "../images/" + peliculas[i].imagen;
	}
}

function cargarVideo(titulo){
	console.log(titulo.innerHTML);
	var pelicula = buscarPelicula(titulo.innerHTML);
	console.log(pelicula);
	bloqueTarjetas.style.display = "none";
	bloqueVideo.style.display = "inline";
	video.firstElementChild.src = pelicula.video
	parrafoDescripcion.innerHTML = pelicula.descripcion 
	video.load();
}

function busqueda(){
	buscarPelicula(textoBusqueda.value);
}

function buscarPelicula(titulo){
	console.log("Buscado Pelicula");
	var busqueda;
	for (var i = json.peliculas.length - 1; i >= 0; i--) {
		if(json.peliculas[i].titulo == titulo){
			busqueda = json.peliculas[i]
			return busqueda
		}
	}
}

function cargarTarjetasAngular(peliculas){
	console.log("Cargando Pelicuals Angular");
	console.log(peliculas);
	var peliculasBloque = [];
	var peliculasFila = [];
	console.log(peliculasFila)
	for (var i = 0; i < peliculas.length; i++) {
		peliculasFila.push(peliculas[i]);
		if((i+1)%3 == 0){
			console.log("Modulo" + (i+1));
			console.log(peliculasFila.length);
			console.log(peliculasFila);
			peliculasBloque.push(peliculasFila);
		}
	}
	return peliculasBloque;
}

function obtenerTarjetas(rangom,rangoM,peliculas){
	var peliculasFila = [];
	for (var i = rangom; i < rangoM; i++) {
		peliculasFila.push(peliculas[i]);
	}
	return peliculasFila;
}