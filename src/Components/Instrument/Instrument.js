import React from 'react';
import Keyboard from '../Keyboard/Keyboard';
import './instrument.css';

function Instrument(props) {
  return (
    <div className="wrapper">
      <Keyboard template={props.template} />
    </div>
  );
}

export default Instrument;
