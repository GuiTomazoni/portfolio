import React from 'react';
import './Header.css';
import Foto from '../Foto/Foto';
import SocialMedias from '../SocialMedias/SocialMedia';


const header = (props) => {
    return (
    <div className='background-cover containerCall2Action' fluid>
      <Foto />
      <p> Oi, eu sou o Guilherme </p>
      <SocialMedias />
      
    </div>  
    )}

    export default header;