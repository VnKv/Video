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
var usuario = {
	correo:"e@g.com",
	contrasena:"asd"
}

var app = angular.module("index",[]);

app.controller('indexController', function($scope,$location,$window){
	$scope.buscarGenero = function(genero){
		var peliculas = buscarJson(genero);
		$scope.peliculasBloque = [];
		$scope.peliculasBloque = (obtenerTarjetas(0,3,peliculas));
		console.log($scope.peliculasBloque);
		
	};
	$scope.iniciarSesion = function(){
		if($scope.correo == usuario.correo && $scope.contrasena == usuario.contrasena){
			console.log($scope.correo);
			console.log($scope.contrasena);
			location.href='views/video.html';
		}else{
			alert('correo o contraseña incorrecta');
		}
	};
});

function buscarJson(genero){
	var conjuntoGenero = [];
	for (var i = json.peliculas.length - 1; i >= 0; i--) {
		if(json.peliculas[i].genero == genero){
			conjuntoGenero.push(json.peliculas[i])
		}
	}
	return conjuntoGenero;
}

function obtenerTarjetas(rangom, rangoM, peliculas){
	var peliculasFila = [];
	for (var i = rangom ; i < rangoM; i++) {
		peliculasFila.push(peliculas[i]);
	};
	return peliculasFila;
}