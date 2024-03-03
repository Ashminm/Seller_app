import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function Brands() {
    return (
        <div style={{ backgroundColor: "#eaeded" }}>
            <div className="p-4 m-3 row justify-content-center">
                <div className="text-center">
                    <p>More on Brands on Seller Shield:</p>
                </div>
                <Row>
                    <Col sm="12" md="4" className="p-4">
                        <Card style={{ width: "100%", border: "none" }}>
                            <Card.Body>
                                <Card.Text className="h6">
                                    Amazon
                                    <i class="fa-solid fa-arrow-right fa-sm ps-2" style={{ color: "#000000" }}></i>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" md="4" className="p-4">
                        <Card style={{ width: "100%", border: "none" }}>
                            <Card.Body>
                                <Card.Text className="h6">
                                    Flipkart
                                    <i class="fa-solid fa-arrow-right fa-sm ps-2" style={{ color: "#000000" }}></i>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" md="4" className="p-4">
                        <Card style={{ width: "100%", border: "none" }}>
                            <Card.Body>
                                <Card.Text className="h6">
                                    Meesho
                                    <i class="fa-solid fa-arrow-right fa-sm ps-2" style={{ color: "#000000" }}></i>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <a target="_blank" className="text-center text-dark" href="#">
                    See more
                </a>
            </div>
        </div>
    );
}

export default Brands;
