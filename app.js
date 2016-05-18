var express = require ('express');
var app = express();

app.use(express.static(__dirname +'/app'));

app.listen(process.env.PORT || 3000, function(){
	console.log('running',this.address().port, app.settings.env);
});