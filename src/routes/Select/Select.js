import React from 'react';
import { BrowerRouter as Router, Route } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Select = ({history}) => {
    return (
        <div>
            <Button onClick={ ()=> {history.push('/main')} }> 위암 </Button>
            <button > 폐암 </button>
            <button> 대장암 </button>
            <button> 유방암 </button>
            <button> 간암 </button>
        </div>
    );
};

export default Select;