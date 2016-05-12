
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
	}]
};

var app = angular.module("pelicula",[]);


app.controller('peliculaController', function($scope, $location){
	$scope.buscarGenero = function(genero){
		var peliculas = buscarJson(genero);
		$scope.peliculasBloque=[];
		$scope.peliculasBloque = (obtenerTarjetas(0,3,peliculas));
		console.log($scope.peliculasBloque);
	};

	$scope.usuarioValidado= {};
	$scope.usuarioValidado.name ="kv.123@gmail.com";
	$scope.usuarioValidado.pass = "123";
	$scope.usuario= {};
	$scope.usuario.name ="";
	$scope.usuario.pass = "";
	var logeado = "";

	$scope.login = function(){
		if($scope.usuario.name === $scope.usuarioValidado.name && $scope.usuario.pass === $scope.usuarioValidado.pass){
			//$location.url("C:\Vane\Universidad\Septimo Semestre\Certificacion_III\Certificacion3\app\views");
			$location.url.href = "views/video.html";
			console.log("Bien");
			logeado = true;
		}
		else{
			$scope.usuario.name = "Error";
		}
		
	}	

});

var categorias = document.querySelectorAll(".categ")
var tarjetas_titulo = document.querySelectorAll(".tituloPelicula");
var tarjetas_img = document.querySelectorAll(".imgPelicula");


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
	console.log("CargandoPeliculas Angular")
	for (var i = peliculas.length - 1; i >= 0; i--) {
		tarjetas_titulo[i].innerHTML = "";
		tarjetas_titulo[i].innerHTML = peliculas[i].titulo;
		tarjetas_img[i].src= "";
		tarjetas_img[i].src = "images/" + peliculas[i].imagen;
	}
}
function obtenerTarjetas(rangom, rangoM, peliculas){
	var peliculasFila = [];
	for (var i = rangom ; i < rangoM; i++) {
		peliculasFila.push(peliculas[i]);
	};
	return peliculasFila;
}