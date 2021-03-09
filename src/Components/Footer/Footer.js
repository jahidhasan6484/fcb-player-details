import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {

    return (
        <Container className="text-center mt-5 mb-5">
            &copy; All right reserved {new Date().getYear()}
        </Container>
    );
};

export default Footer;