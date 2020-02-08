import { getChord } from './noteEngine';

describe('Get the correct Chords', () => {
  test('Gets the correct major chords', () => {
    expect(getChord({ musicalKey: 'C', chord: 'maj' })).toStrictEqual([
      0,
      4,
      7,
    ]);
    expect(getChord({ musicalKey: 'D', chord: 'maj' })).toStrictEqual([
      2,
      6,
      9,
    ]);
    expect(getChord({ musicalKey: 'F#', chord: 'maj' })).toStrictEqual([
      6,
      10,
      13,
    ]);
  });
  test('Gets the correct minor chords', () => {
    expect(getChord({ musicalKey: 'C', chord: 'min' })).toStrictEqual([
      0,
      3,
      7,
    ]);
  });
  test('Gets the correct augmented chords', () => {
    expect(getChord({ musicalKey: 'C', chord: 'aug' })).toStrictEqual([
      0,
      4,
      8,
    ]);
  });
  test('Gets the correct diminished chords', () => {
    expect(getChord({ musicalKey: 'C', chord: 'dim' })).toStrictEqual([
      0,
      3,
      6,
    ]);
  });
  test('Gets the correct diminished 7 chords', () => {
    expect(getChord({ musicalKey: 'C', chord: 'dim7' })).toStrictEqual([
      0,
      3,
      6,
      9,
    ]);
  });
  test('Gets the correct minor 7-5 chords', () => {
    expect(getChord({ musicalKey: 'C', chord: 'min75' })).toStrictEqual([
      0,
      3,
      6,
      10,
    ]);
  });
  test('Gets the correct minor 7 chords', () => {
    expect(getChord({ musicalKey: 'C', chord: 'min7' })).toStrictEqual([
      0,
      3,
      7,
      10,
    ]);
  });
  test('Gets the correct major 7-5 chords', () => {
    expect(getChord({ musicalKey: 'C', chord: 'maj75' })).toStrictEqual([
      0,
      4,
      6,
      10,
    ]);
  });
  test('Gets the correct major 7 chords', () => {
    expect(getChord({ musicalKey: 'C', chord: 'maj7' })).toStrictEqual([
      0,
      4,
      7,
      10,
    ]);
  });
});
