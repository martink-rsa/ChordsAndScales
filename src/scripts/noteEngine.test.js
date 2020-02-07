import { getScale } from './noteEngine';

describe('Get the correct Major Scales', () => {
  test('Gets the correct base C major scale', () => {
    expect(getScale({ key: 'C', scale: 'maj' })).toStrictEqual([
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
    expect(getScale({ key: 'Cs', scale: 'maj' })).toStrictEqual([
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
    expect(getScale({ key: 'D', scale: 'maj' })).toStrictEqual([
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
    expect(getScale({ key: 'Ds', scale: 'maj' })).toStrictEqual([
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
    expect(getScale({ key: 'E', scale: 'maj' })).toStrictEqual([
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
    expect(getScale({ key: 'F', scale: 'maj' })).toStrictEqual([
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
    expect(getScale({ key: 'Fs', scale: 'maj' })).toStrictEqual([
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
    expect(getScale({ key: 'G', scale: 'maj' })).toStrictEqual([
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
    expect(getScale({ key: 'Gs', scale: 'maj' })).toStrictEqual([
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
    expect(getScale({ key: 'A', scale: 'maj' })).toStrictEqual([
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
    expect(getScale({ key: 'As', scale: 'maj' })).toStrictEqual([
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
    expect(getScale({ key: 'B', scale: 'maj' })).toStrictEqual([
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
    expect(getScale({ key: 'C', scale: 'min' })).toStrictEqual([
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
    expect(getScale({ key: 'E', scale: 'min' })).toStrictEqual([
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
    expect(getScale({ key: 'Fs', scale: 'min' })).toStrictEqual([
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
    expect(getScale({ key: 'C', scale: 'bluesMin' })).toStrictEqual([
      0,
      3,
      5,
      6,
      7,
      10,
      12,
    ]);
  });
  test('Gets the correct E Blues Minor scale', () => {
    expect(getScale({ key: 'E', scale: 'bluesMin' })).toStrictEqual([
      4,
      7,
      9,
      10,
      11,
      14,
      16,
    ]);
  });
  test('Gets the correct G# Blues Minor scale', () => {
    expect(getScale({ key: 'Gs', scale: 'bluesMin' })).toStrictEqual([
      8,
      11,
      13,
      14,
      15,
      18,
      20,
    ]);
  });
});

// Blues Major
describe('Get the correct Blues Major Scales', () => {
  test('Gets the correct C Blues Major scale', () => {
    expect(getScale({ key: 'C', scale: 'bluesMaj' })).toStrictEqual([
      0,
      2,
      3,
      4,
      7,
      9,
      12,
    ]);
  });
  test('Gets the correct D# Blues Major scale', () => {
    expect(getScale({ key: 'Ds', scale: 'bluesMaj' })).toStrictEqual([
      3,
      5,
      6,
      7,
      10,
      12,
      15,
    ]);
  });
  test('Gets the correct F# Blues Major scale', () => {
    expect(getScale({ key: 'Fs', scale: 'bluesMaj' })).toStrictEqual([
      6,
      8,
      9,
      10,
      13,
      15,
      18,
    ]);
  });
});

// Bepop Major
describe('Get the correct Bepop Major Scales', () => {
  test('Gets the correct C Bepop Major scale', () => {
    expect(getScale({ key: 'C', scale: 'bepopMaj' })).toStrictEqual([
      0,
      2,
      4,
      5,
      7,
      8,
      9,
      11,
      12,
    ]);
  });
  test('Gets the correct E Bepop Major scale', () => {
    expect(getScale({ key: 'E', scale: 'bepopMaj' })).toStrictEqual([
      4,
      6,
      8,
      9,
      11,
      12,
      13,
      15,
      16,
    ]);
  });
});
