import React from 'react';
import './Navigate.css';

import { Link } from 'react-router-dom';

class Navigate extends React.Component {


    render(){
        return (
            <div className='Navigate'>
                <h1> {this.props.question} </h1>
                <p>
                    <Link to={ this.props.link1 }><button>{this.props.button1}</button></Link>
                    <Link to={ this.props.link2 }><button>{this.props.button2}</button></Link>
                </p>
            </div>
        );
    }
};

export default Navigate;