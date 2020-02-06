import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function ScaleOptions(props) {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const { setUserOptions } = props;
  const { musicalKey } = props.userOptions;

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    // setMusicalKey(event.target.value);
    setUserOptions(prevState => ({
      ...prevState,
      musicalKey: event.target.value
    }));
  };

  // this.setState(prevState => ({
  //   person: {
  //     ...prevState.person,
  //     firstName: "Tom",
  //     secondName: "Jerry"
  //   }
  // }));

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
        Key
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={musicalKey}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
        <MenuItem value={'A'}>A</MenuItem>
        <MenuItem value={'B'}>B</MenuItem>
        <MenuItem value={'C'}>C</MenuItem>
        <MenuItem value={'D'}>D</MenuItem>
        <MenuItem value={'E'}>E</MenuItem>
        <MenuItem value={'F'}>F</MenuItem>
        <MenuItem value={'G'}>G</MenuItem>
      </Select>
    </FormControl>
  );
}

export default ScaleOptions;

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
