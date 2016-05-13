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
var usuario = {
	correo:"e@g.com",
	contrasena:"asd"
}

var app = angular.module("index",[]);

app.controller('indexController', function($scope){
	
	var peliculas = buscarJson('comedia');
	$scope.peliculasBloque = [];
	$scope.peliculasBloque = obtenerTarjetas(0,3,peliculas);

	
	$scope.buscarGenero = function(genero){
		var peliculas = buscarJson(genero);
		$scope.peliculasBloque = [];
		$scope.peliculasBloque = obtenerTarjetas(0,3,peliculas);
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
	$scope.registrar = function(){
		console.log("Registrando");
		if($scope.registroContrasenaP == $scope.registroContrasenaV){
			var nuevoUsuario = {
				correo:$scope.registroCorreo,
				contrasena:$scope.registroContrasenaP
			}
			console.log(nuevoUsuario);
			location.href = 'views/video.html';
		}else{
			alert("Las contraseñas no coinciden")
		}
	}
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
