import React from 'react';
import './Keyboard.css';
import KeyboardKey from '../KeyboardKey/KeyboardKey';

function Keyboard(props) {
  const { templateActive } = props;
  // Keyboard index layout
  //  1 3   6 8 10   13 15    18 20 22
  // 0 2 4 5 7 9 11 12 14 16 17 19 21 23 24
  const generateKeys = (totalColumns, totalKeys, template) => {
    // Previously had cleaner code by basing everything off a number of
    //    of normal keys and just looping through this number, then adding
    //    a black key if it's part of the keysBlack array. Black keys did not
    //    have their own loop index. While it was cleaner, it is problematic for
    //    when the keyboard needs to be populated with data which should simply
    //    be an arry of keys that must be enabled. The code being less-clean here
    //    will pay off by having an easy import system of scales and chords
    const keys = []; // Array to be returned at end of function
    const keysBlack = [1, 3, 6, 8, 10, 13, 15, 18, 20, 22]; // Keys shown as black
    const amtNormalKeys = totalKeys - keysBlack.length; // No. normal keys
    const widthNormalKey = totalColumns / amtNormalKeys; // Width of normal keys
    let keysNormalCounter = 0; // Used for calculating beginning position

    for (let i = 0; i < totalKeys; i += 1) {
      if (!keysBlack.includes(i)) {
        const gridColumnStart = keysNormalCounter * widthNormalKey + 1;
        const gridColumnEnd = gridColumnStart + widthNormalKey;
        keys.push({
          id: i,
          gridColumnStart,
          gridColumnEnd,
          gridRowStart: 1,
          gridRowEnd: 3,
          style: 'normal',
          zIndex: 1,
          keyClass: 'normal',
          note: props.musicalKeysAvailable[i % 12].value,
          octave: Math.floor(i / 12),
        });
        keysNormalCounter += 1;
      } else {
        // Calculation for black key gridBegin:
        //  1. Use normal key counter - 1 to get the last normal key index
        //  2. Times index (1.) by width of the key to get the position of the key
        //      eg. 0 * width = first key. 2 * width = third key
        //  3. Add half of the key size to shift the black key over
        //  4. Add 1 because grid index starts at 1, not 0
        const gridColumnStart =
          (keysNormalCounter - 1) * widthNormalKey + // 1. & 2.
          Math.ceil(widthNormalKey / 2) + // 3.
          1; // 4.
        const gridColumnEnd = `span ${widthNormalKey - 1}`;
        keys.push({
          id: i,
          gridColumnStart,
          gridColumnEnd,
          gridRowStart: 1,
          gridRowEnd: 2,
          style: 'black',
          zIndex: 2,
          keyClass: 'normal',
          note: props.musicalKeysAvailable[i % 12].value,
          octave: Math.floor(i / 12),
        });
      }
    }
    // Change the template keys to enabled
    for (let i = 0; i < template.length; i += 1) {
      keys[template[i]].keyClass = 'enabled';
    }

    // Change the template keys to active
    for (let i = 0; i < templateActive.length; i += 1) {
      keys[templateActive[i]].keyClass = 'active';
    }
    // Set no border on the last key
    /* keys[keys.length - 1].keyClass =
      keys[keys.length - 1].keyClass + ' keyboard-key-normal-noborders'; */
    return keys;
  };

  return (
    <div className="keyboard-wrapper">
      <div className="keyboard-container">
        {generateKeys(75, 25, props.template).map(key => {
          return <KeyboardKey key={`kbk${key.id}`} details={key} />;
        })}
      </div>
    </div>
  );
}

export default Keyboard;
