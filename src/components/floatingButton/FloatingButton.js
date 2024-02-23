import "./FloatingButtonStyles.css"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSquareWhatsapp} from "@fortawesome/free-brands-svg-icons"


function FloatingButton(){
    // const handleWhatsAppClick = () => {
    //     const number = +919963526060;
    //     window.location.href = `whatsapp://send?phone=${number}`;
    // }
    return(
        <a 
            href="https://wa.me/+919963526060"
            target="_blank" rel="noopener noreferrer"
        ><FontAwesomeIcon className="floating-button" icon={faSquareWhatsapp}/></a>
        
    )
}

export default FloatingButton;