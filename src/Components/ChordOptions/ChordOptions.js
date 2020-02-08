import React from 'react';
import SelectControl from '../SelectControl/SelectControl';

function ChordOptions(props) {
  const { setUserOptions } = props;
  const { musicalKey, musicalScale, chord } = props.userOptions;

  const handleKeyChange = event => {
    setUserOptions(prevState => ({
      ...prevState,
      musicalKey: event.target.value,
    }));
  };

  const handleChordChange = event => {
    setUserOptions(prevState => ({
      ...prevState,
      chord: event.target.value,
    }));
  };

  const musicalChordsAvailable = [
    { id: 0, value: 'maj', text: 'Major' },
    { id: 1, value: 'min', text: 'Minor' },
    { id: 2, value: 'aug', text: 'Augmented' },
    { id: 3, value: 'dim', text: 'Diminished' },
    { id: 4, value: 'dim7', text: 'Diminished 7' },
    { id: 5, value: 'dim75', text: 'Diminished 7-5' },
    { id: 6, value: 'min75', text: 'Minor 7-5' },
    { id: 7, value: 'min7', text: 'Minor 7' },
    { id: 8, value: 'maj75', text: 'Major 7-5' },
    { id: 9, value: 'maj7', text: 'Major 7' },
  ];

  return (
    <div>
      <SelectControl
        keyPrefix="cmk" // Chords Musical Key
        handleChange={handleKeyChange}
        currentSelection={musicalKey}
        selectItems={props.musicalKeysAvailable}
        labelText="Key"
      />
      <SelectControl
        keyPrefix="cmc" // Chords Musical Chord
        handleChange={handleChordChange}
        currentSelection={chord}
        selectItems={musicalChordsAvailable}
        labelText="Chord"
      />
    </div>
  );
}

export default ChordOptions;
