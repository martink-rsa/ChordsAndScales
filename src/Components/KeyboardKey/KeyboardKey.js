import React from 'react';
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import './KeyboardKey.css';

function KeyboardKey(props) {
  const [keyState, setKeyState] = useState('normal');
  console.log(props.details);
  const {
    id,
    gridColumnStart,
    gridColumnEnd,
    gridRowStart,
    gridRowEnd,
    style,
    zIndex,
    keyClass,
  } = props.details;

  let keyColor;
  if (style === 'normal') {
    keyColor = 'white';
  } else {
    keyColor = 'black';
  }

  const NoteButton = withStyles({
    root: {
      display: 'flex',
      alignItems: 'flex-end',
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      width: 'auto',
      minWidth: 'inherit',
      height: 'auto',
      boxShadow: 'none',
      textTransform: 'none',
      border: '1px solid',
      backgroundColor: keyColor,
      // backgroundColor: 'green',
      borderColor: 'black',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: 'black',
        boxShadow: 'none',
      },
      '&:active': {
        /* boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf', */
      },
      '&:focus': {
        /* boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)', */
      },
    },
  })(Button);

  let customClass = '';
  const getClass = () => {
    console.log('getClass');
    console.log(keyClass);
    if (keyClass === 'normal') {
      customClass = 'normal';
    } else if (keyClass === 'enabled') {
      customClass = 'enabled';
    } else if (keyClass === 'active') {
      customClass = 'active';
    }
    return customClass;
  };

  console.log(props.id);
  return (
    <NoteButton
      style={{
        gridColumnStart,
        gridColumnEnd,
        gridRowStart,
        gridRowEnd,
        zIndex,
      }}
      className={getClass()}
    >
      {id}
    </NoteButton>
  );
}

export default KeyboardKey;
