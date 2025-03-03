const redDrums = new Tone.Sampler({ // samples from tone.js
    baseUrl: "https://tonejs.github.io/audio/drum-samples/acoustic-kit/",
    urls: {
        'C3': 'hihat.mp3',
        'D3': 'kick.mp3',
        'E3': 'snare.mp3',
        'F3': 'tom1.mp3',
        'G3': 'tom2.mp3',
        'A3': 'tom3.mp3'
    },
    release: 1,
    volume: 1
}).toDestination();

const orangeOoh = new Tone.Sampler({
    baseUrl: "assets/ooh/",
    urls:{
        "C4": "C4.m4a",
        "D4": "D4.m4a",
        "E4": "E4.m4a",
        "F4": "F4.m4a",
        "G4": "G4.m4a",
    },
    volume: 20
}).toDestination();

const yellowExtraPercussion = new Tone.Sampler({
    baseUrl: "assets/extra-percussion/",
    urls:{
        "A3": "banging.mp3",
        "B3": "can_hit.mp3",
        "C3": "clanging.mp3",
        "D3": "crash_cymbal.mp3",
        "E3": "cymbal.mp3",
        "F3": "tambourine.mp3",
        "G3": "tap.mp3"
    }
}).toDestination();

const greenAah = new Tone.Sampler({
    baseUrl: "assets/aah/",
    urls: {
        "C4": "C4aah.m4a",
        "D4": "D4aah.m4a",
        "E4": "E4aah.m4a",
        "F4": "F4aah.m4a",
        "G4": "G4aah.m4a"
    },
    volume: 15
}).toDestination();

const blueElecBass = new Tone.Sampler({
    baseUrl: "assets/bass-electric/",
    urls: {
        "A#1": "As1.mp3",
        "A#2": "As2.mp3",
        "A#3": "As3.mp3",
        "A#4": "As4.mp3",
        "C#1": "Cs1.mp3",
        "C#2": "Cs2.mp3",
        "C#3": "Cs3.mp3",
        "C#4": "Cs4.mp3",
        "C#5": "Cs5.mp3",
        "E1": "E1.mp3",
        "E2": "E2.mp3",
        "E3": "E3.mp3",
        "E4": "E4.mp3",
        "G1": "G1.mp3",
        "G2": "G2.mp3",
        "G3": "G3.mp3",
        "G4": "G4.mp3"
    }
}).toDestination();

const indigoCasio = new Tone.Sampler({
    baseUrl: "assets/casio/",
    urls: {
        "A1": "A1.mp3",
        "A2": "A2.mp3",
        "A#1": "As1.mp3",
        "B1": "B1.mp3",
        "C2": "C2.mp3",
        "C#2": "Cs2.mp3",
        "D2": "D2.mp3",
        "D#2": "Ds2.mp3",
        "E2": "E2.mp3",
        "F2": "F2.mp3",
        "F#2": "Fs2.mp3",
        "G2": "G2.mp3",
        "G#1": "Gs1.mp3"
    }
}).toDestination();

const violetElecGuitar = new Tone.Sampler({
    baseUrl: "assets/guitar-electric/",
    urls: {
      "A2": "A2.mp3",
      "A3": "A3.mp3",
      "A4": "A4.mp3",
      "A5": "A5.mp3",
      "C3": "C3.mp3",
      "C4": "C4.mp3",
      "C5": "C5.mp3",
      "C6": "C6.mp3",
      "C#2": "Cs2.mp3",
      "D#3": "Ds3.mp3",
      "D#4": "Ds4.mp3",
      "D#5": "Ds5.mp3",
      "E2": "E2.mp3",
      "F#2": "Fs2.mp3",
      "F#3": "Fs3.mp3",
      "F#4": "Fs4.mp3",
      "F#5": "Fs5.mp3"
    },
    release: 1,
    volume: 1   
  }).toDestination();
  
    