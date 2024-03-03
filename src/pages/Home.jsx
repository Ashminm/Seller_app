import React,{useState} from "react";
import { Col, Row } from "react-bootstrap";
import AddProduct from "../components/AddProduct";
import Catagory from "../components/Catagory";
import View from "../components/View";

function Home() {
   
    return (
        <>
            <div className="m-5">
                <h2>Welcome to User</h2>
                <Row className="mx-3 mt-5 mb-5 p-3">
                    <Col md="3 p-3 shadow">
                        <Catagory />
                    </Col>

                    <Col md="9 p-3 shadow">
                        <AddProduct />
                    </Col>

                    <Col md="12 p-3 ">
                        <View />
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Home;
