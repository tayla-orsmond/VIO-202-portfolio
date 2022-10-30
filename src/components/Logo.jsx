//Tayla Orsmond u21467456

import React from 'react';
import { useRive } from '@rive-app/react-canvas';

export default function Logo() {
    const { RiveComponent } = useRive({
        src: 'assets/logo.riv',
        autoplay: true,
        stateMachines: 'logo-machine',
    });
  return (
    <RiveComponent id='logo'/>
  );
}