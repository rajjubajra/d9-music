import React, {useState, useEffect, useRef} from 'react';


const tracks = [
  {
    title: "string",
    artist: "string",
    audioSrc: "string | import",
    image: "string",
    color: "string",
  }
]


function AudioPlayer({url}) {


  const audioElement = new Audio(url);

  /** states */
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  /** Destructure for conciesness */
  const { title, artist, color, image, audioSrc} = tracks[trackIndex];

  /** Refs */
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  /** Destructure for conciesness */
  const {duration} = audioRef.current;


  const toPrevTrack = () => {
    console.log('TODO GO TO PREV');
  }

  const toNextTrack = () => {
    console.log('TODO GO TO NEXT');
  }



  // audioElement.play();
  // audioElement.pause();

  // audioElement.currentTime;
  // audioElement.ended;
  // audioElement.duration;

  

  return (
    <div className="audio-player">
      <div className="track-info">
        <img src={image} alt="track artwork" />
        <h2 className="title">{title}</h2>
        <h3 className="artist">{artist}</h3>
      </div>
    </div>
  )
}

export default AudioPlayer
