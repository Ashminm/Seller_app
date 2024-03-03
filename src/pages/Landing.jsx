import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LandCard from "../components/LandCard";
import Brands from "../components/Brands";

function Landing() {
    return (
        <>
            <div className="container">
                <Row className="align-items-center justify-content-center pt-3">
                    <Col sm="12 h1" md="6">
                        <h1 style={{ fontSize: "70px", fontWeight: "700" }}>Welcome to Seller Shield</h1>
                        <h6>
                            Lorem ipsum dolor sit amet, consectetur aexc magni tempora culpar. nsectetur aexc magni tempora
                            culpa
                        </h6>
                        <Link to={"/home"}>
                            <button className="btn bg-warning rounded mt-4 pt-3 pb-3 ps-5 pe-5 fw-bold shadow">
                                Start Selling
                            </button>
                        </Link>
                        <Link to={"/"}>
                            <button
                                className="btn bg-white rounded border border-dark mt-4 pt-3 pb-3 ps-5 pe-5 ms-5 fw-bold shadow "
                                id="Show_more"
                            >
                                Show more
                            </button>
                        </Link>
                    </Col>
                    <Col sm="12 pt-3" md="6">
                        <img
                            src="https://m.media-amazon.com/images/G/01/sell/images/homepage-hero-image-03-sm.png"
                            style={{ width: "100%" }}
                            alt=""
                        />
                    </Col>
                </Row>
                <div>
                    <LandCard />
                </div>
                <div>
                    <Brands />
                </div>
            </div>
        </>
    );
}

export default Landing;
