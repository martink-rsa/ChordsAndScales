import React from 'react';
import SelectControl from '../SelectControl/SelectControl';

function ScaleOptions(props) {
  const { setUserOptions } = props;
  const { musicalKey, musicalScale } = props.userOptions;

  const handleKeyChange = event => {
    setUserOptions(prevState => ({
      ...prevState,
      musicalKey: event.target.value,
    }));
  };

  const handleScaleChange = event => {
    setUserOptions(prevState => ({
      ...prevState,
      musicalScale: event.target.value,
    }));
  };

  const musicalScalesAvailable = [
    { id: 0, value: 'maj', text: 'Major' },
    { id: 1, value: 'min', text: 'Minor' },
    { id: 2, value: 'bluesMaj', text: 'Blues Major' },
    { id: 3, value: 'bluesMin', text: 'Blues Minor' },
    { id: 4, value: 'pentatonicMaj', text: 'Pentatonic Major' },
    { id: 5, value: 'pentatonicMin', text: 'Pentatonic Minor' },
    { id: 6, value: 'bepopMaj', text: 'Bepop Major' },
    { id: 7, value: 'bepopMin', text: 'Bepop Minor' },
    { id: 8, value: 'ionian', text: 'Ionian' },
    { id: 9, value: 'dorian', text: 'Dorian' },
    { id: 10, value: 'phrygian', text: 'Phrygian' },
    { id: 11, value: 'lydian', text: 'Lydian' },
    { id: 12, value: 'mixolydian', text: 'Mixolydian' },
    { id: 13, value: 'aeolian', text: 'Aeolian' },
    { id: 14, value: 'locrian', text: 'Locrian' },
    // Missing scales
    // { id: 1, value: 'melodicMinor', text: 'Melodic Minor' },
    // { id: 1, value: 'harmonicMinor', text: 'Harmonic Minor' },
  ];

  return (
    <div>
      <SelectControl
        keyPrefix="smk" // Scale Musical Key
        handleChange={handleKeyChange}
        currentSelection={musicalKey}
        selectItems={props.musicalKeysAvailable}
        labelText="Key"
      />
      <SelectControl
        keyPrefix="sms" // Scale Musical Scale
        handleChange={handleScaleChange}
        currentSelection={musicalScale}
        selectItems={musicalScalesAvailable}
        labelText="Scale"
      />
    </div>
  );
}

export default ScaleOptions;
