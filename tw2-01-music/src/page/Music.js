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

  const [newArr, setNewArr] = useState([]); 
  

  useEffect(()=>{
    dispatch(actionMusic());
    dispatch(actionMediaAudio());
  },[dispatch])

  
  console.log(state, inc_data, length, mediaAudio);

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

  useEffect(() => {

    const Arr = length > 0 && audioLength > 0 &&
    state.map(item => {
        const {relationships:{field_music_audio:{data}}} = item;
        return mergeArrayObjects(data,mediaAudio);
    })
  
    console.log("ARR +: ",Arr);

  },[length, mediaAudio, state, audioLength])

  return (
    <div>
      <h1>Music Page</h1>
    </div>
  )
}

export default Music