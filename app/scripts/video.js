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
var app = angular.module('video',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider.when('/busquedaVideo',{templateUrl:'busquedaVideo.html',controller:'busquedaVideoController'})
				  .when('/reproduccionVideo/:src/:descripcion',{templateUrl:'reproduccionVideo.html',controller:'reproduccionVideoController'})
});
app.controller('videoController',function($scope,$location){
	$scope.busquedaGenero = function(genero){
		var peliculas = buscarJson(genero);
		$scope.peliculasBloque = [];
		$scope.peliculasBloque.push(obtenerTarjetas(0,3,peliculas));
		$scope.peliculasBloque.push(obtenerTarjetas(3,6,peliculas));
		$location.path('/busquedaVideo');
		console.log($scope.peliculasBloque)
		console.log('Buscando Video')
	};
	$scope.busquedaTexto = function(){
		var pelicula = buscarPelicula($scope.textoBusqueda);
		console.log(pelicula);
	};	
});
app.controller('busquedaVideoController',function($scope,$location){
	$scope.cargarVideo = function(tarjeta){
		$location.path('/reproduccionVideo/'+tarjeta.video+'/'+tarjeta.descripcion);
	};
});
app.controller('reproduccionVideoController',function($scope,$routeParams){
	$scope.src = $routeParams.src;
	$scope.descripcion = $routeParams.descripcion;
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