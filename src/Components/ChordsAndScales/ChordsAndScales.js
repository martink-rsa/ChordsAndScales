import React from 'react';
import Instrument from '../Instrument/Instrument';
import Options from '../Options/Options';

function ChordsAndScales() {
  const [userOptions, setUserOptions] = React.useState({
    chordScaleChoice: 'scale',
    musicalKey: 'D',
    chord: '',
    scale: ''
  });

  return (
    <div>
      Chords and Scales
      <Instrument />
      <Options userOptions={userOptions} setUserOptions={setUserOptions} />
    </div>
  );
}

export default ChordsAndScales;
