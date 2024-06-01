import React from 'react';
import './Advantages.css';
import bootstraplogowhiteblack from './bootstraplogowhiteblack.png';
import csslogoblackwhite from './csslogoblackwhite.png';
import htmllogoblackwhite from './htmllogoblackwhite.png';
import javascriptlogo from './javascriptlogo.png';
import reactlogowhiteblack from './reactlogowhiteblack.png';
import sqllogoblackwhite from './sqllogoblackwhite.png';

const Advantages= () => {
  return (
    <div className="advantages-container" id='Advantages'>
      <h2>My Advantages</h2>
      <div className="skills">
        <div className="skill">
          <span className='skill1'>
            <img src={bootstraplogowhiteblack} alt="" /></span>
          <p>CSS Bootstrap</p>
        </div>
        <div className="skill">
          <span className='skill2'>
            <img src={htmllogoblackwhite} alt="" /></span>
          <p>HTML5</p>
        </div>

        <div className="skill">
          <span className='skill3'>
            <img src={csslogoblackwhite} alt="" /></span>
          <p>CSS</p>
        </div>
        <div className="skill">
          <span className='skill4'>
            <img src={javascriptlogo} alt="" /></span>
          <p>Javascript</p>
        </div>
        <div className="skill">
          <span className='skill5'>
            <img src={reactlogowhiteblack} alt="" /></span>
          <p>Reactjs</p>
        </div>
        <div className="skill">
          <span className='skill6'>
            <img src={sqllogoblackwhite} alt="" /></span>
          <p>My SQL</p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
