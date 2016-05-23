var express = require ('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var schema = mongoose.Schema;
var uristring = 'mongodb://localhost/movies';

mongoose.connect(uristring,function(error,response){
	if(error){
		console.log('Error Connecting to: '+uristring+' --'+error);
	}else{
		console.log('Succeded connect to :'+uristring);
	}
});

app.use(express.static(__dirname +'/app'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extend':'true'})); //Parseo de los formularios
app.use(bodyParser.json()); //Parseo de todas las paginas que manajen json
app.use(bodyParser.json({'type':'application/vnd.api+json'})); //Otro tipo de json
app.use(methodOverride()); //Para el Delete y el Put

app.all('*',function(request,response,next){
	response.header('Access-Control-Allow-Origin',request.headers.origin);
	response.header('Access-Control-Allow-Methods','POST,GET,DELETE,OPTIONS');
	response.header('Access-Control-Max-Age','86400');
	response.header('Access-Control-Allow-Headers','X-Requested-With,X-HTTP-Method-Override,Content-type,Accept');
	next();
});

app.listen(process.env.PORT || 3000, function(){
	console.log('running',this.address().port, app.settings.env);
});

var peliculas = mongoose.model('peliculas',new schema(
{
	titulo: String,
	genero: String,
	imagen: String,
	video: String,
	descripcion: String
}
));

var usuarios = mongoose.model('usuarios',new schema(
{
	email: String,
	password : String
}
));

app.get('/api/peliculas',function(request,response){
	peliculas.find(function(error,peliculasList){
		if(error){
			response.send(error);
		}else{
			if(peliculasList.length > 0){
				response.send(peliculasList);	
			}else{
				response.send("Lista Vacia");	
			}
			
		}
	})
});

app.get('/api/pelicula',function(request,response){
	var query = {titulo: {$regex:request.query.titulo,$options:"i"}};
	peliculas.find(query,function(error,peliculasList){
		if(error){
			response.send(error);
		}else{
			if(peliculasList.length > 0){
				response.send(peliculasList);	
			}else{
				response.send("Lista Vacia");	
			}
			
		}
	})
});

app.get('/api/genero',function(request,response){
	var query = {genero: request.query.genero};
	peliculas.find(query,function(error,peliculasList){
		if(error){
			response.send(error);
		}else{
			if(peliculasList.length > 0){
				response.send(peliculasList);	
			}else{
				response.send("Lista Vacia");	
			}
			
		}
	})
});

app.post('/api/usuario',function(request,response){
	usuarios.create({
		email: request.body.email,
		password: request.body.password
	},function(error){
		if(error){
			response.send(error);
		}else{
			response.json({'response':true});
		}
		
	});
});

app.get('/api/inicioSesion',function(request,response){
	var query = {email: request.query.email, password:request.query.password};
	usuarios.find(query,function(error,userList){
		console.log(userList)
		if(error){
			response.send(error);
		}else{
			if(userList.length > 0){
				response.send({'response':true});	
			}else{
				response.send({'response':false});	
			}
		}
	})
});