import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionMusic, actionMediaAudio} from '../redux/actions';

function Music() {
  
  const dispatch = useDispatch();

  const mediaAudio = useSelector(state => state.reducerMediaAudio.media_audio_data.data );
  const mediaAudioInc = useSelector(state => state.reducerMediaAudio.media_audio_data.included);
  const mediaAudioLength = useSelector(state => state.reducerMediaAudio.media_audio_dataLength);

  const musicData = useSelector(state => state.reducerMusic.music_data.data);
  const musicDataInc = useSelector(state => state.reducerMusic.music_data.included);
  const musicDataLength = useSelector(state => state.reducerMusic.music_dataLength);
  
  

  const [newArr, setNewArr] = useState([]); 
  const [audioData, setAudiData] = useState([]);
  
  /** RUN action  */
  useEffect(()=>{
    dispatch(actionMusic());
    dispatch(actionMediaAudio());
  },[dispatch])

  //console.log(mediaAudio, mediaAudioInc,mediaAudioLength);
  console.log(musicData, musicDataInc, musicDataLength);

  /** AudioMedia "data" array  and "included" array merged */
  useEffect(()=>{
    const audio = [];
    console.log("audio arr: ", audio);

    mediaAudioLength > 0 &&
    mediaAudio.map(item => {
      const {id} = item;
      mediaAudioInc.map(inc => {
        const {attributes:{filemime, filename,filesize,uri}} = inc;
        /** stop re-looping push if "id" exists */
        const hasId = audio.some(key => key.id === id);
        return !hasId && audio.push({id: id, filetype: filemime, filename: filename, filesize:filesize, uri: uri })
      })
    })
    
    setAudiData(audio);

  },[mediaAudio, mediaAudioInc, mediaAudioLength])
  
  console.log("Audio data +: ",audioData);  



  /** FUNCTION: merge Array with same "id"  */
  function mergeArrayObjects(arr1,arr2){
    
    arr1.map((item,i) => {
      if(item.id === arr2[i].id){
           //merging two objects
        return Object.assign({},item,arr2[i]);
      }
    })
  }


  /** AudioMedia and MusicData */
  useEffect(()=>{
    const arr = [];
    musicDataLength > 0 && audioData.length > 0 &&
    musicData.map((item)=>{
      const {attributes:{title, field_music_body}} = item;
      const {relationships:{file_music_audio:{data}}} = item;
      arr.push({
        title: title, 
        body: field_music_body,
        data: mergeArrayObjects(data, audioData)
      })
    })

  },[audioData, musicData, musicDataLength])

  return (
    <div>
      <h1>Music Page</h1>
    </div>
  )
}

export default Music