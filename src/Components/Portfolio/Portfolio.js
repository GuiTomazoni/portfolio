import React from 'react';
import { Card } from "react-bootstrap";
import projeto1 from "../../Assets/projeto1.jpg";
import projeto2 from "../../Assets/projeto2.jpg";
import projeto3 from "../../Assets/projeto3.jpg";
import './Portfolio.css';

const portfolio = (props) => {
return(
    <div className="backgroundPortfolio">
        <h2 className="centraliza">Meus projetos</h2>
        <div className="cards">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={projeto1} />
                <Card.Body className="centraliza">
                    <Card.Title>Projeto DW</Card.Title>
                    <Card.Text>
                        Um projeto final com o objetivo de criar um site portfólio.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={projeto2} />
                <Card.Body className="centraliza">
                    <Card.Title>Pentest</Card.Title>
                    <Card.Text>
                        Projeto pessoal focado em testes de invasão.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={projeto3} />
                <Card.Body className="centraliza">
                    <Card.Title>Sistema de estoque</Card.Title>
                    <Card.Text>
                        Projeto pessoal feito para uma loja de móveis da família.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </div>
)
}

export default portfolio;