import React, {useState, useEffect} from 'react';
import LoadingBar from '../components/LoadingBar';

function ImageOnload({src, alt, cssClass}) {

  const [loading, setLoading] = useState(false);
  //const [image, setImage] = useState('');
  
  //console.log("loading",loading);  

  useEffect(()=>{
    const img = new Image();
        img.onload =() => {
          // image has been loaded
          setLoading(true);
        };
        img.src = src;
  },[src])

  return (
    loading ?
    <img 
      width="100%"
      height="100%"
      className={cssClass}
      src={src} 
      alt={alt} 
    /> 
    : <LoadingBar /> 
  )
}

export default ImageOnload