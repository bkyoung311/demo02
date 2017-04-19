import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import './Home.css';

const Home = () => {
    return (
        <div className='Home'>
            <div className='title'>
                Lorem ipsum dolor sit amet, consequat sed earum libero nam et amet, lacus ut tellus dictum neque. Consectetuer non arcu tellus felis dolor aenean, nec ut aliquam et et, parturient velit sed. 
            </div>
            <div>
                <Link to = '/select'>
                <Button className="startButton">
                    시작해보아요
                </Button></Link>
            </div>
        </div>
    );
};

export default Home;