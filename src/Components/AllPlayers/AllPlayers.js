import React, { useEffect, useState } from 'react';
import Body from '../Body/Body';
import data from '../Data/data.json';

const AllPlayers = () => {
    const [players, setPlayer] = useState([]);

    useEffect(() => {
        setPlayer(data);
    }, [])

    return (
        <div className="container mt-5">
            <div className="row">
                {
                    players.map(player => <Body player={player}></Body>)
                }
            </div>
        </div>
    );
};

export default AllPlayers;