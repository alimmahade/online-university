import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import Header from '../Components/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col><Outlet></Outlet></Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Main;