import React,{useEffect} from 'react';
import ImageOnload from '../../components/ImageOnload';
import Spotify from 'react-spotify-embed';


function MusicDetail({singleData}) {

  // useEffect(()=>{
  //   setTimeout(() => {
  //     if(singleData === ''){ window.location.href = "/d9-music/themes/tw2-01/music"}
  //     console.log("three sec gone")
  //   }, 3000);
  // },[singleData])
  
  
  console.log("single data",singleData);
  console.log("passsing",typeof(singleData));

  console.log("If undefined", singleData  !== undefined && singleData.title)
  

  return (
    <div>
      {
        singleData !== undefined &&
        <div className="m-5 p-3">
            <h2 className="my-2">{singleData.title}</h2>
            <ul className="m-5 border p-4">
              <ImageOnload
                src={singleData.image[0].url}
                alt="Cover"
              />
            </ul>   
            <div dangerouslySetInnerHTML={{__html: singleData.body}} />
            <div>
              <h3>Play songs</h3>
              <div>
                <Spotify link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83" />
              </div>
              <div>
              <Spotify link="https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw" />
              </div>
              <div>
              <Spotify wide link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83"/>
              </div>
              
            </div>
      </div>
      }
    </div>
  )
}

export default MusicDetail