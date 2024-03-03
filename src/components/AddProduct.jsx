import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function AddProduct() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="text-center">
                <Button className="my-5 w-75 h-100 p-4" variant="dark" onClick={handleShow}>
                    Add Product
                </Button>
            </div>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter product ID" className="border-success" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product name" className="border-success" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Price" className="border-success" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" placeholder="Enter product image URL" className="border-success" />
                        </Form.Group>
                        <Form.Label>Select Catagory</Form.Label>

                        <Form.Select aria-label="Default select example" className="border-success">
                            <option>Catagory</option>
                            <option value="1">Mobiles</option>
                            <option value="2">Fashion</option>
                            <option value="3">Grocery</option>
                            <option value="3">Appliances</option>
                            <option value="3">Laptops</option>
                        </Form.Select>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark">Add Product</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddProduct;
