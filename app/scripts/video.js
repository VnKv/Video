var json = {
	peliculas : [{
	titulo: "El Viaje de Chihiro 1",
	genero: "terror",
	imagen: "chihiro.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion terror"
	},{
	titulo: "El Viaje de Chihiro 2",
	genero: "terror",
	imagen: "chihiro.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion terror"
	},{
	titulo: "El Viaje de Chihiro 3",
	genero: "terror",
	imagen: "chihiro.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion terror"
	},{
	titulo: "FullMetal Alchemist 4",
	genero: "comedia",
	imagen: "fullmetal.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion comedia"
	},{
	titulo: "FullMetal Alchemist 5",
	genero: "comedia",
	imagen: "fullmetal.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion comedia"
	},{
	titulo: "FullMetal Alchemist 6",
	genero: "comedia",
	imagen: "fullmetal.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion comedia"
	},{
	titulo: "Kyoukai no Kanata 7",
	genero: "accion",
	imagen: "kyoukai.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion accion"
	},{
	titulo: "Kyoukai no Kanata 8",
	genero: "accion",
	imagen: "kyoukai.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion accion"
	},{
	titulo: "Kyoukai no Kanata 9",
	genero: "accion",
	imagen: "kyoukai.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion accion"
	},{
	titulo: "Naruto 10",
	genero: "aventura",
	imagen: "naruto1.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion aventura"
	},{
	titulo: "Naruto 11",
	genero: "aventura",
	imagen: "naruto1.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion aventura"
	},{
	titulo: "Naruto 12",
	genero: "aventura",
	imagen: "naruto1.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion aventura"
	},{
	titulo: "El Viaje de Chihiro 13",
	genero: "terror",
	imagen: "chihiro.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion terror"
	},{
	titulo: "El Viaje de Chihiro 14",
	genero: "terror",
	imagen: "chihiro.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion terror"
	},{
	titulo: "El Viaje de Chihiro 15",
	genero: "terror",
	imagen: "chihiro.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion terror"
	},{
	titulo: "FullMetal Alchemist 16",
	genero: "comedia",
	imagen: "fullmetal.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion comedia"
	},{
	titulo: "FullMetal Alchemist 17",
	genero: "comedia",
	imagen: "fullmetal.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion comedia"
	},{
	titulo: "FullMetal Alchemist 18",
	genero: "comedia",
	imagen: "fullmetal.jpg",
	video: "toradora2.mp4",
	descripcion: "Descripcion comedia"
	},{
	titulo: "Kyoukai no Kanata 19",
	genero: "accion",
	imagen: "kyoukai.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion accion"
	},{
	titulo: "Kyoukai no Kanata 20",
	genero: "accion",
	imagen: "kyoukai.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion accion"
	},{
	titulo: "Kyoukai no Kanata 21",
	genero: "accion",
	imagen: "kyoukai.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion accion"
	},{
	titulo: "Naruto 22",
	genero: "aventura",
	imagen: "naruto1.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion aventura"
	},{
	titulo: "Naruto 23",
	genero: "aventura",
	imagen: "naruto1.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion aventura"
	},{
	titulo: "Naruto 24",
	genero: "aventura",
	imagen: "naruto1.jpg",
	video: "toradora3.mp4",
	descripcion: "Descripcion aventura"
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