import React, { Component } from 'react';
import Matchinfo from './matchinfo';
import './content.css';
import Pagination from './pagination';


class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            matches: [],
            loading: true,
            callmatchinfo: false,
            matchid: '',
            start: 0,
            end: 16,
        };
    }


    componentDidMount() {
        fetch('api/matches')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({
                    matches: res,
                    loading: false
                });
            })
    }

    onChangePagination = (start, end) => {
        this.setState({
            start,
            end
        });
    };

    viewstats(matchid) {
        this.setState({
            callmatchinfo: true,
            matchid: matchid
        });
    }

    rendermatchinfo() {
        return <Matchinfo matchid={this.state.matchid} />
    }

    renderMatches() {
        return this.state.matches.slice(this.state.start, this.state.end).map(match => {
            return (
                <div className="col-lg-3">
                    <div id="content">
                        <p className="match">MATCH {match.id}</p>
                        <h4>{match.team1}</h4>
                        <p>VS</p>
                        <h4>{match.team2}</h4>
                        <div className="winner">
                            <h3>WINNER</h3>
                            <h4>{match.winner}</h4>
                        </div>
                        <div className="stats">
                            <button type="button" onClick={() => { this.viewstats(match.id) }} className="btn btn-primary">View Stats</button>
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {

        if (this.state.loading) {
            return <div>Loading...</div>
        }
        else if (this.state.callmatchinfo) {
            return <Matchinfo match_id={this.state.matchid} />
        }

        return (
            <div>
                <div className="row">
                    {this.renderMatches()}
                    {!this.state.callmatchinfo && <Pagination onChange={this.onChangePagination} />}
                </div>
                <div className="row">
                    {this.state.callmatchinfo ? this.rendermatchinfo() : ''}
                </div>
            </div>
        );
    }
}

export default Content;
