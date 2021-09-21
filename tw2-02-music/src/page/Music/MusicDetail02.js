import React,{useEffect, useState} from 'react';
import {RiAmazonFill} from 'react-icons/ri';
import {FaSpotify, FaGooglePlay, FaYoutube} from 'react-icons/fa';
import {SiApplemusic} from 'react-icons/si';
//import {AiOutlinePlayCircle} from 'react-icons/ai';
import ImageOnload from '../../components/ImageOnload';


function MusicDetail02({arr, index}) {

  const [fetched, setFetched] = useState(false);

  useEffect(()=>{
    arr.length > 0 && setFetched(true);
  },[arr.length])

  return (
    <div className="w-full max-w-screen-xl m-auto md:p-10 p-1">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row">

        <div>
          <h3 className="text-3xl my-5">{fetched && arr[index].title}</h3>
          <div>
            {fetched && 
            <ImageOnload 
            src={arr[index].image[0].url} 
            alt="cover" />}
          </div>
          <div className="my-6">
            <div className="font-light" dangerouslySetInnerHTML={{__html: fetched && arr[index].body}} />
          </div>
        </div>

        <div className="px-10">
          <h3 className="text-2xl">Play List:</h3>
          <div className="my-10 grid grid-cols-1 grid-flow-row gap-7">
            <div className="p-10 border border-gray-200 cursor-pointer"><RiAmazonFill /></div>
            <div className="p-10 border border-gray-200 cursor-pointer"><FaSpotify /></div>
            <div className="p-10 border border-gray-200 cursor-pointer"><FaGooglePlay /></div>
            <div className="p-10 border border-gray-200 cursor-pointer"><FaYoutube /></div>
            <div className="p-10 border border-gray-200 cursor-pointer"><SiApplemusic /></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MusicDetail02