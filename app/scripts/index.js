var app = angular.module("index",[]);
app.controller('indexController', function($scope,myService,dbpeliculas){
	
	dbpeliculas.searchGenre('terror').then(function successCallback(response){	
		var peliculas = response.data;
		$scope.peliculasBloque = [];
		$scope.peliculasBloque = myService.obtenerTarjetas(0,3,peliculas);
		console.log($scope.peliculasBloque)
	},function errorCallback(response){
		console.log("Error al buscar por genero");
	});
	$scope.buscarGenero = function(genero){
		dbpeliculas.searchGenre(genero).then(function successCallback(response){	
			console.log(response.data);
			var peliculas = response.data;
			$scope.peliculasBloque = [];
			$scope.peliculasBloque = myService.obtenerTarjetas(0,3,peliculas);
			console.log($scope.peliculasBloque)
		},function errorCallback(response){
			console.log("Error al buscar por genero");
		});	
	};
	$scope.iniciarSesion = function(){
		var usuario = {
			email: $scope.correo,
			password: $scope.contrasena
		}
		console.log(usuario);
		dbpeliculas.searchUser(usuario).then(function successCallback(response){	
			console.log(response);
			if(response.data.response){
				location.href='views/video.html';
			}else{
				alert('Correo o Contraseña incorrecta');
			}
		},function errorCallback(response){
			console.log("Error al iniciarSesion");
		});
	}	
	$scope.registrar = function(){
		console.log("Registrando");
		if($scope.registroContrasenaP == $scope.registroContrasenaV){
			var usuario = {
				email:$scope.registroCorreo,
				password:$scope.registroContrasenaP
			}
			dbpeliculas.createUser(usuario).then(function successCallback(response){	
				console.log(response.data);
				alert("nuevoUsuario");
				location.href = 'views/video.html';
			},function errorCallback(response){
				console.log("Error al crear");
			});			
		}else{
			alert("Las contraseñas no coinciden")
		}
	}
});

app.service('myService',function(){
	this.buscarJson = function(genero){
		var conjuntoGenero = [];
		for (var i = json.peliculas.length - 1; i >= 0; i--) {
			if(json.peliculas[i].genero == genero){
			conjuntoGenero.push(json.peliculas[i])
			}
		}
		return conjuntoGenero;
	}
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
		searchGenre: function(genero){
			return $http.get('/api/genero',{
				params: {
					genero : genero
				}
			});
		},
		createUser: function(usuario){
			return $http.post('/api/usuario',usuario);
		},
		searchUser: function(usuario){
			return $http.get('/api/inicioSesion',{
				params: {
					email : usuario.email,
					password : usuario.password
				}
			});
		}
	};
	return dbpelicula;
});