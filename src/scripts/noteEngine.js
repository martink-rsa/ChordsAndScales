/* eslint-disable arrow-parens */
// Return the a musical scale of musical notes
const getScale = scaleInput => {
  const baseScaleMaj = [0, 2, 4, 5, 7, 9, 11, 12]; // C Major
  const baseScaleMin = [0, 2, 3, 5, 7, 8, 10, 12]; // C Minor
  const baseScaleBluesMin = [0, 3, 5, 6, 7, 10, 12]; // C Blues Minor
  const baseScaleBluesMaj = [0, 2, 3, 4, 7, 9, 12]; // C Blues Major
  const baseScaleBepopMaj = [0, 2, 4, 5, 7, 8, 9, 11, 12]; // C Bepop Major
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
      scaleOutput = baseScaleMaj.map(noteIndex => noteIndex + intervals[key]);
      break;
    case 'min':
      scaleOutput = baseScaleMin.map(noteIndex => noteIndex + intervals[key]);
      break;
    case 'bluesMin':
      scaleOutput = baseScaleBluesMin.map(
        noteIndex => noteIndex + intervals[key],
      );
      break;
    case 'bluesMaj':
      scaleOutput = baseScaleBluesMaj.map(
        noteIndex => noteIndex + intervals[key],
      );
      break;
    case 'bepopMaj':
      scaleOutput = baseScaleBepopMaj.map(
        noteIndex => noteIndex + intervals[key],
      );
      break;
    default:
      throw new Error('Scale not found');
  }
  return scaleOutput;
};

export { getScale };
