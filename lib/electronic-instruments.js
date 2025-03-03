const redKatydid = new Tone.PolySynth().toDestination();
const redPresets = {
  harmonicity: 20,
  oscillator: {
    type: 'amtriangle2',
    harmonicity: 1.01
  },
  envelope: {
    attack: 0.02,
    decay: 4,
    sustain: 0.04,
    release: 1.2,
  }
}
redKatydid.set(redPresets);

const orangeChimes = new Tone.PolySynth().toDestination();
const orangePresets = {
  modulationIndex: 30,
  oscillator: {
    type: 'sine',
  },
  envelope: {
    attack: 0.01,
    release: 0.1,
    releaseCurve: 'ripple'
  },
  volume: -5
}
orangeChimes.set(orangePresets);

const yellowZap = new Tone.PolySynth().toDestination();
const yellowPresets = {
    oscillator: {
      type: 'sawtooth'
    },
    envelope: {
      attack: 0.1,
      decay: 0.1,
      sustain: 0.1,
      release: 0.1
    },
    volume: -10
};
yellowZap.set(yellowPresets);

const greenStrings = new Tone.FMSynth().toDestination();
const greenPresets = {
  oscillator: {
    type: 'triangle'
  },
  envelope: {
    attack: 0.01,
    decay: 0.01,
    sustain: 0.5,
    release: 0.1
  }
};
greenStrings.set(greenPresets);

const blueGlub = new Tone.PolySynth().toDestination(); // started as a stolen flute, but now it sounds like GLUB GLUB GLUB
const bluePresets = {
    oscillator: {
      type: 'square2'
    },
    envelope: {
      attack: 1, decay: 0.2, sustain: 0.2, release: 0.2
    },
    volume: 3
  };
blueGlub.set(bluePresets);

const indigoOrgan = new Tone.PolySynth().toDestination();
const indigoPresets = {
    oscillator: {
      type: 'sawtooth5'
    },
    envelope: {
      attack: 3, decay: 0.2, sustain: 0.2, release: 1
    },
    volume: 10
  };
indigoOrgan.set(indigoPresets);

const violetPulserimba = new Tone.PolySynth().toDestination();
const violetPresets = {
  oscillator: {
    partials: [1, 5, 1, 5, 1]
  },
  envelope: {
    attack: 0.01,
    decay: 0.2,
    sustain: 1,
    release: 0.2,
    releaseCurve: 'ripple'
  },
  volume: -8
};
violetPulserimba.set(violetPresets);