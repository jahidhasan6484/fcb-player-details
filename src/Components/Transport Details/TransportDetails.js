import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import data from '../Data/data.json';

const TransportDetails = () => {
    const { Tid } = useParams();

    const selectedTransport = data.find(transport => transport.Tid == Tid)

    const [transportDetail, setTransportDetail] = useState({});

    useEffect(() => {
        setTransportDetail(data);
    }, [])

    const { name, photo } = selectedTransport;

    return (
        <div className="container my-5" width="2rem">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={photo} alt=""  />
                </div>
                <div className="col-md-6 mt-5">
                    <h3 className="text-dark">{name}</h3>
                    <br/>
                    <Button as={Link} to="/destination" variant="primary">Book a Ticket</Button>
                </div>
            </div>
        </div>
    );
};

export default TransportDetails;