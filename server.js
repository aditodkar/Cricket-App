const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

matches = require('./models/matches');

mongoose.Promise = global.Promise;
mongoose.connection.openUri('mongodb://localhost:27017/IPL');
mongoose.set('debug', true);

app.get('/', (req, res) => {
  res.send('Please use /api/matches');
});

//Get all matches stats
app.get('/api/matches', (req, res) =>{

	matches.find({}).then(eachOne => {
		
		res.json(eachOne);
	
	});

});

//Get a particular match stats
app.get('/api/match/:match_id', (req, res) =>{

	let match = req.params.match_id;

	matches.findOne({id: parseInt(match)}).then(Match =>{

		res.json(Match);
	});

});



const port = 5000;

app.listen(port);
console.log('Running on port 5000....');
