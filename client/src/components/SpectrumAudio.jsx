import React from 'react';
import AudioSpectrum from 'react-audio-spectrum'
import Piano from '../assets/piano quartet principal clip 07 03 2012.wav'

const SpectrumAudio = () => {
    return (
        <div>
            <audio id="audio-element"
                src={Piano}
            //not in display cause here autoplay commented out
            // autoPlay
            >
            </audio>
            <AudioSpectrum
                id="audio-canvas"
                height={200}
                width={300}
                audioId={'audio-element'}
                capColor={'red'}
                capHeight={2}
                meterWidth={2}
                meterCount={512}
                meterColor={[
                    { stop: 0, color: 'blue' },
                    { stop: 0.5, color: 'blue' },
                    { stop: 1, color: 'red' }
                ]}
                gap={4}
            />
        </div>
    );
}

export default SpectrumAudio;