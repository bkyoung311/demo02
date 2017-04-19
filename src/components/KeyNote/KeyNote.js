import React from 'react';
import './KeyNote.css';

class KeyNote extends React.Component {
    render(){
        return (
            <div className='KeyNote'>
                <h2>{ this.props.title }</h2>
                <p>
                    {this.props.content}
                </p>
            </div>
        );
    }
};

export default KeyNote;