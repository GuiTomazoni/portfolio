import React from 'react';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Contact.css";

const contact = (props) => {
return(
    <div className="contato">
        <h2>Contato</h2>
        <Form className="campos">
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control className="centraliza" type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Fale comigo</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button as="input" type="submit" value="Enviar" />
        </Form>
    </div>
)
}

export default contact;