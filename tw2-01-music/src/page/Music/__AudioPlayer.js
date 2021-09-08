import React, { useState, useEffect } from "react";
import {BiPlay, BiPause} from 'react-icons/bi';

const useAudio = url => {

  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [duration, SetDuration] = useState('');
  const [updateTime, setUpdateTime] = useState('');


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
    
    const timeUpdate = setInterval(()=>{
        console.log("update", audio.ontimeupdate);
        console.log("tiemupdate", audio.currentTime);
        setUpdateTime(audio.currentTime);
      },1000);

    return playing 
    ? timeUpdate && SetDuration(audio.duration) 
    : clearInterval(timeUpdate);

  },[audio.currentTime, audio.duration, audio.ontimeupdate, playing])


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

  return [playing, toggle];
};



const AudioPlayer = ({ url }) => {

  const [playing, toggle, ProgressBar] = useAudio(url);

  console.log("PLAYING?",playing);

  return (
    <div className="grid grid-cols-1 grid-rows-2
                    md:grid-cols-2 md:grid-rows-1 gap-4">
      <div className="border border-gray-400">{ProgressBar}</div>
      <div className="text-center md:text-left">
        <button className="border border-gray-400 p-2 w-8" 
                onClick={toggle}>{playing 
              ? <BiPause /> 
              : <BiPlay />}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;