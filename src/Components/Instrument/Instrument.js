import React from 'react';
import Keyboard from '../Keyboard/Keyboard';
import './instrument.css';

function Instrument(props) {
  return (
    <div className="wrapper">
      <Keyboard
        template={props.template}
        userOptions={props.userOptions}
        musicalKeysAvailable={props.musicalKeysAvailable}
      />
    </div>
  );
}

export default Instrument;
