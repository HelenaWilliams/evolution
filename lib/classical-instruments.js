const redXylophone = new Tone.Sampler({
    baseUrl: "assets/xylophone/",
    urls: {
        "C5": "C5.mp3",
        "C6": "C6.mp3",
        "C7": "C7.mp3",
        "C8": "C8.mp3",
        "G4": "G4.mp3",
        "G5": "G5.mp3",
        "G6": "G6.mp3",
        "G7": "G7.mp3"
    }
}).toDestination();

const orangeTrumpet = new Tone.Sampler({
    baseUrl: "assets/trumpet/",
    urls:{
        "A3": "A3.mp3",
        "A5": "A5.mp3",
        "A#4": "As4.mp3",
        "C4": "C4.mp3",
        "C6": "C6.mp3",
        "D5": "D5.mp3",
        "D#4": "Ds4.mp3",
        "F3": "F3.mp3",
        "F4": "F4.mp3",
        "F5": "F5.mp3",
        "G4": "G4.mp3",
    }
}).toDestination();

const yellowFlute = new Tone.Sampler({
    baseUrl: "assets/flute/",
    urls:{
        "A4": "A4.mp3",
        "A5": "A5.mp3",
        "A6": "A6.mp3",
        "C4": "C4.mp3",
        "C5": "C5.mp3",
        "C6": "C6.mp3",
        "C7": "C7.mp3",
        "E4": "E4.mp3",
        "E5": "E5.mp3",
        "E6": "E6.mp3",
    }
}).toDestination();

const greenViolin = new Tone.Sampler({
    baseUrl: "assets/violin/",
    urls: {
      "A3": "A3.mp3",
      "G3": "G3.mp3",
      "A4": "A4.mp3",
      "C4": "C4.mp3",
      "E4": "E4.mp3",
      "G4": "G4.mp3",
      "A5": "A5.mp3",
      "C5": "C5.mp3",
      "E5": "E5.mp3",
      "G5": "G5.mp3",
      "A6": "A6.mp3",
      "C6": "C6.mp3",
      "E6": "E6.mp3",
      "G6": "G6.mp3",
      "C7": "C7.mp3",
    },
    release: 1,
    volume: -10
  }).toDestination();

const blueCello = new Tone.Sampler({
baseUrl: "assets/cello/",
urls: {
    "A2": "A2.mp3",
    "A3": "A3.mp3",
    "A4": "A4.mp3",
    "A#2": "As2.mp3",
    "A#3": "As3.mp3",
    "B2": "B2.mp3",
    "B3": "B3.mp3",
    "B4": "B4.mp3",
    "C2": "C2.mp3",
    "C3": "C3.mp3",
    "C4": "C4.mp3",
    "C5": "C5.mp3",
    "C#3": "Cs3.mp3",
    "C#4": "Cs4.mp3",
    "D2": "D2.mp3",
    "D3": "D3.mp3",
    "D4": "D4.mp3",
    "D#2": "Ds2.mp3",
    "D#3": "Ds3.mp3",
    "D#4": "Ds4.mp3",
    "E2": "E2.mp3",
    "E3": "E3.mp3",
    "E4": "E4.mp3",
    "F2": "F2.mp3",
    "F3": "F3.mp3",
    "F4": "F4.mp3",
    "F#3": "Fs3.mp3",
    "F#4": "Fs4.mp3",
    "G2": "G2.mp3",
    "G3": "G3.mp3",
    "G4": "G4.mp3",
    "G#2": "Gs2.mp3",
    "G#3": "Gs3.mp3",
    "G#4": "Gs4.mp3"
}
}).toDestination();

const indigoTuba = new Tone.Sampler({
    baseUrl: "assets/tuba/",
    urls: {
      "A#1": "As1.mp3",
      "A#2": "As2.mp3",
      "A#3": "As3.mp3",
      "D3": "D3.mp3",
      "D4": "D4.mp3",
      "D#2": "Ds2.mp3",
      "F1": "F1.mp3",
      "F2": "F2.mp3",
      "F3": "F3.mp3"
    }
  }).toDestination();

const violetPiano = new Tone.Sampler({ // stolen from the coldplay generator, because I thought it was pretty (and a good way to start with samplers in this project)
baseUrl: "https://tonejs.github.io/audio/salamander/",
urls: {
    'A0': 'A0.mp3',
    'C1': 'C1.mp3',
    'D#1': 'Ds1.mp3',
    'F#1': 'Fs1.mp3',
    'A1': 'A1.mp3',
    'C2': 'C2.mp3',
    'D#2': 'Ds2.mp3',
    'F#2': 'Fs2.mp3',
    'A2': 'A2.mp3',
    'C3': 'C3.mp3',
    'D#3': 'Ds3.mp3',
    'F#3': 'Fs3.mp3',
    'A3': 'A3.mp3',
    'C4': 'C4.mp3',
    'D#4': 'Ds4.mp3',
    'F#4': 'Fs4.mp3',
    'A4': 'A4.mp3',
    'C5': 'C5.mp3',
    'D#5': 'Ds5.mp3',
    'F#5': 'Fs5.mp3',
    'A5': 'A5.mp3',
    'C6': 'C6.mp3',
    'D#6': 'Ds6.mp3',
    'F#6': 'Fs6.mp3',
    'A6': 'A6.mp3',
    'C7': 'C7.mp3',
    'D#7': 'Ds7.mp3',
    'F#7': 'Fs7.mp3',
    'A7': 'A7.mp3',
    'C8': 'C8.mp3'
},
release: 1
});
const pianoReverb = new Tone.Reverb({
    wet: 0.75,
    decay: 1
}).toDestination();
violetPiano.connect(pianoReverb);