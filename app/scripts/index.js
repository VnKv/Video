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

var buttonReg = document.getElementById('inicioSesion');
var email = document.getElementById('inputEmail');
var password = document.getElementById('inputContrasena');

var categorias = document.querySelectorAll(".categ")
var tarjetas_titulo = document.querySelectorAll(".tituloPelicula");
var tarjetas_img = document.querySelectorAll(".imgPelicula");



buttonReg.onclick = function(){
	if(email.value == "kv.123@gmail.com" && password.value =="123"){
		console.log("views/video.html");
		location.href="views/video.html"; 
		return false;
	}
	else{
		alert('Correo electronico o Contraseña invalida');
	}
}

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
		tarjetas_img[i].src = "images/" + peliculas[i].imagen;
	}
}