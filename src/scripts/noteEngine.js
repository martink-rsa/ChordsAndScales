const intervals = {
  C: 0,
  'C#': 1,
  D: 2,
  'D#': 3,
  E: 4,
  F: 5,
  'F#': 6,
  G: 7,
  'G#': 8,
  A: 9,
  'A#': 10,
  B: 11,
};

const getChord = ({ musicalKey, chord }) => {
  const chordMaj = [0, 4, 7];
  const chordMin = [0, 3, 7];
  const chordAug = [0, 4, 8];
  const chordDim = [0, 3, 6];
  const chordDim7 = [0, 3, 6, 9];
  const chordMin75 = [0, 3, 6, 10];
  const chordMin7 = [0, 3, 7, 10];
  const chordMaj75 = [0, 4, 6, 10];
  const chordMaj7 = [0, 4, 7, 10];

  let chordOutput = [];

  switch (chord) {
    case 'maj':
      chordOutput = chordMaj.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'min':
      chordOutput = chordMin.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'aug':
      chordOutput = chordAug.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'dim':
      chordOutput = chordDim.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'dim7':
      chordOutput = chordDim7.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'min75':
      chordOutput = chordMin75.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'min7':
      chordOutput = chordMin7.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'maj75':
      chordOutput = chordMaj75.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'maj7':
      chordOutput = chordMaj7.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    default:
    // No chord found
  }

  return chordOutput;
};

// Return the a musical scale of musical notes
const getScale = ({ musicalKey, musicalScale }) => {
  const scaleMaj = [0, 2, 4, 5, 7, 9, 11, 12];
  const scaleMin = [0, 2, 3, 5, 7, 8, 10, 12];
  const scaleBluesMin = [0, 3, 5, 6, 7, 10, 12];
  const scaleBluesMaj = [0, 2, 3, 4, 7, 9, 12];
  const scaleBepopMaj = [0, 2, 4, 5, 7, 8, 9, 11, 12];
  const scaleBepopMin = [0, 2, 3, 4, 5, 7, 9, 10, 12];
  const scalePentatonicMaj = [0, 2, 4, 7, 9, 12];
  const scalePentatonicMin = [0, 3, 5, 7, 10, 12];
  const scaleIonian = [0, 2, 4, 5, 7, 9, 11, 12];
  const scaleDorian = [0, 2, 3, 5, 7, 9, 10, 12];
  const scalePhrygian = [0, 1, 3, 5, 7, 8, 10, 12];
  const scaleLydian = [0, 2, 4, 6, 7, 9, 11, 12];
  const scaleMixolydian = [0, 2, 4, 5, 7, 9, 10, 12];
  const scaleAeolian = [0, 2, 3, 5, 7, 8, 10, 12];
  const scaleLocrian = [0, 1, 3, 5, 6, 8, 10, 12];

  let scaleOutput;
  switch (musicalScale) {
    case 'maj':
      scaleOutput = scaleMaj.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'min':
      scaleOutput = scaleMin.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'bluesMin':
      scaleOutput = scaleBluesMin.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'bluesMaj':
      scaleOutput = scaleBluesMaj.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'bepopMaj':
      scaleOutput = scaleBepopMaj.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'bepopMin':
      scaleOutput = scaleBepopMin.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'pentatonicMaj':
      scaleOutput = scalePentatonicMaj.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'pentatonicMin':
      scaleOutput = scalePentatonicMin.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'ionian':
      scaleOutput = scaleIonian.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'dorian':
      scaleOutput = scaleDorian.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'phrygian':
      scaleOutput = scalePhrygian.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'lydian':
      scaleOutput = scaleLydian.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'mixolydian':
      scaleOutput = scaleMixolydian.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'aeolian':
      scaleOutput = scaleAeolian.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    case 'locrian':
      scaleOutput = scaleLocrian.map(
        noteIndex => noteIndex + intervals[musicalKey],
      );
      break;
    default:
      throw new Error('Scale not found');
  }
  return scaleOutput;
};

export { getChord, getScale };
