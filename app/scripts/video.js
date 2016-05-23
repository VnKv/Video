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
