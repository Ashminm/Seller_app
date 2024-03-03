import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="position-sticky top-0" style={{ zIndex: "1" }}>
            <Navbar className="bg-white pt-3 pb-3">
                <Container>
                    <img
                        src="https://sellersshield.com/wp-content/uploads/2023/05/Group-11.png"
                        className="pe-3"
                        width={200}
                        alt=""
                    />
                    <div className="">
                        <Link to={"/"} className="text-dark pe-5 fw-bold Log_in">
                            Log In
                        </Link>
                        <Link to={"/home"}>
                            <button className="btn bg-warning rounded pt-2 pb-2 ps-4 pe-4 fw-bold shadow">
                                Start Selling
                            </button>
                        </Link>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
