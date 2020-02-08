import { getScale } from './noteEngine';

describe('Get the correct Major Scales', () => {
  test('Gets the correct base C major scale', () => {
    expect(getScale({ musicalKey: 'C', musicalScale: 'maj' })).toStrictEqual([
      0,
      2,
      4,
      5,
      7,
      9,
      11,
      12,
    ]);
  });
  test('Gets the correct C# major scale', () => {
    expect(getScale({ musicalKey: 'C#', musicalScale: 'maj' })).toStrictEqual([
      1,
      3,
      5,
      6,
      8,
      10,
      12,
      13,
    ]);
  });
  test('Gets the correct D major scale', () => {
    expect(getScale({ musicalKey: 'D', musicalScale: 'maj' })).toStrictEqual([
      2,
      4,
      6,
      7,
      9,
      11,
      13,
      14,
    ]);
  });
  test('Gets the correct D# major scale', () => {
    expect(getScale({ musicalKey: 'D#', musicalScale: 'maj' })).toStrictEqual([
      3,
      5,
      7,
      8,
      10,
      12,
      14,
      15,
    ]);
  });
  test('Gets the correct E major scale', () => {
    expect(getScale({ musicalKey: 'E', musicalScale: 'maj' })).toStrictEqual([
      4,
      6,
      8,
      9,
      11,
      13,
      15,
      16,
    ]);
  });
  test('Gets the correct F major scale', () => {
    expect(getScale({ musicalKey: 'F', musicalScale: 'maj' })).toStrictEqual([
      5,
      7,
      9,
      10,
      12,
      14,
      16,
      17,
    ]);
  });
  test('Gets the correct Fs major scale', () => {
    expect(getScale({ musicalKey: 'F#', musicalScale: 'maj' })).toStrictEqual([
      6,
      8,
      10,
      11,
      13,
      15,
      17,
      18,
    ]);
  });
  test('Gets the correct G major scale', () => {
    expect(getScale({ musicalKey: 'G', musicalScale: 'maj' })).toStrictEqual([
      7,
      9,
      11,
      12,
      14,
      16,
      18,
      19,
    ]);
  });
  test('Gets the correct Gs major scale', () => {
    expect(getScale({ musicalKey: 'G#', musicalScale: 'maj' })).toStrictEqual([
      8,
      10,
      12,
      13,
      15,
      17,
      19,
      20,
    ]);
  });
  test('Gets the correct A major scale', () => {
    expect(getScale({ musicalKey: 'A', musicalScale: 'maj' })).toStrictEqual([
      9,
      11,
      13,
      14,
      16,
      18,
      20,
      21,
    ]);
  });
  test('Gets the correct As major scale', () => {
    expect(getScale({ musicalKey: 'A#', musicalScale: 'maj' })).toStrictEqual([
      10,
      12,
      14,
      15,
      17,
      19,
      21,
      22,
    ]);
  });
  test('Gets the correct B major scale', () => {
    expect(getScale({ musicalKey: 'B', musicalScale: 'maj' })).toStrictEqual([
      11,
      13,
      15,
      16,
      18,
      20,
      22,
      23,
    ]);
  });
});

// Natural Minor scales
describe('Get the correct Minor Scales', () => {
  test('Gets the correct base C Minor scale', () => {
    expect(getScale({ musicalKey: 'C', musicalScale: 'min' })).toStrictEqual([
      0,
      2,
      3,
      5,
      7,
      8,
      10,
      12,
    ]);
  });
  test('Gets the correct base E Minor scale', () => {
    expect(getScale({ musicalKey: 'E', musicalScale: 'min' })).toStrictEqual([
      4,
      6,
      7,
      9,
      11,
      12,
      14,
      16,
    ]);
  });
  test('Gets the correct base F# Minor scale', () => {
    expect(getScale({ musicalKey: 'F#', musicalScale: 'min' })).toStrictEqual([
      6,
      8,
      9,
      11,
      13,
      14,
      16,
      18,
    ]);
  });
});

// Blues Minor
describe('Get the correct Blues Minor Scales', () => {
  test('Gets the correct C Blues Minor scale', () => {
    expect(
      getScale({ musicalKey: 'C', musicalScale: 'bluesMin' }),
    ).toStrictEqual([0, 3, 5, 6, 7, 10, 12]);
  });
  test('Gets the correct E Blues Minor scale', () => {
    expect(
      getScale({ musicalKey: 'E', musicalScale: 'bluesMin' }),
    ).toStrictEqual([4, 7, 9, 10, 11, 14, 16]);
  });
  test('Gets the correct G# Blues Minor scale', () => {
    expect(
      getScale({ musicalKey: 'G#', musicalScale: 'bluesMin' }),
    ).toStrictEqual([8, 11, 13, 14, 15, 18, 20]);
  });
});

// Blues Major
describe('Get the correct Blues Major Scales', () => {
  test('Gets the correct C Blues Major scale', () => {
    expect(
      getScale({ musicalKey: 'C', musicalScale: 'bluesMaj' }),
    ).toStrictEqual([0, 2, 3, 4, 7, 9, 12]);
  });
  test('Gets the correct D# Blues Major scale', () => {
    expect(
      getScale({ musicalKey: 'D#', musicalScale: 'bluesMaj' }),
    ).toStrictEqual([3, 5, 6, 7, 10, 12, 15]);
  });
  test('Gets the correct F# Blues Major scale', () => {
    expect(
      getScale({ musicalKey: 'F#', musicalScale: 'bluesMaj' }),
    ).toStrictEqual([6, 8, 9, 10, 13, 15, 18]);
  });
});

