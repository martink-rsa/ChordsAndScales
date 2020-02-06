import React from 'react';
import Instrument from '../Instrument/Instrument';
import Options from '../Options/Options';

function ChordsAndScales() {
  const [userOptions, setUserOptions] = React.useState({
    chordScaleChoice: 'scale',
    musicalKey: 'C',
    musicalScale: 'major',
    chord: '',
    keysTemplate: [],
  });

  const musicalScales = {
    C: {
      major: [0, 2, 4, 5, 7, 9, 11, 12],
      minor: [1, 2, 3, 4, 5],
    },
    D: {
      major: [2, 4, 6, 7, 9, 11, 13, 14],
      minor: [1, 2, 3, 4, 5],
    },
    E: {
      major: [1, 5, 6, 7, 8],
      minor: [1, 2, 3, 4, 5],
    },
    F: {
      major: [0, 1, 2, 3, 4],
      minor: [1, 2, 3, 4, 5],
    },
    G: {
      major: [0, 1, 2, 3, 4],
      minor: [1, 2, 3, 4, 5],
    },
    A: {
      major: [0, 1, 2, 3, 4],
      minor: [1, 2, 3, 4, 5],
    },
    B: {
      major: [0, 1, 2, 3, 4],
      minor: [1, 2, 3, 4, 5],
    },
  };

  const setTemplate = () => {
    const {
      chordScaleChoice,
      musicalKey,
      musicalScale,
      chord,
      keysTemplate,
    } = userOptions;
    let template = [];
    if (userOptions.chordScaleChoice === 'scale') {
      template = musicalScales[musicalKey][musicalScale];
    } else if (userOptions.chordScaleChoice === 'chord') {
    }
    console.log(template);
    return template;
  };

  setTemplate();
  return (
    <div>
      Chords and Scales
      <Instrument template={setTemplate()} />
      <Options userOptions={userOptions} setUserOptions={setUserOptions} />
    </div>
  );
}

export default ChordsAndScales;
