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
  const [file_file, setfile_file] = useState([]);

  useEffect(()=>{
    const file = [];
    musicDataFetched &&
    musicDataInc.map((item)=>{
      return item.type === 'file--file' &&
      file.push({...musicDataInc}); 
    })
  },[musicDataFetched, musicDataInc])

  console.log("FILE ONLY INCLUDED", file_file);

  return(
    <div>
      Music
    </div>
  )

}

export default Music;