import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import './KeyboardKey.css';

function KeyboardKey(props) {
  const [keyState, setKeyState] = useState('normal');
  const {
    id,
    gridColumnStart,
    gridColumnEnd,
    gridRowStart,
    gridRowEnd,
    style,
    zIndex,
    keyClass
  } = props.details;

  useEffect(() => {
    let background = '';
    if (keyClass === 'active') {
      background = 'green';
    } else if (keyClass === 'enabled') {
      background = 'red';
    } else if (keyClass === 'normal') {
      if (style === 'normal') {
        background = 'white';
      } else {
        background = 'black';
      }
    }
    setKeyState(background);
  }, [keyClass, style]);

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
      backgroundColor: keyState,
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
        '"Segoe UI Symbol"'
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: 'black',
        boxShadow: 'none'
      },
      '&:active': {
        /* boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf', */
      },
      '&:focus': {
        /* boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)', */
      }
    }
  })(Button);

  return (
    <NoteButton
      style={{
        gridColumnStart,
        gridColumnEnd,
        gridRowStart,
        gridRowEnd,
        zIndex
      }}
      // className={keyState}
    >
      {id}
    </NoteButton>
  );
}

export default KeyboardKey;
