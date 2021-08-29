import React, {useState, useEffect} from 'react'

function ImageOnload({src, alt, cssClass}) {

  const [status, setStatus] = useState(false);
  const [blur, setBlur] = useState('blur-3xl');
  console.log(status);

  useEffect(()=>{

    status && setBlur('blur-none');

  },[status])

  return (
    <img 
    className={`${blur} ${cssClass}`}
    onLoad={()=>setStatus(true)}
    onError={()=>setStatus(false)}
    src={src} 
    alt={alt} 
    />
    
  )
}

export default ImageOnload
