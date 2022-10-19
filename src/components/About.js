//Tayla Orsmond u21467456

import React from 'react';
import Me from '../img/Me.jpg';
//icons
import {SiHtml5} from '@react-icons/all-files/si/SiHtml5';
import {SiCss3} from '@react-icons/all-files/si/SiCss3';
import {SiJavascript} from '@react-icons/all-files/si/SiJavascript';
import {SiAdobephotoshop} from '@react-icons/all-files/si/SiAdobephotoshop';
import {SiAdobepremiere} from '@react-icons/all-files/si/SiAdobepremiere';
import {SiAdobeillustrator} from '@react-icons/all-files/si/SiAdobeillustrator';
import {SiNodeDotJs} from '@react-icons/all-files/si/SiNodeDotJs';
import {SiNetlify} from '@react-icons/all-files/si/SiNetlify';
import {SiFigma} from '@react-icons/all-files/si/SiFigma';
import {SiCplusplus} from '@react-icons/all-files/si/SiCplusplus';
import {SiJava} from '@react-icons/all-files/si/SiJava';
import {SiPhp} from '@react-icons/all-files/si/SiPhp';

//About page
export class About extends React.Component {
    render() {
        return (
            <div className='row m-0'>
                <div className='col-4 offset-2'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='small'>About</div>
                            <h1 className='display-5'>Me</h1>
                            <hr/>
                        </div>
                        <div className='col-12'>
                            <p>My name is Tayla Orsmond, I am currently a second-year BIS Multimedia student at the University of Pretoria. I am passionate about creating interactive and engaging content.</p>
                            <p>I am proficient in:</p>
                            <div className='d-flex flex-wrap justify-content-center'>
                                <SiHtml5 className='icon'/>
                                <SiCss3 className='icon'/>
                                <SiJavascript className='icon'/>
                                <SiAdobephotoshop className='icon'/>
                                <SiAdobepremiere className='icon'/>
                                <SiAdobeillustrator className='icon'/>
                                <SiNodeDotJs className='icon'/>
                                <SiNetlify className='icon'/>
                                <SiFigma className='icon'/>
                                <SiCplusplus className='icon'/>
                                <SiJava className='icon'/>
                                <SiPhp className='icon'/>
                            </div>
                            <p>I am an aspiring designer and web-developer in both front and back-end. I like cats.</p>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <img src={Me} alt='Me' className='img-fluid'/>
                </div>
            </div>
        );
    }
}