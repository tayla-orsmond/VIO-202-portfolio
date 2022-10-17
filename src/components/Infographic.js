//Tayla Orsmond u21467456

import React from 'react';
import Icon from '../img/icon.svg';
import BgImg from '../img/buildings.svg';
import BRight from '../img/building-right.svg';
import BLeft from '../img/building-left.svg';
//Infographic page
export class Infographic extends React.Component {
    render() {
        const style_ = {
            zIndex: 0,
            position: 'absolute',
            top: '0',
            width: '100vw',
        }
        const style_1 = {
            zIndex: 3,
            position: 'absolute',
            bottom: '0',
            width: '20%',
            left: '15%',
        }
        const style_2 = {
            zIndex: 3,
            position: 'absolute',
            bottom: '0',
            width: '20%',
            right: '25%',
        }
        return (
            <div className="row mx-0">
                <div className="col-4 offset-4" style={{zIndex: 2}}>
                    <h1 className="display-5"><span className='text-tertiary'>Infographic</span></h1>
                    <hr/>
                    <p>My Theme 2 Project was an interactive infographic that shows some of the background of my comic's story and characters.  I created interactive animated components using Rive objects, and parallax scrolling using vanilla js.</p>
                </div>
                <div className='col-1 offset-5 d-inline-flex align-items-center' style={{zIndex: 2}}>
                    <a href="https://vio-infographic.netlify.app/" className='btn btn-primary'>View</a>
                    <img src={Icon} alt="Icon" style={{maxWidth: "60%"}} />
                </div>
                <img src={BRight} alt="Building-right" style={style_1} />
                <img src={BLeft} alt="Building-left" style={style_2} />
                <img src={BgImg} className="img-fluid" alt="buildings in the background" style={style_}/>
            </div>
        );
    }
}