import React, { useState, useEffect, useRef } from "react";
import {BiPlay, BiPause} from 'react-icons/bi';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [currentUpdate] = useRef();

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
      
    },[audio, playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  useEffect(()=>{
    
  })

  console.log("duration?",audio.duration, audio);
  

  return [playing, toggle];
};



const AudioPlayer = ({ url }) => {

  const ProgressBar = ({ progressPercentage }) => {
    return (
        <div className='h-1 w-full bg-gray-300'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className={`h-full ${
                    progressPercentage < 70 ? 'bg-red-600' : 'bg-green-600'}`}>
            </div>
        </div>
    );
 };

  const [playing, toggle] = useAudio(url);

  return (
    <div>
      {ProgressBar(80)}
      <button onClick={toggle}>{playing ? <BiPause /> : <BiPlay />}</button>
    </div>
  );
};

export default AudioPlayer;