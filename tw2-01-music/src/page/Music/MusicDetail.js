import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionMusic, actionMediaAudio} from '../redux/actions';
import AudioList from './Music/AudioList';


function MusicDetail() {
  
  const dispatch = useDispatch();

  /** DRUPAL MEDIA LIBRARY FILE DATA */
  const mediaAudio = useSelector(state => state.reducerMediaAudio.media_audio_data.data );
  const mediaAudioInc = useSelector(state => state.reducerMediaAudio.media_audio_data.included);
  const mediaAudioLength = useSelector(state => state.reducerMediaAudio.media_audio_dataLength);
  const mediaAudioFetched = useSelector(state => state.reducerMediaAudio.media_audio_fetched);


  /** DRUPAL DATA CREATED BY CONTENT TYPE */
  const musicData = useSelector(state => state.reducerMusic.music_data.data);
  const musicDataInc = useSelector(state => state.reducerMusic.music_data.included);
  const musicDataLength = useSelector(state => state.reducerMusic.music_dataLength);
  
  
  /** FINAL DATA TO VIEW ON PAGE */
  const [ viewData, setViewData ] = useState([]); 

  /** DRUPAL MEDIA FILE AUDIO DATA FILTERED */
  const [audioData, setAudiData] = useState([]);
  

  /** RUN action  */
  useEffect(()=>{
    dispatch(actionMusic());
    dispatch(actionMediaAudio());
  },[dispatch])

  console.log("media audio",mediaAudio,"media audio lnc", mediaAudioInc,mediaAudioLength);
  console.log(musicData, musicDataInc, musicDataLength);


  /** AudioMedia "data" array  and "included" array merged */
  useEffect(()=>{
    let start = 0;
    const audio = [];
    console.log("media audio length in use",mediaAudioLength)
    console.log( mediaAudioFetched && mediaAudio[0].id );
    console.log( mediaAudioFetched && mediaAudio[start].id );
    console.log(mediaAudioFetched);
    mediaAudioFetched && 
    mediaAudioInc.map((obj, index) => {
      const {attributes:{uri:{url}, filemime, filesize}} = obj;
      return audio.push({
        id: mediaAudio[index].id, 
        title: mediaAudio[index].attributes.field_audio_title, 
        filetype: filemime,
        filesize: filesize,
        url: url
      });
    })
    setAudiData(audio);

  },[mediaAudio, mediaAudioInc, mediaAudioLength, mediaAudioFetched])
  
  console.log("Audio data +: ",audioData);  


  /** FUNCTION: merge Array with same "id"  */
  function mergeArrayObjects(arr1,arr2){
   // let start = 0;
    let merge = [];
    arr2.map(item => {
    return arr1.some((el) => el.id === item.id) && 
        merge.push({id: item.id, title: item.title, url: item.url});
      
    })
    return merge;
  }


  /** AudioMedia and MusicData */
  useEffect(()=>{
    const arr = [];
    console.log("final array",arr);
    
    musicDataLength > 0 && audioData.length > 0 &&
    musicData.map((item)=>{
      const {attributes:{title, field_music_body}} = item;
      const {relationships:{field_music_audio:{data}}} = item;
      arr.push({
        id: item.id,
        title: title, 
        body: field_music_body.processed,
        data: mergeArrayObjects(data, audioData)
      });
    })
    

    /** FINAL DATA TO VIEW ON PAGE */
    setViewData(arr);

  },[audioData, musicData, musicDataLength])


  console.log("view Data", viewData, "vlength ",viewData.length );
  console.log("view data type: ",typeof(viewData));


  return (
    <div>
      <h1>Music Page</h1>
      {
        viewData.length > 0 &&
        viewData.map((item)=>{
          const {id, title, body, data } = item;
          return <div key={id} className="m-5 p-3">
            <h2 className="my-2">{title}</h2>
            <div dangerouslySetInnerHTML={{__html: body}} />
            {console.log(typeof(data))}
            {console.log(data)}
            <ul className="m-5 border p-4">
              {AudioList({data})}
            </ul>            
          </div>
        })
      }
    </div>
  )
}

export default MusicDetail