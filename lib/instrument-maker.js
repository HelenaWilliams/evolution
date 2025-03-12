function makeInstrument(universe, color){
    let instrument;
    if(universe == "rockband"){
        switch(color){
            case 0:
                instrument = new Tone.Sampler({ // samples from tone.js
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
                });
            case 1:
                instrument = new Tone.Sampler({
                    baseUrl: "assets/ooh/",
                    urls:{
                        "C4": "C4.m4a",
                        "D4": "D4.m4a",
                        "E4": "E4.m4a",
                        "F4": "F4.m4a",
                        "G4": "G4.m4a",
                    },
                    volume: 20
                });
            case 2:
                instrument = new Tone.Sampler({
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
                });
            case 3:
                instrument = new Tone.Sampler({
                    baseUrl: "assets/aah/",
                    urls: {
                        "C4": "C4aah.m4a",
                        "D4": "D4aah.m4a",
                        "E4": "E4aah.m4a",
                        "F4": "F4aah.m4a",
                        "G4": "G4aah.m4a"
                    },
                    volume: 15
                });
            case 4:
                instrument = new Tone.Sampler({
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
                });
            case 5:
                instrument = new Tone.Sampler({
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
                });
            case 6:
                instrument = new Tone.Sampler({
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
                  });             
        }
    }
    if(universe == "electronic"){
        switch(color){
            case 0:
                instrument = new Tone.PolySynth();
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
                };
                instrument.set(redPresets);
            case 1:
                instrument = new Tone.PolySynth();
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
                instrument.set(orangePresets);
            case 2:
                instrument = new Tone.PolySynth();
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
                instrument.set(yellowPresets);
            case 3:
                instrument = new Tone.FMSynth();
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
                instrument.set(greenPresets);
            case 4:
                instrument = new Tone.PolySynth(); // started as a stolen flute, but now it sounds like GLUB GLUB GLUB
                const bluePresets = {
                    oscillator: {
                      type: 'square2'
                    },
                    envelope: {
                      attack: 1, decay: 0.2, sustain: 0.2, release: 0.2
                    },
                    volume: 3
                  };
                instrument.set(bluePresets);
            case 5:
                instrument = new Tone.PolySynth();
                const indigoPresets = {
                    oscillator: {
                      type: 'sawtooth5'
                    },
                    envelope: {
                      attack: 3, decay: 0.2, sustain: 0.2, release: 1
                    },
                    volume: 10
                  };
                instrument.set(indigoPresets);
            case 6:
                instrument = new Tone.PolySynth();
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
                instrument.set(violetPresets);
        }
    }
    if(universe == "orchestra"){
        switch(color){
            case 0:
                instrument = new Tone.Sampler({
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
                });
            case 1:
                instrument = new Tone.Sampler({
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
                });
            case 2:
                instrument = new Tone.Sampler({
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
                });
            case 3:
                instrument = new Tone.Sampler({
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
                  });
            case 4:
                instrument = new Tone.Sampler({
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
                    });
            case 5:
                instrument = new Tone.Sampler({
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
                  });
            case 6:
                instrument = new Tone.Sampler({ // stolen from the coldplay generator, because I thought it was pretty (and a good way to start with samplers in this project)
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
                });
                instrument.connect(pianoReverb);
        }
    }
    return(instrument);
}