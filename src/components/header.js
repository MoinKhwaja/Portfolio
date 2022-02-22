import React from 'react';
import './header.css';
import PDF from "./files/MoinKhwajaResume2022.pdf"

function Header(){
    return(
        <header>
            <nav className="navItems">
                <h4 className="home">moin.fun</h4>
                <h4 className="resume"><a href={PDF} target="_blank">Resume</a></h4>
            </nav>
        </header>
    )
}

export default Header