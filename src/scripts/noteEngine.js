/* eslint-disable arrow-parens */
// Return the a musical scale of musical notes
const getScale = scaleInput => {
  const scaleMaj = [0, 2, 4, 5, 7, 9, 11, 12]; // C Major
  const scaleMin = [0, 2, 3, 5, 7, 8, 10, 12]; // C Minor
  const scaleBluesMin = [0, 3, 5, 6, 7, 10, 12]; // C Blues Minor
  const scaleBluesMaj = [0, 2, 3, 4, 7, 9, 12]; // C Blues Major
  const scaleBepopMaj = [0, 2, 4, 5, 7, 8, 9, 11, 12]; // C Bepop Major
  const scaleBepopMin = [0, 2, 3, 4, 5, 7, 9, 10, 12]; // C Bepop Minor
  const scalePentatonicMaj = [0, 2, 4, 7, 9, 12];
  const scalePentatonicMin = [0, 3, 5, 7, 10, 12];
  const scaleIonian = [0, 2, 4, 5, 7, 9, 11, 12];
  const scaleDorian = [0, 2, 3, 5, 7, 9, 10, 12];
  const scalePhrygian = [0, 1, 3, 5, 7, 8, 10, 12];
  const scaleLydian = [0, 2, 4, 6, 7, 9, 11, 12];
  const scaleMixolydian = [0, 2, 4, 5, 7, 9, 10, 12];
  const scaleAeolian = [0, 2, 3, 5, 7, 8, 10, 12];
  const scaleLocrian = [0, 1, 3, 5, 6, 8, 10, 12];
  const { key, scale } = scaleInput;
  const intervals = {
    C: 0,
    Cs: 1,
    D: 2,
    Ds: 3,
    E: 4,
    F: 5,
    Fs: 6,
    G: 7,
    Gs: 8,
    A: 9,
    As: 10,
    B: 11,
  };

  let scaleOutput;
  switch (scale) {
    case 'maj':
      scaleOutput = scaleMaj.map(noteIndex => noteIndex + intervals[key]);
      break;
    case 'min':
      scaleOutput = scaleMin.map(noteIndex => noteIndex + intervals[key]);
      break;
    case 'bluesMin':
      scaleOutput = scaleBluesMin.map(noteIndex => noteIndex + intervals[key]);
      break;
    case 'bluesMaj':
      scaleOutput = scaleBluesMaj.map(noteIndex => noteIndex + intervals[key]);
      break;
    case 'bepopMaj':
      scaleOutput = scaleBepopMaj.map(noteIndex => noteIndex + intervals[key]);
      break;
    case 'bepopMin':
      scaleOutput = scaleBepopMin.map(noteIndex => noteIndex + intervals[key]);
      break;
    case 'pentatonicMaj':
      scaleOutput = scalePentatonicMaj.map(
        noteIndex => noteIndex + intervals[key],
      );
      break;
    case 'pentatonicMin':
      scaleOutput = scalePentatonicMin.map(
        noteIndex => noteIndex + intervals[key],
      );
      break;
    case 'ionian':
      scaleOutput = scaleIonian.map(noteIndex => noteIndex + intervals[key]);
      break;
    case 'dorian':
      scaleOutput = scaleDorian.map(noteIndex => noteIndex + intervals[key]);
      break;
    case 'phrygian':
      scaleOutput = scalePhrygian.map(noteIndex => noteIndex + intervals[key]);
      break;
    case 'lydian':
      scaleOutput = scaleLydian.map(noteIndex => noteIndex + intervals[key]);
      break;
    case 'mixolydian':
      scaleOutput = scaleMixolydian.map(
        noteIndex => noteIndex + intervals[key],
      );
      break;
    case 'aeolian':
      scaleOutput = scaleAeolian.map(noteIndex => noteIndex + intervals[key]);
      break;
    case 'locrian':
      scaleOutput = scaleLocrian.map(noteIndex => noteIndex + intervals[key]);
      break;
    default:
      throw new Error('Scale not found');
  }
  return scaleOutput;
};

export { getScale };
