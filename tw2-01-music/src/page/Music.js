import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionMusic} from '../redux/actions';
//import MusicList from './Music/MusicList';


function Music(){

  const dispatch = useDispatch();

  /** RUN action  */
  useEffect(()=>{
    dispatch(actionMusic());
  },[dispatch])

  /** DRUPAL DATA CREATED BY CONTENT TYPE */
  //const musicData = useSelector(state => state.reducerMusic.music_data.data);
  const musicDataFetched = useSelector(state => state.reducerMusic.music_fetched);
  const musicDataInc = useSelector(state => state.reducerMusic.music_data.included);
  //const musicDataLength = useSelector(state => state.reducerMusic.music_dataLength);


   console.log(musicDataFetched,musicDataInc);

  /** NEW WORKOUT */
  const [included, setIncluded] = useState([]);
  useEffect(()=>{
    const newInc = [];
    musicDataFetched &&
    musicDataInc.map((item) => {
      (item.type === 'media--audio' && item.relationships.field_media_audio_file.data.id) === item.id &&
      (item.type === 'media-image' && item.relationships.field_media_image.data.id) === item.id &&
      item.type === 'file--file' &&
      newInc.push({id:item.id, uri:item.attributes.uri, filetype: item.filemime });
    })
    setIncluded(newInc);
  },[musicDataFetched, musicDataInc])

  console.log("NEW INCLUDED", included);

  return(
    <div>
      Music
    </div>
  )

}

export default Music;