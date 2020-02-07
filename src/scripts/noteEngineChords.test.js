import { getChord } from './noteEngine';

describe('Get the correct [Basic] Chords', () => {
  test('Gets the correct base C major scale', () => {
    expect(getChord({ musicalKey: 'C', chord: 'maj' })).toStrictEqual([]);
  });
});
