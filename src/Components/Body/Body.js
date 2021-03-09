import { Card, Button } from 'react-bootstrap';
import React from 'react';
import './Body.css';
import { Link } from 'react-router-dom';

const Body = (props) => {
    const { name, photo, position, jersey_number } = props.player;

    return (
        <div className="col-md-4 my-3">
            <Card>
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <div className="text-center">
                        <h3>{name}</h3>
                        <p>{position}</p>
                        <Button as={Link} to={`/allPlayer/${jersey_number}`} variant="dark">View Details</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Body;