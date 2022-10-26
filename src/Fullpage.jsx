import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Infographic from './components/Infographic';
import Comic from './components/Comic';
import About from './components/About';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {"gplv3-license"}
    scrollingSpeed = {1000} /* Options here */
    menu={"#menu"}
    anchors={['home', 'portfolio', 'infographic', 'comic', 'about']}
    sectionsColor={['#171521', '#171521', '#171521', '#171521', '#171521']}
    navigation={true}
    navigationPosition={"right"}
    navigationTooltips={["Home", "Portfolio", "Infographic", "Comic", "About"]}
    showActiveTooltip={true}
    slidesNavigation={true}
    slidesNavPosition={"bottom"}
    controlArrows={true}
    loopHorizontal={true}
    continuousVertical={true}
    continuousHorizontal={true}
    scrollHorizontally={true}
    scrollOverflow={true}
    scrollOverflowReset={true}
    scrollOverflowOptions={null}
    autoScrolling={true}
    fitToSection={true}
    fitToSectionDelay={1000}
    easing={"easeInOutCubic"}
    easingcss3={"ease"}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home />
          </div>
          <div className="section">
            <Portfolio />
          </div>
          <div className="section">
            <Infographic />
          </div>
          <div className="section">
            <Comic />
          </div>
          <div className="section">
            <About />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;