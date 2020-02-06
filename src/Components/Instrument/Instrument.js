import React from 'react';
import Keyboard from '../Keyboard/Keyboard';

function Instrument(props) {
  return (
    <div>
      <Keyboard template={props.template} />
    </div>
  );
}

export default Instrument;
