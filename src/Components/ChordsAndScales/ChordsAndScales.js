import React from 'react';
import Instrument from '../Instrument/Instrument';
import Options from '../Options/Options';
import { getScale, getChord } from '../../scripts/noteEngine';
import { playNotes, playChord } from '../../scripts/synthEngine';

function ChordsAndScales() {
  const [userOptions, setUserOptions] = React.useState({
    optionSelected: 'chord',
    musicalKey: 'C',
    musicalScale: 'maj',
    chord: 'maj',
    baseOctave: 3,
  });
  // const [templateActive, setTemplateActive] = React.useState([]);
  const [templateActive, setTemplateActive] = React.useState([]);
  const [scaleTimer, setScaleTimer] = React.useState([]);

  const musicalKeysAvailable = [
    { id: 0, value: 'C', text: 'C' },
    { id: 1, value: 'C#', text: 'C♯ / D♭' },
    { id: 2, value: 'D', text: 'D' },
    { id: 3, value: 'D#', text: 'D♯ / E♭' },
    { id: 4, value: 'E', text: 'E' },
    { id: 5, value: 'F', text: 'F' },
    { id: 6, value: 'F#', text: 'F♯ / G♭' },
    { id: 7, value: 'G', text: 'G' },
    { id: 8, value: 'G#', text: 'G♯ / A♭' },
    { id: 9, value: 'A', text: 'A' },
    { id: 10, value: 'A#', text: 'A♯ / B♭' },
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

  // Play the current chord or scale
  const playCurrentSelection = () => {
    const { optionSelected, musicalKey, musicalScale, chord } = userOptions;
    if (optionSelected === 'scale') {
      clearTimeout(scaleTimer);
      let index = 0;
      const scale = getScale({ musicalKey, musicalScale });
      const timer = setInterval(() => {
        setTemplateActive([scale[index]]);
        const note = scale[index];
        const noteInRange = note % 12;
        const noteToPlay = musicalKeysAvailable[noteInRange].value;
        const octave = userOptions.baseOctave + Math.floor(note / 12);
        playNotes(noteToPlay, octave, '8n');
        index += 1;
        if (index >= scale.length) {
          clearTimeout(timer);
          setTimeout(() => setTemplateActive([]), 500);
        }
      }, 500);
      setScaleTimer(timer);
    } else if (optionSelected === 'chord') {
      const currentChord = getChord({ musicalKey, chord });
      const chordNotes = currentChord.map(note => {
        const noteInRange = note % 12;
        const octave = userOptions.baseOctave + Math.floor(note / 12);
        return `${musicalKeysAvailable[noteInRange].value}${octave}`;
      });
      playChord(chordNotes);
    }
  };

  return (
    <div>
      Chords and Scales
      <Instrument
        template={setTemplate()}
        templateActive={templateActive}
        userOptions={userOptions}
        musicalKeysAvailable={musicalKeysAvailable}
        playNotes={playNotes}
      />
      <Options
        userOptions={userOptions}
        setUserOptions={setUserOptions}
        musicalKeysAvailable={musicalKeysAvailable}
        playCurrentSelection={playCurrentSelection}
      />
    </div>
  );
}

export default ChordsAndScales;
