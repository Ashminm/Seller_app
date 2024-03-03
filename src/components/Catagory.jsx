import React, { useState } from "react";
import { Button, Form, Modal, ToastContainer } from "react-bootstrap";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { addCatagory } from "../services/allApis";


function Catagory() {
    const [catagory, setCatagory] = useState({
        id: "",
        name: "",
        thumbnail: "",
    });

    const handleCatagoryDetails = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setCatagory({ ...catagory, [name]: value });
    };

    const uploadCatagory=async()=>{
        const {id,caption,thumbnail}=catagory
        if(!id || !caption || !thumbnail){
          toast.warning("please fill in the Catagory Detailse!!")
        }
        else{
          let response=await addCatagory(catagory)
          // console.log(response)
          if(response.status >= 200 || response.status<300){
            setShow(false)
            toast.success("New Catagory Uploaded!")
          }
          else{
            toast.error("Video Catagry Faild!!!")
          }
      }
        
        
      }

    console.log(catagory);
    console.log(uploadCatagory);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="row text-center h-100">
                <span class="material-symbols-outlined fw-bold" style={{ fontSize: "100px" }} onClick={handleShow}>
                    add_circle
                </span>
                <span>Add Catagory</span>
            </div>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Catagory</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product ID"
                                className="border-success"
                                name="id"
                                onChange={(e) => handleCatagoryDetails(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Product name"
                                className="border-success"
                                name="name"
                                onChange={(e) => handleCatagoryDetails(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product image URL"
                                className="border-success"
                                name="thumbnail"
                                onChange={(e) => handleCatagoryDetails(e)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={uploadCatagory}>Add Catagory</Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </>
    );
}

export default Catagory;
