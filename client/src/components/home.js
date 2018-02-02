import React, { Component } from 'react';
import Content from './content';
import Navbar from './navbar';

class Home extends Component {
    
    render() {
        return (
            <div>
            	<Navbar />
                <Content />
            </div>
        );
    }
}

export default Home;