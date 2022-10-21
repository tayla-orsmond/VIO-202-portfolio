//Tayla Orsmond u21467456

import React from 'react';

//react icons
import { FaBars } from 'react-icons/fa';

const style_ = {
    zIndex: 100,
    position: "fixed",
    width: "100%",
}
//Navigation
class Navigation extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg" style={style_}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">Tayla Orsmond</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><FaBars /></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end align-items-end p-1" id="navbarNavDropdown">
                        <ul className="navbar-nav d-flex align-items-end ">
                            <li className="nav-item mx-2">
                                <a className="nav-link" aria-current="page" data-menuanchor="home" href="#home">Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" data-menuanchor="portfolio" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" data-menuanchor="infographic" href="#infographic"><span className="text-tertiary">Interactive</span><br/> Infographic</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" data-menuanchor="comic" href="#comic"><span className="text-quaternary">Motion</span><br/> Comic</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" data-menuanchor="about" href="#about">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;