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
  const [file_file, setFile_file] = useState([]);
  const [mediaArr, setMediaArr] = useState([]);


  /** FUNCTION: merge Array with same "id"  */
  function mergeArrayObjects(arr1,arr2){
    // let start = 0;
      let merge = [];
      arr2.map(item => {
       //const {attributes:{filemime}, attributes:{uri:{url}}} = item;
          arr1.some((el) => el.id === item.id)
          merge.push({
            mediaId: item.id, 
            url: item.uri
          });
      })
      return merge;
  }


  function getMedia(id, arr){
    arr.map(item => {return id === item.id && item.uri})
  }


  useEffect(()=>{

    const file = [];
    
    musicDataFetched &&
    musicDataInc.map((item)=>{
      return item.type === 'file--file' &&
      file.push({id: item.id, uri: item.attributes.uri})
    })
    setFile_file(file);

    
  },[file_file, musicDataFetched, musicDataInc])

  
  

  console.log("FILE ARRAY", file_file);
  console.log("MEDIA ARRAY", mediaArr);


  return(
    <div>
      Music
    </div>
  )

}

export default Music;