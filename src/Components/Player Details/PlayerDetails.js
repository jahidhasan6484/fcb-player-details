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

    const darkBlue = {
        color: "darkBlue"
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={photo} alt="" />
                </div>
                <div className="col-md-6 mt-5">
                    <h3 style={darkBlue}>{jersey_number} {name}</h3>
                    <h4>Age: {age}</h4>
                    <br /><br />
                    <h5>Position: {position}</h5>
                    <h5>National Team: {national_team}</h5>
                    <h5>Footed: {footed}</h5>
                    <h5>Weekly Wages: € {weekly_wages}</h5>
                    <h5>Annual Salary: € {annual_salary}</h5>
                </div>
            </div>
        </div>
    );
};

export default PlayerDetails; <h1>This is player details</h1>