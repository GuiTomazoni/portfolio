import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const footer = (props) => {
return(
    <div className="footer">
        <FontAwesomeIcon className="whatsapp" icon={faWhatsapp} color="white"></FontAwesomeIcon>
        <p>Direitos reservados © Guilherme Tomazoni </p>
        <p></p>
    </div>
)
}

export default footer;