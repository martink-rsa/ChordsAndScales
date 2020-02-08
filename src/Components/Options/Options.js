import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ScaleOptions from '../ScaleOptions/ScaleOptions';
import ChordOptions from '../ChordOptions/ChordOptions';

function Options(props) {
  const { userOptions, setUserOptions, setScale, musicalKeysAvailable } = props;

  const changeOptions = optionSelected => {
    setUserOptions(prevState => ({
      ...prevState,
      optionSelected,
    }));
  };
  return (
    <div>
      {userOptions.optionSelected === 'chord' ? (
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button disabled>Chords</Button>
          <Button onClick={() => changeOptions('scale')}>Scales</Button>
        </ButtonGroup>
      ) : (
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={() => changeOptions('chord')}>Chords</Button>
          <Button disabled>Scales</Button>
        </ButtonGroup>
      )}
      {userOptions.optionSelected === 'scale' ? (
        <ScaleOptions
          userOptions={userOptions}
          setUserOptions={setUserOptions}
          musicalKeysAvailable={musicalKeysAvailable}
        />
      ) : (
        <ChordOptions
          userOptions={userOptions}
          setUserOptions={setUserOptions}
          musicalKeysAvailable={musicalKeysAvailable}
        />
      )}
    </div>
  );
}

export default Options;

/*
<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      */
