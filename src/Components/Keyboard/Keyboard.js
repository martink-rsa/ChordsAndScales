import React from 'react';
import './Keyboard.css';

function Keyboard() {
  // Keys:
  // C D E F G A B C D E F G A B C
  // 15 normal keys

  //
  //  0 1   3 4 5
  // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14
  const generateKeys = (totalColumns, totalKeys) => {
    const keys = [];
    const keysBlack = [0, 1, 3, 4, 5];
    const keyGridWidth = totalColumns / totalKeys;
    console.log('total: ' + totalKeys);

    for (let i = 0; i < totalKeys; i += 1) {
      // Generate a normal key
      const gridBegin = i * keyGridWidth + 1;
      const gridEnd = gridBegin + keyGridWidth;
      keys.push({ id: `${i}-0`, gridBegin, gridEnd, style: 'normal' });

      // Generate a black key if it's required
      if (keysBlack.includes(i)) {
        keys.push({
          id: `${i}-1`,
          gridBegin: gridBegin + 3,
          gridEnd: gridEnd + 7,
          style: 'black'
        });
      }
    }
    return keys;
  };

  generateKeys(75, 15);

  return (
    <div className="keyboard-wrapper">
      <div className="keyboard-container">
        {generateKeys(75, 15).map(key => {
          if (key.style === 'normal') {
            return (
              <div
                key={`key-normal-${key.id}`}
                className="keyboard-key-normal"
                style={{
                  gridColumnStart: key.gridBegin,
                  gridColumnEnd: key.gridEnd,
                  gridRowStart: 1,
                  gridRowEnd: 3
                }}
              >
                {key.id}
              </div>
            );
          }
          if (key.style === 'black') {
            return (
              <div
                key={`key-black-${key.id}`}
                className="keyboard-key-black"
                style={{
                  gridColumnStart: key.gridBegin,
                  gridColumnEnd: 'span 6',
                  gridRowStart: 1,
                  gridRowEnd: 2
                }}
              >
                {key.id}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Keyboard;
