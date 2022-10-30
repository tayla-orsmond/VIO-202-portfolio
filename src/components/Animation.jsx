//Tayla Orsmond u21467456

import React from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

const flip = () => {
    //flip the animation horizontally by setting the scale to flip
    document.getElementById('canvas').style.transform = 'scaleX(-1)';
    return 1;
}
const flipBack = () => {
    //flip the animation back to normal by setting the scale to 1
    document.getElementById('canvas').style.transform = 'scaleX(1)';
    return 1;
}
export default function Animation() {
    const { rive, RiveComponent } = useRive({
        src: 'assets/portfolio.riv',
        autoplay: true,
        stateMachines: 'State Machine 1',
    });
    const hover = useStateMachineInput(rive, 'State Machine 1', 'hover');
    const out = useStateMachineInput(rive, 'State Machine 1', 'out');
  return (
    <React.Fragment>
        <div className='d-flex justify-content-around'>
            <a href='#infographic' className='btn btn-primary' onMouseEnter={() => flipBack() && hover.fire()} onMouseLeave={() => out.fire()}>My interactive infographic</a>
            <a href='#comic' className='btn btn-secondary' onMouseEnter={() => flip() && hover.fire()} onMouseLeave={() => out.fire()}>My motion comic</a>
        </div>
        <RiveComponent className="col-12" id='canvas'/>
    </React.Fragment>
  );
}