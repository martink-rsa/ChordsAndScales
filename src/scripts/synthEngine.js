import * as Tone from 'tone';

const polySynth = new Tone.PolySynth(Tone.Synth, {
  portamento: 0.2,
  oscillator: { partials: [1, 0, 2, 0, 3] },
  envelope: { attack: 0.001, decay: 1.2, sustain: 0, release: 1.2 },
  volume: -6,
}).toMaster();

function playNotes(note = 'C4', octave = 2, duration = '8n') {
  polySynth.triggerAttackRelease(`${note}${octave}`, duration);
}

export { playNotes };
