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
  const [media, setMedia] = useState([]);
  const [resultArr, setResultArr] = useState([]);
  


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
    const arr = [];
    musicDataFetched &&
    musicDataInc.map((item) => {
      item.type === 'file--file' &&
      arr.push({id: item.id, uri: item.attributes.uri, filetype: item.attributes.filemime})
    });
    setFile_file(arr);
  },[musicDataFetched, musicDataInc]);

  useEffect(() => {
    const arr = [];
    musicDataFetched &&
    musicDataInc.map((item)=>{
      return item.type !== 'file--file' &&
      arr.push({
        id: item.id, 
        name:item.attributes.name,
        mediaId: item.type === 'media--audio' ? item.relationships.field_media_audio_file.data.id : item.relationships.field_media_image.data.id,
      })
    })
    setMedia(arr);

  },[musicDataFetched, musicDataInc]);

  function getUri(id, arr){
    console.log("mediaId uri", id)
    arr.map( item => {
      //console.log(item.id===id ? item.uri : item.id);
      return item.id === id ? item.uri : item.id
    });
  }
  function getFileType(id, arr){
    console.log("meidiaId filetype",typeof(id));
    arr.map(item => {
      //console.log(item.id===id ? item.filetype : typeof(item.id));
      return item.id === id ? item.filetype : item.id
    } );
  }

  useEffect(() => {
    const arr = [];
    media.length > 0 &&
    media.map( (item) => {
      return arr.push({
        id: item.id,
        name: item.name,
        uri: getUri(item.mediaId, file_file),
        filetype: getFileType(item.mediaId, file_file)
      })
    })
    setResultArr(arr);
  },[file_file, media]);


  console.log("FILE ARRAY", file_file);
  console.log("Media Array", media);
  console.log("Result", resultArr);


  return(
    <div>
      Music
    </div>
  )

}

export default Music;