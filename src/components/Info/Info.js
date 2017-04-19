import React from 'react';
import './Info.css';

class Info extends React.Component {
    render(){
        return (
            <div className='Info'>
                <h2> {this.props.title} </h2>
                <p> {this.props.content} </p>
            </div>
        );
    }
};

export default Info;