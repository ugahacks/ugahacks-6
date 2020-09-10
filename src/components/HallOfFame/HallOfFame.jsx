import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
import './HallOfFame.css';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import team_wand from "./media/wand.png"


// var path = "./media/wand.png"


class HallOfFame extends React.Component { //function HallOfFame(props) {
  render() {
    return (
      <div id="HallOfFame" className="">
        <AwesomeSlider
          animation="cubeAnimation"
        >
          <div data-src={team_wand} />
          <div data-src={team_wand} />
          <div data-src={team_wand} />
        </AwesomeSlider>
      </div>
    );
  }
}

// ReactDOM.render(<Carousel />, document.querySelector('.demo-carousel'));
export default HallOfFame;
