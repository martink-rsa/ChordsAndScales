import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SelectControl from '../SelectControl/SelectControl';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function ScaleOptions(props) {
  const classes = useStyles();
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
    // { id: 1, value: 'melodicMinor', text: 'Melodic Minor' },
    // { id: 1, value: 'harmonicMinor', text: 'Harmonic Minor' },
  ];

  return (
    <div>
      <SelectControl
        keyPrefix="smk" // Scale Musical Key
        handleChange={handleKeyChange}
        currentSelection={musicalKey}
        selectItems={musicalKeysAvailable}
      />
      <SelectControl
        keyPrefix="sms" // Scale Musical Scale
        handleChange={handleScaleChange}
        currentSelection={musicalScale}
        selectItems={musicalScalesAvailable}
      />
    </div>
  );
}

export default ScaleOptions;
