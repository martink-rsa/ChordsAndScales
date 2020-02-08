import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();
let polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();

function playNote(note = 'C4', octave = 2, duration = '8n') {
  synth.triggerAttackRelease(`${note}${octave}`, duration);
}

export { synth, playNote };
