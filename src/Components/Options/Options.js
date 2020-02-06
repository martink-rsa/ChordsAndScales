import React from 'react';
import ScaleOptions from '../ScaleOptions/ScaleOptions';

function Options(props) {
  const { userOptions, setUserOptions } = props;
  return (
    <div>
      <ScaleOptions userOptions={userOptions} setUserOptions={setUserOptions} />
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
