//Tayla Orsmond u21467456

import React from 'react';
import Me from '../img/Me.jpg';
import Icon from '../img/icon.svg';
//icons
import {SiHtml5} from 'react-icons/si';
import {SiCss3} from 'react-icons/si';
import {SiJavascript} from 'react-icons/si';
import {SiAdobephotoshop} from 'react-icons/si';
import {SiAdobepremierepro} from 'react-icons/si';
import {SiAdobeaftereffects} from 'react-icons/si';
import {SiAdobeillustrator} from 'react-icons/si';
import {SiNodedotjs} from 'react-icons/si';
import {SiNetlify} from 'react-icons/si';
import {SiFigma} from 'react-icons/si';
import {SiCplusplus} from 'react-icons/si';
import {SiJava} from 'react-icons/si';
import {SiPhp} from 'react-icons/si';
import {SiMysql} from 'react-icons/si';
import {SiReact} from 'react-icons/si';
import {SiGithub} from 'react-icons/si';
import {SiBootstrap} from 'react-icons/si';
import {SiJquery} from 'react-icons/si';


//About page
class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            skills: [
                {name: "HTML", icon: <SiHtml5 className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "CSS", icon: <SiCss3 className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "JavaScript", icon: <SiJavascript className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "Bootstrap", icon: <SiBootstrap className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "jQuery", icon: <SiJquery className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "PHP", icon: <SiPhp className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "MySQL", icon: <SiMysql className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "React", icon: <SiReact className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "Node.js", icon: <SiNodedotjs className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "C++", icon: <SiCplusplus className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "Java", icon: <SiJava className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "Photoshop", icon: <SiAdobephotoshop className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "Premiere Pro", icon: <SiAdobepremierepro className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "Illustrator", icon: <SiAdobeillustrator className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "After Effects", icon: <SiAdobeaftereffects className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "Netlify", icon: <SiNetlify className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "Figma", icon: <SiFigma className='icon' onMouseOver={this.changeToRandomColor}/>},
                {name: "GitHub", icon: <SiGithub className='icon' onMouseOver={this.changeToRandomColor}/>},
            ]
        }
        this.changeToRandomColor = this.changeToRandomColor.bind(this);
    }

    changeToRandomColor(e){
        let colors = ["#2b273d", "#FBFBFB", "#5e5972", "#9255A2", "#DF688C"];
        e.target.style.color = colors[Math.floor(Math.random() * colors.length)];
        // let randomColor = Math.floor(Math.random()*16777215).toString(16);
        // e.target.style.color = "#" + randomColor;
    }
    render(){
        return (
            <div className='row m-0'>
                <div className='col-3 offset-2'>
                    <img src={Me} alt='Tayla Orsmond' className='img-fluid'/>
                    <hr/>
                    <p>I am hard-working, and always willing to learn new skills and improve my knowledge.<br/>I have a keen eye for detail and design.</p>
                </div>
                <div className='col-5'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='small'>About</div>
                            <div className="d-flex">
                                <h1 className='display-5'>Me</h1>
                                <img src={Icon} alt="Icon" className="img-fluid p-2" style={{maxWidth: "4rem"}} />
                            </div>
                            <hr/>
                        </div>
                        <div className='col-12'>
                            <p className='lead'>Hi! I'm Tayla Orsmond. I am currently a second-year BIS Multimedia student at the University of Pretoria.</p>
                            <p>I am an aspiring designer and web-developer in both front and back-end. I like cats.</p>
                            <p>I am <span className='text-tertiary'>proficient</span> in:</p>
                            <div className="d-flex flex-wrap justify-content-center">
                                {this.state.skills.map((skill, index) => {
                                    return (
                                        <div className='skill d-flex flex-column align-items-center' key={index}>
                                            {skill.icon}
                                            <div className='skill-name small'>{skill.name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;