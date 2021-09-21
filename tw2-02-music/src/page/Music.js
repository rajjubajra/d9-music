import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionMusic} from '../redux/actions';
import MusicList from './Music/MusicList';
import MusicDetail02 from './Music/MusicDetail02';
import {useParams} from 'react-router-dom';
import LoadingBar from '../components/LoadingBar';

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


    console.log("MUSIC DATA", musicData);
    console.log("FETCHED", musicDataFetched);
    console.log("INCLUDED", musicDataInc);

    
    const [arr,setArr] = useState([]);

    /** MERGE ARRAY BY id */
    function audioArray( arr1,arr2){
      const arr = [];

      /** GET AUDIO URI AND PUSH INTO THE ARR */
      function getAudioUri(audioId, arr2){
        arr2.map(item=>{
          return audioId === item.id 
          && arr.push(item.attributes.uri)
        })
      }

      /** GET AUDIO ID AND RUN FUNCTION TO GET URI */
      arr2.map( item => {
      return item.type === 'media--audio' &&
          arr1.some(el => el.id === item.id) 
          && getAudioUri(item.relationships.field_media_audio_file.data.id, arr2)
      })

      return arr;
    }

    /** GET IMAGE URI */
    function imageArray(id, arr2){
      
      const arr = [];
      
      /** GET IMAGE URI */
      function getUri(imageId, arr2){
        arr2.map(item => {
          return item.id === imageId &&
          arr.push(item.attributes.uri)
        })
      }  

      /** GET ID FOR IMAGE URI */
      arr2.map( item => {
        return id === item.id && 
        getUri(item.relationships.field_media_image.data.id, arr2);
      });

      /** RETURN IMAGE-URI IN ARRAY */
      return arr;
    
    }

    /** GET YOUTBE - VIDEO URL */
    function videoArray(id, arr2){
      const arr = [];
      arr2.map( item => {
        return id === item.id &&
        arr.push({
          youtube:item.attributes.field_media_oembed_video, 
          name: item.attributes.name})
      })
      return arr;
    }


    useEffect(()=>{
      const arr = [];
      musicDataFetched &&
      musicData.map((item) => {
        const { attributes:{title, field_music_body:{processed}} } = item;
        const { relationships:{field_music_audio:{data: audio}}} = item;
        const { relationships:{field_music_image:{data:{id: imageId} }}} = item;
        const { relationships:{field_music_video:{data:{id: videoId} }}} = item;
        return arr.push({
          id: item.id, 
          title:title, 
          body: processed,
          audio: audioArray(audio, musicDataInc),
          image: imageArray(imageId, musicDataInc),
          video: videoArray(videoId, musicDataInc),
        })
      });

      setArr(arr);

    },[musicData, musicDataFetched, musicDataInc])

    console.log("NEW ARRAY", arr, id);
  

  return(
    <div className="max-w-screen-xl md:p-10 p-1 m-auto">
      { musicDataFetched ?
        /** SECOND CODTIONTION */
        id 
        ? <MusicDetail02 index={id} arr={arr} />
        : <MusicList listdata={arr} />
        /******/
        : <LoadingBar />
      }
    </div>
  )

}

export default Music;