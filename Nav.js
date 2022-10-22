import React, { useState, useEffect } from 'react'
import Mainnave from './Mainnav.css';


function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                
                handleShow(true);

            } 
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");

        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
            className="nav_logo"
            src="https://24un5g1tp2uje1z4uwi8jbma-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/Netflix-Logo.png"
            alt="Netflix logo"
            />

            <img className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar logo"
            />

            

        </div>
           
    )
}

export default Nav
