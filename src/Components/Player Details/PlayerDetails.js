import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import data from '../Data/data.json';

const PlayerDetails = () => {
    const { jersey_number } = useParams();

    const selectedPlayer = data.find(player => player.jersey_number == jersey_number)

    const [playerDetail, setPlayerDetail] = useState({});

    useEffect(() => {
        setPlayerDetail(data);
    }, [])

    const { name, age, photo, position, footed, national_team, weekly_wages, annual_salary } = selectedPlayer;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={photo} alt="" />
                </div>
                <div className="col-md-6">
                    <h3>{jersey_number} {name}</h3>
                    <h4>Age: {age}</h4>
                    <br /><br />
                    <p>Position: {position}</p>
                    <p>National Team: {national_team}</p>
                    <p>Footed: {footed}</p>
                    <p>Weekly Wages: € {weekly_wages}</p>
                    <p>Annual Salary: € {annual_salary}</p>
                </div>
            </div>
        </div>
    );
};

export default PlayerDetails; <h1>This is player details</h1>