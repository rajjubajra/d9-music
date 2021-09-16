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

    console.log("MUSIC DATA", musicData);
    console.log("FETCHED", musicDataFetched);
    console.log("INCLUDED", musicDataInc);

    const [arr,setArr] = useState([]);

    function audioArray( arr1,arr2){
      const arr = [];
      arr2.map( item => {
          return item.type === 'media--audio' &&
          arr1.some(el => el.id === item.id) &&
          arr.push({
            id: item.id,
            title: item.attributes.field_audio_title,
            data: item.relationships.field_media_audio_file.data,
          })
      })
      return arr;
    }


    useEffect(()=>{

      const arr = [];
      musicDataFetched &&
      musicData.map((item) => {
        const { attributes:{title, field_music_body:{processed}} } = item;
        const { relationships:{field_music_audio:{data: audio}}} = item;
        const { relationships:{field_music_image:{data: image}}} = item;
        const { relationships:{field_music_video:{data: video}}} = item;
        return arr.push({
          id: item.id, 
          title:title, 
          body: processed,
          audio: audioArray(audio, musicDataInc),
          image: image,
          video: video,
        })
      });

      setArr(arr);

    },[musicData, musicDataFetched, musicDataInc])

    console.log("NEW ARRAY", arr);

  return(
    <div className="max-w-screen-xl p-10 m-auto">
      <h3>Music Album</h3>
    </div>
  )

}

export default Music;