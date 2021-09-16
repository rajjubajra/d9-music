import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionMusic} from '../redux/actions';
import MusicList from './Music/MusicList';
import {useParams} from 'react-router-dom';
import MusicDetail from './Music/MusicDetail';

function Music(){

  const {id} = useParams();

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


console.log("music data fetched",musicDataFetched,"Music Data Inc",musicDataInc);

  /** NEW WORKOUT */
  const [file_file, setFile_file] = useState([]);
  const [media, setMedia] = useState([]);
  const [includedArr, setIncludedArr] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  const [singleDataArr, setSingleDataArr] = useState('');


/** SEPEARATE 'file--file' type into an Array - 'file-file  */
  useEffect(()=>{
    const arr = [];
    musicDataFetched &&
    musicDataInc.map((item) => {
      return item.type === 'file--file' &&
      arr.push({id: item.id, uri: item.attributes.uri, filetype: item.attributes.filemime})
    });
    setFile_file(arr);
  },[musicDataFetched, musicDataInc]);



  function getMediaId(type, item){
    switch(type){
      case 'media--audio':
        return item.relationships.field_media_audio_file.data.id;
      case 'media--image':
        return item.relationships.field_media_image.data.id;
      case 'media--remote_video':
        return item.id;
      default:
        return null
    }
  }

/** SEPERATE NOT 'file--file' type in an Array - 'media' */
  useEffect(() => {

    const arr = [];
    musicDataFetched &&
    musicDataInc.map((item)=>{
      return item.type !== 'file--file' &&
      arr.push({
        id: item.id, 
        audio_title: item.type === 'media--audio' ? item.attributes.field_audio_title : null,
        name:item.attributes.name,
        mediaId: getMediaId(item.type, item)
      })
    })
    setMedia(arr);
  },[musicDataFetched, musicDataInc]);


/** get "URL" From "file_file" array combined with "media" array "id" */

  function getUri(id, arr){
      const index = arr.findIndex( el => el.id === id);
      return arr[index].uri;
  }

/** get "FILE TYPE" From "file_file" array combined with "media" array "id" */

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
        audio_title: item.audio_title,
        uri: getUri(item.mediaId, file_file),
        filetype: getFileType(item.mediaId, file_file),
      })
    })
    setIncludedArr(arr);
  },[file_file, media]);


  console.log("FILE ARRAY", file_file);
  console.log("Media Array", media);
  console.log("Result", includedArr);
  //console.log("musicData", musicData);
  console.log("usethisData", dataArr);

  function getUrlForAudio(arr1, arr2){
      const newArr = [];
      arr2.length > 0 && arr1.length > 0 &&
      arr2.map( item => {
        return arr1.some( el => el.id === item.id ) &&
        newArr.push({
          id: item.id,
          title: item.audio_title,
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
      "url": arr[index].uri.url
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
    return  arr.push({
        id: item.id,
        title: title,
        body: processed,
        audio: includedArr.length > 0 && getUrlForAudio(dtAudio, includedArr),
        image: includedArr.length > 0 && getUrlForImage(id, includedArr)   
      })
    })

    setDataArr(arr);

  },[includedArr, musicData, musicDataFetched]);


  useEffect(() => {
    const index = dataArr.length > 0 && id && dataArr.findIndex( el => el.id === id);
    //console.log("INDEX",index);
    //console.log("selected data",dataArr[index]);
    //console.log("type of data", typeof(dataArr[index]));
    setSingleDataArr(dataArr[index]);
  },[dataArr, id])

  console.log("Single data", singleDataArr);


  return(
    <div className="max-w-screen-xl p-10 m-auto">
      {
        id ? <MusicDetail singleData={singleDataArr} /> :
        dataArr.length > 0 && <MusicList listdata={dataArr} />
      }   
    </div>
  )

}

export default Music;