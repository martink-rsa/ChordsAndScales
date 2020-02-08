import React from 'react';
import Instrument from '../Instrument/Instrument';
import Options from '../Options/Options';
import { getScale, getChord } from '../../scripts/noteEngine';

function ChordsAndScales() {
  const [userOptions, setUserOptions] = React.useState({
    optionSelected: 'chord',
    musicalKey: 'C',
    musicalScale: 'maj',
    chord: 'maj',
  });

  const musicalKeysAvailable = [
    { id: 0, value: 'C', text: 'C' },
    { id: 1, value: 'Cs', text: 'C♯ / D♭' },
    { id: 2, value: 'D', text: 'D' },
    { id: 3, value: 'Ds', text: 'D♯ / E♭' },
    { id: 4, value: 'E', text: 'E' },
    { id: 5, value: 'F', text: 'F' },
    { id: 6, value: 'Fs', text: 'F♯ / G♭' },
    { id: 7, value: 'G', text: 'G' },
    { id: 8, value: 'Gs', text: 'G♯ / A♭' },
    { id: 9, value: 'A', text: 'A' },
    { id: 10, value: 'As', text: 'A♯ / B♭' },
    { id: 11, value: 'B', text: 'B' },
  ];

  // Set the keys that will be enabled on the keyboard
  const setTemplate = () => {
    const { optionSelected, musicalKey, musicalScale, chord } = userOptions;
    let template = [];
    if (optionSelected === 'scale') {
      template = getScale({ musicalKey, musicalScale });
    } else if (optionSelected === 'chord') {
      template = getChord({ musicalKey, chord });
    }
    return template;
  };

  return (
    <div>
      Chords and Scales
      <Instrument template={setTemplate()} />
      <Options
        userOptions={userOptions}
        setUserOptions={setUserOptions}
        musicalKeysAvailable={musicalKeysAvailable}
      />
    </div>
  );
}

export default ChordsAndScales;
