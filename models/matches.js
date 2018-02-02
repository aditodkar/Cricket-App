const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const matchSchema = new Schema({
	
	match_id:{
		type:Number,
		required:true
	},

	season:{
		type:Number,
		required:true
	},

	city:{
		type:String,
		required:true
	},

	date:{
		type:Number
	},

	team1:{
		type:String,
		required:true
	},

	team2:{
		type:String,
		required:true
	},


	toss_winner:{
		type:String,
		required:true
	},

	toss_decision:{
		type:String,
		required:true
	},

	dl_applied:{
		type:Number
	},

	winner:{
		type:String,
		required:true
	},

	win_by_runs:{
		type:Number,
		required:true
	},

	win_by_wickets:{
		type:Number,
		required:true
	},

	player_of_match:{
		type:String,
		required:true
	},

	venue:{
		type:String,
		required:true
	},

	umpire1:{
		type:String,
		required:true
	},

	umpire2:{
		type:String,
		required:true
	},

	umpire3:{
		type:String
	}

});

const matches = mongoose.model('matches', matchSchema);

module.exports = matches;
