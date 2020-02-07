import React from 'react';
import Instrument from '../Instrument/Instrument';
import Options from '../Options/Options';
import { getScale } from '../../scripts/noteEngine';

function ChordsAndScales() {
  const [userOptions, setUserOptions] = React.useState({
    chordScaleChoice: 'scale',
    musicalKey: 'C',
    musicalScale: 'maj',
    chord: '',
    keysTemplate: [],
  });

  const setTemplate = () => {
    const {
      chordScaleChoice,
      musicalKey,
      musicalScale,
      chord,
      keysTemplate,
    } = userOptions;
    let template = [];
    console.log('setTemplate running:');
    if (userOptions.chordScaleChoice === 'scale') {
      // template = getScale(musicalKey, musicalScale);
      template = getScale({ musicalKey, musicalScale });
    } else if (userOptions.chordScaleChoice === 'chord') {
      // Chord
    }
    return template;
  };

  return (
    <div>
      Chords and Scales
      <Instrument template={setTemplate()} />
      <Options userOptions={userOptions} setUserOptions={setUserOptions} />
    </div>
  );
}

export default ChordsAndScales;
