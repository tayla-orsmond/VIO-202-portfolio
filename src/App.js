// //Tayla Orsmond u21467456

import React from 'react';

import {Navigation} from './components/Navigation';
import Fullpage from './Fullpage';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Fullpage/>
      </div>
    );
  }
}

