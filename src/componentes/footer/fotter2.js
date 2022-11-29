import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faWhatsapp, faGoogle} from '@fortawesome/free-brands-svg-icons';
import "./footer.css"

const Footer = () =>{
    return(
        <footer class="footer">
        <div class="footer__content">
            <h3>Placas atermicas</h3>
            <ul class="redes">
                <li><a href="https://api.whatsapp.com/send?phone=541166716179" class="redes__whatsapp"><FontAwesomeIcon icon={faWhatsapp} className="i" /></a></li>
                <li><a href="https://www.instagram.com/" class="redes__instagram"><FontAwesomeIcon icon={faInstagram} className="i" /></a></li>
                <li><a href="https://www.gmail.com/" class="redes__gmail"><FontAwesomeIcon icon={faGoogle} className="i"/></a></li> 

            </ul>
            <div class="footer__copy">
                <p>Copyright &copy;2022 <span>Placas atermicas</span></p>
            </div>
        </div>
        </footer>
    );
}
export default Footer;