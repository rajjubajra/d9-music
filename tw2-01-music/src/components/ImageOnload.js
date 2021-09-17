import React, {useState, useEffect} from 'react';
import LoadingBar from '../components/LoadingBar';

function ImageOnload({src, alt, cssClass}) {

  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blur, setBlur] = useState('hidden');

  console.log("status",status, "loading",loading);  

  useEffect(()=>{
    status && setLoading(true);
  },[status])

  

  return (
    loading ?
    <img 
    width="100%"
    height="100%"
    className={`${blur} ${cssClass}`}
    onLoad={setStatus(true)}
    onError={setStatus(false)}
    src={src} 
    alt={alt} 
    /> 
    : <LoadingBar /> 
  )
}

export default ImageOnload
