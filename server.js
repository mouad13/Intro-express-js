
var express = require ('express');
var app = express();
var bodyParser = require('bodyParser');

	app.use(express.static('public'));
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	var admin
	 ={
		login:'monlogin',
		mdp:'mon-mot-de-passe',
	}

	app.get('/',function(req,res){
		res.send('')
	});

	app.post('/auth',function(req,res){
		console.log(req);
		res.send('ok')
		if(admin.mdp === user.mdp && adim.loginc===cuser.login){
			res.send('Success');
			
		}

			res.send('Bad identifier or password')

	});


	app.listen(3300,function(){
		console.log('Run on port 3300')
	});

	
