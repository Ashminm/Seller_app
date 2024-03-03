import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function View() {
    return (
        <div className="pt-5">
            <div className="text-center pb-4">
                <h2>Catagories</h2>
            </div>

            <div className="d-flex justify-content-center align-items-center m-1 mb-5 pb-5">
                <Row>
                    <Col sm="12" md="3" className="p-2">
                        <Link to={"/product"} className="text-decoration-none">
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col sm="12" md="3" className="p-2">
                        <Link to={"/product"} className="text-decoration-none">
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col sm="12" md="3" className="p-2">
                        <Link to={"/product"} className="text-decoration-none">
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                    <Col sm="12" md="3" className="p-2">
                        <Link to={"/product"} className="text-decoration-none">
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col sm="12" md="3" className="p-2">
                        <Link to={"/product"} className="text-decoration-none">
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col sm="12" md="3" className="p-2">
                        <Link to={"/product"} className="text-decoration-none">
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col sm="12" md="3" className="p-2">
                        <Link to={"/product"} className="text-decoration-none">
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col sm="12" md="3" className="p-2">
                        <Link to={"/product"} className="text-decoration-none">
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default View;
