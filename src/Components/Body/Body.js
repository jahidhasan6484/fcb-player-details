import { Card, Button } from 'react-bootstrap';
import React from 'react';
import './Body.css';
import { Link } from 'react-router-dom';

const Body = (props) => {
    const { name, photo, Tid } = props.transport;

    return (
        <div className="col-md-3 my-3">
            <Card>
                <Card.Img className="imgStyle" variant="top" src={photo} />
                <Card.Body>
                    <div className="text-center">
                        <h3 className="text-dark">{name}</h3>
                        <Button as={Link} to={`/allTransport/${Tid}`} variant="primary">View Details</Button>
                        <Button as={Link} to="/destination" variant="primary">Book a Ticket</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Body;