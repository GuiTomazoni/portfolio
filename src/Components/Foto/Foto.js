import React from "react";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import fotoPerfil from "../../Assets/fotoPerfil.jpg";
import "./Foto.css";

const foto = props => {
  return (
    <React.Fragment>
      <Image className="perfil" src={fotoPerfil} roundedCircle />
    </React.Fragment>
  );
};

export default foto;
