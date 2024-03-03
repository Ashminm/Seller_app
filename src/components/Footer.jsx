import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="container">
            <hr />
            <div style={{ width: "100%", height: "100%" }}>
                <Row className="p-3">
                    <Col md="2">
                        <h6 className="pb-2 ">Seller With Seller Shield</h6>
                        <p style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est, ipsum error reiciendis.
                        </p>
                    </Col>
                    <Col md="2" className="d-flex flex-column">
                        <h6>Selling Program</h6>
                        <Link to={"https://react.dev/"} className="text-decoration-none text-dark">
                            React
                        </Link>
                        <Link to={"https://react-bootstrap.netlify.app/"} className="text-decoration-none text-dark">
                            React-Bootstrap
                        </Link>
                        <Link to={"https://fontawesome.com/kits"} className="text-decoration-none text-dark">
                            Fontawesome
                        </Link>
                        <Link to={"https://fonts.google.com/"} className="text-decoration-none text-dark">
                            Google-Fonts
                        </Link>
                    </Col>
                    <Col md="2" className="d-flex flex-column">
                        <h6>Brands</h6>
                        <Link to={"https://react.dev/"} className="text-decoration-none text-dark">
                            React
                        </Link>
                        <Link to={"https://react-bootstrap.netlify.app/"} className="text-decoration-none text-dark">
                            React-Bootstrap
                        </Link>
                        <Link to={"https://fontawesome.com/kits"} className="text-decoration-none text-dark">
                            Fontawesome
                        </Link>
                        <Link to={"https://fonts.google.com/"} className="text-decoration-none text-dark">
                            Google-Fonts
                        </Link>
                    </Col>
                    <Col md="2" className="d-flex flex-column">
                        <h6>Resources</h6>
                        <Link to={"https://react.dev/"} className="text-decoration-none text-dark">
                            React
                        </Link>
                        <Link to={"https://react-bootstrap.netlify.app/"} className="text-decoration-none text-dark">
                            React-Bootstrap
                        </Link>
                        <Link to={"https://fontawesome.com/kits"} className="text-decoration-none text-dark">
                            Fontawesome
                        </Link>
                        <Link to={"https://fonts.google.com/"} className="text-decoration-none  text-dark">
                            Google-Fonts
                        </Link>
                    </Col>
                    <Col md="2" className="d-flex flex-column">
                        <h6>Tools</h6>
                        <Link to={"https://react.dev/"} className="text-decoration-none text-dark">
                            React
                        </Link>
                        <Link to={"https://react-bootstrap.netlify.app/"} className="text-decoration-none text-dark">
                            React-Bootstrap
                        </Link>
                        <Link to={"https://fontawesome.com/kits"} className="text-decoration-none text-dark">
                            Fontawesome
                        </Link>
                        <Link to={"https://fonts.google.com/"} className="text-decoration-none text-dark">
                            Google-Fonts
                        </Link>
                    </Col>
                    <Col md="2" className="d-flex flex-column">
                        <h6>Guides</h6>
                        <Link to={"https://react.dev/"} className="text-decoration-none text-dark">
                            React
                        </Link>
                        <Link to={"https://react-bootstrap.netlify.app/"} className="text-decoration-none text-dark">
                            React-Bootstrap
                        </Link>
                        <Link to={"https://fontawesome.com/kits"} className="text-decoration-none text-dark">
                            Fontawesome
                        </Link>
                        <Link to={"https://fonts.google.com/"} className="text-decoration-none text-dark">
                            Google-Fonts
                        </Link>
                    </Col>
                </Row>
                <hr />
                <div className=" pb-3">
                    <img
                        src="https://sellersshield.com/wp-content/uploads/2023/05/Group-11.png"
                        className="ps-4 pt-3 "
                        width={130}
                        alt=""
                    />
                    <p className="text-end m-0 pb-4">
                        Copyright &#169; 2023 <span>Seller Shield</span>. All right reserved{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
