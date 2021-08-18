import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionMusic, actionMediaAudio} from '../redux/actions';

function Music() {
  
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducerMusic.music_data.data);
  const inc_data = useSelector(state => state.reducerMusic.music_data.included);
  const length = useSelector(state => state.reducerMusic.music_dataLength);
  
  const mediaAudio = useSelector(state => state.reducerMediaAudio.media_audio_data.data );
  const audioLength = useSelector(state => state.reducerMediaAudio.media_audio_dataLength);

  
  useEffect(()=>{
    dispatch(actionMusic());
    dispatch(actionMediaAudio());
  },[dispatch])

  console.log(state, inc_data, length, mediaAudio);

  

  useEffect(() => {
    const newData = [];

    newData = length > 0 &&
    state.map((item) => {
        //const {attributes:{title, field_music_body}} = item;
        const {relationships:{field_music_audio:{data}}} = item;
        data.map((dt, index) => {
          if(dt.id === mediaAudio[index]){
            return Object.assign({},item, mediaAudio[index]);
          } 
        })
    })
    
    console.log(newData);

  },[length, mediaAudio, state])


  return (
    <div>
      <h1>Music Page</h1>
    </div>
  )
}

export default Music
