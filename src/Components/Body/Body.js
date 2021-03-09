import { Card, Button } from 'react-bootstrap';
import React from 'react';
import './Body.css';
import { Link } from 'react-router-dom';

const Body = (props) => {
    const { name, photo, position, jersey_number } = props.player;

    const darkBlue = {
        color: "darkBlue"
    }
    const red = {
        color: "darkRed",
        fontWeight: "800px"
    }

    return (
        <div className="col-md-4 my-3">
            <Card>
                <Card.Img className="imgStyle" variant="top" src={photo} />
                <Card.Body>
                    <div className="text-center">
                        <h3 style={darkBlue}>{name}</h3>
                        <p style={red}>{position}</p>
                        <Button as={Link} to={`/allPlayer/${jersey_number}`} variant="primary">View Details</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Body;