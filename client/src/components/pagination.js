import React, { Component } from 'react';
import './pagination.css';

class Pagination extends Component {

	handleClick(val){
    this.setState({
        end:val*16,
        start:end-16
    });
    const end = val*16;
    this.props.onChange(end - 16, end);
	}

  render() {
  	
    return (
      <div>
        <div className="container">                 
  			  <ul className="pagination pagination-lg">
  			    <li><a href="#" onClick={this.handleClick.bind(this, 1)}>1</a></li>
  			    <li><a href="#" onClick={this.handleClick.bind(this, 2)}>2</a></li>
  			    <li><a href="#" onClick={this.handleClick.bind(this, 3)}>3</a></li>
  			    <li><a href="#" onClick={this.handleClick.bind(this, 4)}>4</a></li>
  			    <li><a href="#" onClick={this.handleClick.bind(this, 5)}>5</a></li>
  			  </ul>
  		  </div>
      </div>
    );
  }
}

export default Pagination;
