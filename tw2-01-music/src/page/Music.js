import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionMusic, actionMediaAudio} from '../redux/actions';

function Music() {
  
  const dispatch = useDispatch();

  const mediaAudio = useSelector(state => state.reducerMediaAudio.media_audio_data.data );
  const mediaAudioInc = useSelector(state => state.reducerMediaAudio.media_audio_data.included);
  const mediaAudioLength = useSelector(state => state.reducerMediaAudio.media_audio_dataLength);

  const state = useSelector(state => state.reducerMusic.music_data.data);
  const inc_data = useSelector(state => state.reducerMusic.music_data.included);
  const length = useSelector(state => state.reducerMusic.music_dataLength);
  
  

  const [newArr, setNewArr] = useState([]); 
  const [audioData, setAudiData] = useState([]);
  

  useEffect(()=>{
    dispatch(actionMusic());
    dispatch(actionMediaAudio());
  },[dispatch])

  
  console.log(mediaAudio, mediaAudioInc,mediaAudioLength);


  console.log(state, inc_data, length);

  // const Arr =  lng1 > 0 && lng2 &&
  //   arr1.map((item) => {
  //       //const {attributes:{title, field_music_body}} = item;
  //       const {relationships:{field_music_audio:{data}}} = item;
  //       data.map((dt, index) => {
  //         if(dt.id === arr2[index]){
  //           return Object.assign({},item, arr2[index]);
  //         } 
  //       })
  //   })
  // }

  function mergeArrayObjects(arr1,arr2){
    
    arr1.map((item,i) => {
      if(item.id === arr2[i].id){
           //merging two objects
        return Object.assign({},item,arr2[i]);
      }
    })
  }


  useEffect(()=>{
    const audio = [];
    console.log("audio arr: ", audio);

    mediaAudioLength > 0 &&
    mediaAudio.map(item => {
      const {id} = item;
      mediaAudioInc.map(inc => {
        const {attributes:{filemime, filename,filesize,uri}} = inc;
        return audio.push({id: id, filetype: filemime, filename: filename, filesize:filesize, uri: uri })
      })
    })
    
    setAudiData(audio);

  },[mediaAudio, mediaAudioInc, mediaAudioLength])
  


  console.log("Audio data +: ",audioData);  

  return (
    <div>
      <h1>Music Page</h1>
    </div>
  )
}

export default Music