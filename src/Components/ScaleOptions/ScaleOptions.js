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
  const { musicalKey, musicalScale, handleOptionsUpdate } = props.userOptions;

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
    { id: 1, value: 'D', text: 'D' },
    { id: 2, value: 'E', text: 'E' },
    { id: 3, value: 'F', text: 'F' },
    { id: 4, value: 'G', text: 'G' },
    { id: 5, value: 'A', text: 'A' },
    { id: 6, value: 'B', text: 'B' },
  ];

  const musicalScalesAvailable = [
    { id: 0, value: 'major', text: 'Major' },
    { id: 1, value: 'minor', text: 'Minor' },
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
