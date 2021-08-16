import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionMusic} from '../redux/actions';

function Music() {
  
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducerMusic.music_data.data);
  const inc_data = useSelector(state => state.reducerMusic.music_data.included);
  const length = useSelector(state => state.reducerMusic.music_dataLength);
  
  useEffect(()=>{
    dispatch(actionMusic());
  },[dispatch])

  console.log(state, inc_data, length);

  const [arr, setArr] = useState([]);

  useEffect(() => {

    const data = [];
    console.log("data arr",data);
    length > 0 &&
    state.map(item => {
        const {attributes:{title,field_music_body}, relationships:{field_music_audio:{data}}} = item;
        return data.push({title: title, body: field_music_body.processed, data: data});
    })

  },[length, state])


  return (
    <div>
      <h1>Music Page</h1>
    </div>
  )
}

export default Music
