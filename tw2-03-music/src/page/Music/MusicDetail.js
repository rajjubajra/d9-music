import {useEffect, useState} from 'react';
import ImageOnload from '../../components/ImageOnload';
import Iframe from 'react-iframe';
import {RiAmazonFill} from 'react-icons/ri';
import {FaSpotify, FaGooglePlay, FaYoutube} from 'react-icons/fa';
import {SiApplemusic} from 'react-icons/si';
import BtnBack from '../../components/Buttons/BtnBack';
import {Link} from 'react-router-dom';



function MusicDetail({index, arr}) {

  

  const [youtube, setYoutube] = useState();
  const [shareTitle, setShareTitle] = useState('Share');

  useEffect(()=>{

  /** Drupal media do not accept embed url
   * so separated uniqe code from the url
   */
  const ytube = arr[index].video[0].youtube;
  setYoutube(ytube.replace("https://youtu.be/", ""));



  },[arr, index])

  function copyShare(){
    navigator.clipboard.writeText(window.location.href)
    setShareTitle('Link copied');
  }

  return (
    <div>
      <div className="grid grid-cols-12 gap-8 max-w-screen-xl m-auto p-10 font-extralight tracking-wide">

      <div className="col-span-11 text-right cursor-pointer text-xs">
        <div onClick={() => copyShare()} title={shareTitle}>
            <div 
            onMouseEnter={() => setShareTitle( shareTitle === "Link copied" 
                                ? "Link copied" :"Copy Link")} 
            onMouseLeave={() => setShareTitle( shareTitle === "Link copied" 
                                ? "Link copied" : "Share")}
            >{shareTitle}</div>
          </div>
      </div>
      <div className="text-center cursor-pointer">
        <Link to="/d9-music/themes/tw2-03/music"><BtnBack /></Link>
      </div>
      
      <div className="col-span-12 md:col-span-6">
        <div>
          <div>
            <h3 className="text-3xl my-5">{arr[index].title}</h3>
          </div>
          <div>
            <ImageOnload src={arr[index].image[0].url} />
          </div>
          <div className="my-6">
            <div dangerouslySetInnerHTML={{__html: arr[index].body}} />
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

        <div className="px-10 py-8">
          <Iframe 
            url={`https://www.youtube.com/embed/${youtube}`}
            width="100%"
            id="myId"
          />  
        </div>

      </div>
    </div>

    </div>
  )
}

export default MusicDetail