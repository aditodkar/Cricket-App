import React, { Component } from 'react';
import './matchinfo.css';

class Matchinfo extends Component {
	constructor(props){
		super(props);
		this.state = {
			info:[],
			loading:true
		};
	}

	componentWillMount(){
		fetch(`api/match/${this.props.match_id}`)
			.then(res => res.json())
			.then(res => {
		    this.setState({
			info:res,
			loading:false
		    })
		})
	}

    render() {

        if (this.state.loading) {
                return <div>Loading...</div>
        }

        const {info} = this.state;

        return (
        <div>
            <div className="matchstats">
                <p className="match">MATCH {info.id}</p>
                <p className="season">Season {info.season}</p>
                <h1 className="title">{info.team1} VS {info.team2}</h1>
                <div className="winner">
                    <h2>WINNER</h2>
                    <h2>{info.winner}</h2>
                </div>
                <div className="info">
                <div className="toss">
                    <p>Toss winner : {info.toss_winner}</p>
                    <p>Toss decision : {info.toss_decision}</p>
                </div>
                <div className="venue">
                    <p>Venue : {info.venue}</p>
                    <p>umpire1 : {info.umpire1}</p>
                    <p>umpire2 : {info.umpire2}</p>
                </div>
                </div>
                <a href="/" class="btn btn-info btn-md" role="button">Go Back</a>
            </div>
        </div>
        );
    }
}

export default Matchinfo;
