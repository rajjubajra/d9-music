import React,{useEffect} from 'react';
import ImageOnload from '../../components/ImageOnload';
import Iframe from 'react-iframe';
import {RiAmazonFill} from 'react-icons/ri';
import {FaSpotify, FaGooglePlay, FaYoutube} from 'react-icons/fa';
import {SiApplemusic} from 'react-icons/si';
import BtnBack from '../../components/Buttons/BtnBack';
//import {AiOutlinePlayCircle} from 'react-icons/ai';



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
      { singleData !== undefined &&
      <div className="grid grid-cols-12 gap-8 max-w-screen-xl m-auto p-10 font-extralight tracking-wide">

      <div className="col-span-11 text-right">share</div>
      <div className="text-center"><BtnBack /></div>
      
      <div className="col-span-12 md:col-span-6">
        <div>
          <div>
            <h3 className="text-3xl my-5">{singleData.title}</h3>
          </div>
          <div>
            <ImageOnload src={singleData.image[0].url} />
          </div>
          <div className="my-6">
            <div dangerouslySetInnerHTML={{__html: singleData.body}} />
          </div>
        </div>
      </div>
      
      <div className="col-span-12 md:col-span-6">

        <div className="px-10">
          <h3 className="py-4">Shop</h3>
          <div className="grid grid-cols-6 grid-rows-1">
            <div><RiAmazonFill /></div>
            <div><FaSpotify /></div>
            <div><FaGooglePlay /></div>
            <div><SiApplemusic /></div>
          </div>
        </div>

        <div className="px-10 py-8">
          <h3 className="py-4">Listen</h3>
          <div className="grid grid-cols-6 grid-rows-1">
            <div><FaYoutube /></div>
            <div><FaSpotify /></div>
            <div><SiApplemusic /></div>
          </div>
        </div>


        <div className="px-10 py-8">
          <h3 className="py-4">Play</h3>
          <Iframe  
            url="https://open.spotify.com/embed/playlist/37i9dQZF1DX3PFzdbtx1Us" width="100%" 
            height="380" 
            id="myId"
            />
        </div>

      </div>
    </div>
        /* singleData !== undefined &&
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
              <Iframe  
              url="https://open.spotify.com/embed/playlist/37i9dQZF1DX3PFzdbtx1Us" width="100%" 
              height="380" 
              id="myId" 
              />
            </div>
      </div> */
      }
    </div>
  )
}

export default MusicDetail