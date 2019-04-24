import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './SocialMedia.css';

const socialMedias = (props) => {
    return (
        <div className="redesSociais">
            <a href="https://www.facebook.com/guilherme.tomazoni.5">
                <FontAwesomeIcon className="facebook" icon={faFacebook} color="white"></FontAwesomeIcon>
            </a> 
            <a href="https://github.com/GuiTomazoni">
                <FontAwesomeIcon className="github" icon={faGithub} color="white"></FontAwesomeIcon>
            </a>
            <a href="https://www.instagram.com/oguitomazoni/?hl=pt-br">
                <FontAwesomeIcon className="instagram" icon={faInstagram} color="white"></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/in/guilherme-tomazoni-111824170/">
                <FontAwesomeIcon className="linkedin" icon={faLinkedin} color="white"></FontAwesomeIcon>
            </a>
        </div>  

    )}

    export default socialMedias;