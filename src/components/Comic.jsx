//Tayla Orsmond u21467456

import React from 'react';
import Icon from '../img/icon.svg';

//Comic page
class Comic extends React.Component {
    render(){
        return (
            <div className="row mx-0 text-right">
                <div className="col-6 offset-1">
                    <iframe title="Frame 1 of my comic, Afterlife" style={{border: 0, margin: "0 auto", opacity: 0.8}} width="100%" height="540" src="https://rive.app/s/iLD027-o4U2XJg7uVyII9w/embed" allowFullScreen></iframe>
                </div>
                <div className="col-3">
                    <div className="p-5"></div>
                    <h1 className="display-5"><span className='text-quaternary'>Comic</span></h1>
                    <hr/>
                    <p>My Theme 3 project was a motion comic. The task was to create an interactive, animated version of our comics from first year. I used Rive canvases, css and vanilla js to create my animated panels. All of the sound I did myself.</p>
                    <div className='col-4 d-flex flex-wrap align-items-center justify-content-center'>
                        <img src={Icon} alt="Icon" style={{maxWidth: "60%"}} />
                        <a href="https://vio-motion-comic.netlify.app/" className='btn btn-secondary'>View</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comic;