// Bepop Major
describe('Get the correct Bepop Major Scales', () => {
  test('Gets the correct C Bepop Major scale', () => {
    expect(
      getScale({ musicalKey: 'C', musicalScale: 'bepopMaj' }),
    ).toStrictEqual([0, 2, 4, 5, 7, 8, 9, 11, 12]);
  });
  test('Gets the correct E Bepop Major scale', () => {
    expect(
      getScale({ musicalKey: 'E', musicalScale: 'bepopMaj' }),
    ).toStrictEqual([4, 6, 8, 9, 11, 12, 13, 15, 16]);
  });
});

// Bepop Minor
describe('Get the correct Bepop Minor Scales', () => {
  test('Gets the correct C Bepop Minor scale', () => {
    expect(
      getScale({ musicalKey: 'C', musicalScale: 'bepopMin' }),
    ).toStrictEqual([0, 2, 3, 4, 5, 7, 9, 10, 12]);
  });
  test('Gets the correct D Bepop Minor scale', () => {
    expect(
      getScale({ musicalKey: 'D', musicalScale: 'bepopMin' }),
    ).toStrictEqual([2, 4, 5, 6, 7, 9, 11, 12, 14]);
  });
});

// Modes
describe('Get the correct Modes', () => {
  test('Gets the correct C Ionian Mode', () => {
    expect(
      getScale({ musicalKey: 'C', musicalScale: 'ionian' }),
    ).toStrictEqual([0, 2, 4, 5, 7, 9, 11, 12]);
  });
  test('Gets the correct E Ionian Mode', () => {
    expect(
      getScale({ musicalKey: 'E', musicalScale: 'ionian' }),
    ).toStrictEqual([4, 6, 8, 9, 11, 13, 15, 16]);
  });

  test('Gets the correct C Dorian mode', () => {
    expect(
      getScale({ musicalKey: 'C', musicalScale: 'dorian' }),
    ).toStrictEqual([0, 2, 3, 5, 7, 9, 10, 12]);
  });
  test('Gets the correct F Dorian Mode', () => {
    expect(
      getScale({ musicalKey: 'F', musicalScale: 'dorian' }),
    ).toStrictEqual([5, 7, 8, 10, 12, 14, 15, 17]);
  });
  test('Gets the correct C Phrygian mode', () => {
    expect(
      getScale({ musicalKey: 'C', musicalScale: 'phrygian' }),
    ).toStrictEqual([0, 1, 3, 5, 7, 8, 10, 12]);
  });
  test('Gets the correct G# Phrygian mode', () => {
    expect(
      getScale({ musicalKey: 'G#', musicalScale: 'phrygian' }),
    ).toStrictEqual([8, 9, 11, 13, 15, 16, 18, 20]);
  });
  test('Gets the correct C Lydian mode', () => {
    expect(
      getScale({ musicalKey: 'C', musicalScale: 'lydian' }),
    ).toStrictEqual([0, 2, 4, 6, 7, 9, 11, 12]);
  });
  test('Gets the correct F Lydian mode', () => {
    expect(
      getScale({ musicalKey: 'F', musicalScale: 'lydian' }),
    ).toStrictEqual([5, 7, 9, 11, 12, 14, 16, 17]);
  });
  test('Gets the correct C Mixolydian mode', () => {
    expect(
      getScale({ musicalKey: 'C', musicalScale: 'mixolydian' }),
    ).toStrictEqual([0, 2, 4, 5, 7, 9, 10, 12]);
  });
  test('Gets the correct A Mixolydian mode', () => {
    expect(
      getScale({ musicalKey: 'A', musicalScale: 'mixolydian' }),
    ).toStrictEqual([9, 11, 13, 14, 16, 18, 19, 21]);
  });
  test('Gets the correct C Aeolian mode', () => {
    expect(
      getScale({ musicalKey: 'C', musicalScale: 'aeolian' }),
    ).toStrictEqual([0, 2, 3, 5, 7, 8, 10, 12]);
  });
  test('Gets the correct B Aeolian mode', () => {
    expect(
      getScale({ musicalKey: 'B', musicalScale: 'aeolian' }),
    ).toStrictEqual([11, 13, 14, 16, 18, 19, 21, 23]);
  });
  test('Gets the correct C Locrian mode', () => {
    expect(
      getScale({ musicalKey: 'C', musicalScale: 'locrian' }),
    ).toStrictEqual([0, 1, 3, 5, 6, 8, 10, 12]);
  });
  test('Gets the correct A# Locrian mode', () => {
    expect(
      getScale({ musicalKey: 'A#', musicalScale: 'locrian' }),
    ).toStrictEqual([10, 11, 13, 15, 16, 18, 20, 22]);
  });
});

// Pentatonic scales (Major)
describe('Get the correct Major Pentatonic scales', () => {
  test('Gets the correct C Major Pentatonic scale', () => {
    expect(
      getScale({ musicalKey: 'C', musicalScale: 'pentatonicMaj' }),
    ).toStrictEqual([0, 2, 4, 7, 9, 12]);
  });
  test('Gets the correct D# Major Pentatonic scale', () => {
    expect(
      getScale({ musicalKey: 'D#', musicalScale: 'pentatonicMaj' }),
    ).toStrictEqual([3, 5, 7, 10, 12, 15]);
  });
});

// Pentatonic scales (Minor)
describe('Get the correct Minor Pentatonic scales', () => {
  test('Gets the correct C Minor Pentatonic scale', () => {
    expect(
      getScale({ musicalKey: 'C', musicalScale: 'pentatonicMin' }),
    ).toStrictEqual([0, 3, 5, 7, 10, 12]);
  });
  test('Gets the correct D# Minor Pentatonic scale', () => {
    expect(
      getScale({ musicalKey: 'F', musicalScale: 'pentatonicMin' }),
    ).toStrictEqual([5, 8, 10, 12, 15, 17]);
  });
});
