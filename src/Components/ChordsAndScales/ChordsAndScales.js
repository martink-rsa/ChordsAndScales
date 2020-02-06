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

  // Minor can be derived from major by changing
  //    down a semitone for the index values:
  //    2, 5, 6
  // The code can be refactored to take this into
  //    account and minor scales would not have to be
  //    hard-coded
  const musicalScales = {
    C: {
      major: [0, 2, 4, 5, 7, 9, 11, 12],
      minor: [0, 2, 3, 5, 7, 8, 10, 12],
    },
    Cs: {
      major: [1, 3, 5, 6, 8, 10, 12, 13],
      minor: [1, 3, 4, 6, 8, 9, 11, 13],
    },
    D: {
      major: [2, 4, 6, 7, 9, 11, 13, 14],
      minor: [2, 4, 5, 7, 9, 10, 12, 14],
    },
    Ds: {
      major: [3, 5, 7, 8, 10, 12, 14, 15],
      minor: [3, 5, 6, 8, 10, 11, 13, 15],
    },
    E: {
      major: [4, 6, 8, 9, 11, 13, 15, 16],
      minor: [4, 6, 7, 9, 11, 12, 14, 16],
    },
    F: {
      major: [5, 7, 9, 10, 12, 14, 16, 17],
      minor: [5, 7, 8, 10, 12, 13, 15, 17],
    },
    Fs: {
      major: [6, 8, 10, 11, 13, 15, 17, 18],
      minor: [6, 8, 9, 11, 13, 14, 16, 18],
    },
    G: {
      major: [7, 9, 11, 12, 14, 16, 18, 19],
      minor: [7, 9, 10, 12, 14, 15, 17, 19],
    },
    Gs: {
      major: [8, 10, 12, 13, 15, 17, 19, 20],
      minor: [8, 10, 11, 13, 15, 16, 18, 20],
    },
    A: {
      major: [9, 11, 13, 14, 16, 18, 20, 21],
      minor: [9, 11, 12, 14, 16, 17, 19, 21],
    },
    As: {
      major: [10, 12, 14, 15, 17, 19, 21, 22],
      minor: [10, 12, 13, 15, 17, 18, 20, 22],
    },
    B: {
      major: [11, 13, 15, 16, 18, 20, 22, 23],
      minor: [11, 13, 14, 16, 18, 19, 21, 23],
    },
  };

  const originalScales = {
    C: {
      major: [0, 2, 4, 5, 7, 9, 11, 12],
      minor: [0, 2, 3, 5, 7, 8, 10, 12],
      melodicMinor: [],
    },
    Cs: {
      major: [1, 3, 5, 6, 8, 10, 12, 13],
      minor: [1, 3, 4, 6, 8, 9, 11, 13],
      melodicMinor: [],
    },
    D: {
      major: [2, 4, 6, 7, 9, 11, 13, 14],
      minor: [2, 4, 5, 7, 9, 10, 12, 14],
      melodicMinor: [],
    },
    Ds: {
      major: [3, 5, 7, 8, 10, 12, 14, 15],
      minor: [3, 5, 6, 8, 10, 11, 13, 15],
      melodicMinor: [],
    },
    E: {
      major: [4, 6, 8, 9, 11, 13, 15, 16],
      minor: [4, 6, 7, 9, 11, 12, 14, 16],
      melodicMinor: [],
    },
    F: {
      major: [5, 7, 9, 10, 12, 14, 16, 17],
      minor: [5, 7, 8, 10, 12, 13, 15, 17],
      melodicMinor: [],
    },
    Fs: {
      major: [6, 8, 10, 11, 13, 15, 17, 18],
      minor: [6, 8, 9, 11, 13, 14, 16, 18],
      melodicMinor: [],
    },
    G: {
      major: [7, 9, 11, 12, 14, 16, 18, 19],
      minor: [7, 9, 10, 12, 14, 15, 17, 19],
      melodicMinor: [],
    },
    Gs: {
      major: [8, 10, 12, 13, 15, 17, 19, 20],
      minor: [8, 10, 11, 13, 15, 16, 18, 20],
      melodicMinor: [],
    },
    A: {
      major: [9, 11, 13, 14, 16, 18, 20, 21],
      minor: [9, 11, 12, 14, 16, 17, 19, 21],
      melodicMinor: [],
    },
    As: {
      major: [10, 12, 14, 15, 17, 19, 21, 22],
      minor: [10, 12, 13, 15, 17, 18, 20, 22],
      melodicMinor: [],
    },
    B: {
      major: [11, 13, 15, 16, 18, 20, 22, 23],
      minor: [11, 13, 14, 16, 18, 19, 21, 23],
      melodicMinor: [],
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
