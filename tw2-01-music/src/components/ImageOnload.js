import React, {useState, useEffect} from 'react'

function ImageOnload({src, alt, cssClass}) {

  const [status, setStatus] = useState(false);
  const [blur, setBlur] = useState('hidden');
  console.log(status);

  useEffect(()=>{
    status && setBlur('');
  },[status])

  

  return (
    <img 
    width="100%"
    height="100%"
    className={`${blur} ${cssClass}`}
    onLoad={()=>setStatus(true)}
    onError={()=>setStatus(false)}
    src={src} 
    alt={alt} 
    /> 
  )
}

export default ImageOnload
