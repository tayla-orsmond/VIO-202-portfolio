//Tayla Orsmond u21467456

import React from 'react';
import { MouseParallax } from "react-just-parallax";

import Icon from '../img/icon.svg';
import BgImg from '../img/buildings.svg';
import BRight from '../img/building-right.svg';
import BLeft from '../img/building-left.svg';

const style_1 = {
    position: 'absolute',
    bottom: '-60px',
    width: '20%',
    left: '15%',
}
const style_2 = {
    position: 'absolute',
    bottom: '-60px',
    width: '20%',
    right: '25%',
}

//Infographic page
class Infographic extends React.Component {
    render(){
        return (
            <div className="row mx-0">
                <div className="col-3 offset-4">
                    <h1 className="display-5"><span className='text-tertiary'>Infographic</span></h1>
                    <hr/>
                    <p>My Theme 2 Project was an interactive infographic that shows some of the background of my comic's story and characters.  I created interactive animated components using Rive objects, and parallax scrolling using vanilla js.</p>
                </div>
                <div className='col-1 offset-5 d-inline-flex align-items-center'>
                    <a href="https://vio-infographic.netlify.app/" className='btn btn-primary' style={{zIndex: 10}}>View</a>
                    <img src={Icon} alt="Icon" style={{maxWidth: "60%"}} />
                </div>
                <MouseParallax 
                isAbsolutelyPositioned={true}
                zIndex={2}
                strength={0.1}
                shouldPause={true}
                shouldResetPosition={true}>
                    <img src={BRight} alt="Building-right" style={style_1}/>
                </MouseParallax>
                <MouseParallax
                isAbsolutelyPositioned={true}
                zIndex={2}
                strength={0.1}
                shouldPause={true}
                shouldResetPosition={true}>
                    <img src={BLeft} alt="Building-left" style={style_2}/>
                </MouseParallax>
                <MouseParallax
                isAbsolutelyPositioned={true}
                zIndex={0}
                strength={0.05}
                shouldResetPosition={true}>
                    <img src={BgImg} className="img-fluid" alt="buildings in the background"/>
                </MouseParallax>
            </div>
        );
    }
}

export default Infographic;