//Tayla Orsmond u21467456

import React from 'react';
//logo
import Logo  from '../img/logo.svg';
import Icon from '../img/icon.svg';

//Home page
class Home extends React.Component {
    render(){
        return(
            <div className="row m-0">
                <div className="col-5 offset-2">
                    <h1 className="display-2">Tayla Orsmond</h1>
                </div>
                <div className="col-1">
                    <img src={Icon} alt="Icon" className="img-fluid"/>
                </div>
                <div className="col-8 offset-3">
                    <h2><span className="text-tertiary">Graphic Designer</span> & <span className="text-quaternary">Web Developer</span></h2>
                </div>
                <div className="col-5 offset-3">
                    <h2 className="text-right mx-4">& Author of</h2>
                    <img src={Logo} alt="logo" className="img-fluid" />
                </div>
            </div>
        );
    }
}

export default Home;