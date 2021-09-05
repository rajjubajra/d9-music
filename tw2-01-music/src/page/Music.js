import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionMusic} from '../redux/actions';
import MusicList from './Music/MusicList';


function Music(){

  const dispatch = useDispatch();

  /** RUN action  */
  useEffect(()=>{
    dispatch(actionMusic());
  },[dispatch])

  /** DRUPAL DATA CREATED BY CONTENT TYPE */
  const musicData = useSelector(state => state.reducerMusic.music_data.data);
  const musicDataFetched = useSelector(state => state.reducerMusic.music_fetched);
  const musicDataInc = useSelector(state => state.reducerMusic.music_data.included);
  //const musicDataLength = useSelector(state => state.reducerMusic.music_dataLength);


  console.log(musicDataFetched,musicDataInc);

  /** NEW WORKOUT */
  const [file_file, setFile_file] = useState([]);
  const [media, setMedia] = useState([]);
  const [includedArr, setIncludedArr] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  
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
      const index = arr.findIndex( el => el.id === id);
      return arr[index].uri;
  }

  function getFileType(id, arr){
    const index = arr.findIndex(el =>  el.id === id );
    return arr[index].filetype;
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
    setIncludedArr(arr);
  },[file_file, media]);


  //console.log("FILE ARRAY", file_file);
  //console.log("Media Array", media);
  console.log("Result", includedArr);
  console.log("musicData", musicData);
  console.log("usethisData", dataArr);

  function getUrlForAudio(arr1, arr2){
      const newArr = [];
      arr2.length > 0 && arr1.length > 0 &&
      arr2.map( item => {
        arr1.some( el => el.id === item.id ) &&
        newArr.push({
          id: item.id,
          filetype: item.filetype,
          name: item.name,
          url: item.uri
        })
      });
      return newArr;
      
  }

  function getUrlForImage(id, arr){

    const index = arr.findIndex( el => el.id === id);
    const newArr = [{
      "id": arr[index].id,
      "filetype": arr[index].filetype,
      "name": arr[index].name,
      "url": arr[index].uri
    }]
    return newArr;
  }

  useEffect(()=>{
    const arr = [];
    musicDataFetched &&
    musicData.map( item => {
      const {attributes:{title,field_music_body:{processed}}} = item
      const {relationships:{field_music_audio:{data: dtAudio}}} = item;
      const {relationships:{field_music_image:{data:{id}}}} = item;
      arr.push({
        id: item.id,
        title: title,
        body: processed,
        audio: includedArr.length > 0 && getUrlForAudio(dtAudio, includedArr),
        image: includedArr.length > 0 && getUrlForImage(id, includedArr)   
      })
    })

    setDataArr(arr);

  },[includedArr, musicData, musicDataFetched]);


  return(
    <div>
      <MusicList listdata={includedArr.length > 0 && dataArr} />
    </div>
  )

}

export default Music;