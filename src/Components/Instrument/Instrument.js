import React from 'react';
import Keyboard from '../Keyboard/Keyboard';
import './instrument.css';

function Instrument(props) {
  return (
    <div className="wrapper">
      <Keyboard
        template={props.template}
        templateActive={props.templateActive}
        userOptions={props.userOptions}
        musicalKeysAvailable={props.musicalKeysAvailable}
        playNotes={props.playNotes}
      />
    </div>
  );
}

export default Instrument;
