//Tayla Orsmond u21467456

import React from 'react';
import Icon from '../img/icon.svg';

//Portfolio page
export class Portfolio extends React.Component {
    render() {
        return (
            <div className='row m-0'>
                <div className='col-2 offset-2'>
                    <div className='small'>Welcome to my</div>
                    <h1 className='display-3'>Portfolio</h1>
                </div>
                <div className='col-1'>
                    <img src={Icon} alt='Icon' className='img-fluid'/>
                </div>
                <div className='col-8 offset-2'>
                    <p>This portfolio was designed as part of my second-year BIS multimedia module VIO 202. It was created to combine my theme 2 and 3 projects from this year into a clean, cohesive website that is an enjoyable viewing experience for people and shows off the hard work I put into these projects, as well as give a little insight into myself.</p>
                    <p>The theme is based on my comic, Afterlife, which is showcased here as a motion comic.</p>
                    <div className='d-flex mx-5 p-5 justify-content-between'>
                        <a href='#infographic'><span className='text-tertiary'>My interactive infographic</span></a>
                        <a href='#comic'><span className='text-quaternary'>My motion comic</span></a>
                    </div>
                </div>
                <div className='col-8 offset-2'>
                    
                </div>
            </div>
        );
    }
}