import React from 'react';
import Featured from './featured';
import Matches from './matches';
import Meetplayers from './meetPlayers'
import Promotion from './promotion'

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <Matches/>
            <Meetplayers/>
            <Promotion/>
        </div>
    );
};

export default Home;