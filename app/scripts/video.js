var json = {
	peliculas : [{
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
app.controller('videoController',function($scope,$location,myService,$http,dbpeliculas){
	$scope.busquedaGenero = function(genero){
		dbpeliculas.searchGenre(genero).then(function successCallback(response){	
			console.log(response.data);
			var peliculas = response.data;
			$scope.peliculasBloque = [];
			$scope.peliculasBloque.push(myService.obtenerTarjetas(0,3,peliculas));
			$scope.peliculasBloque.push(myService.obtenerTarjetas(3,6,peliculas));
			$location.path('/busquedaVideo');
			console.log($scope.peliculasBloque)
		},function errorCallback(response){
			console.log("Error al buscar por genero");
		});		
	};
	$scope.busquedaTexto = function(){
		dbpeliculas.searchMovie($scope.textoBusqueda).then(function successCallback(response){	
			console.log(response.data);
			var peliculas = response.data;
			$scope.peliculasBloque = [];
			$scope.peliculasBloque.push(myService.obtenerTarjetas(0,3,peliculas));
			$scope.peliculasBloque.push(myService.obtenerTarjetas(3,6,peliculas));
			$location.path('/busquedaVideo');
		},function errorCallback(response){
			console.log("Error al buscar pelicula");
		});
	};	
});
app.controller('busquedaVideoController',function($scope,$location){
	$scope.cargarVideo = function(tarjeta){
		$location.path('/reproduccionVideo/'+tarjeta.video+'/'+tarjeta.descripcion);
	};
});
app.controller('reproduccionVideoController',function($scope,$routeParams){
	console.log($routeParams.src)
	console.log($routeParams.descripcion)
	$scope.src = $routeParams.src;
	$scope.descripcion = $routeParams.descripcion;
});

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

app.service('myService',function(){
	this.obtenerTarjetas = function(rangom,rangoM,peliculas){
		while(peliculas.length < rangoM){
			rangoM = rangoM - 1;
		}
		var peliculasFila = [];
		for (var i = rangom; i < rangoM; i++) {
			peliculasFila.push(peliculas[i]);
		}
		return peliculasFila;	
	}
});

app.factory('dbpeliculas',function($http){
	var dbpelicula = {
		getMovies: function(){
			return $http.get('http://localhost:3000/api/peliculas');
		},
		searchMovie: function(pelicula){
			return $http.get('http://localhost:3000/api/pelicula',{
				params: {
					titulo : pelicula
				}
			});
		},
		searchGenre: function(genero){
			return $http.get('http://localhost:3000/api/genero',{
				params: {
					genero : genero
				}
			});
		}
	};
	return dbpelicula;
});
