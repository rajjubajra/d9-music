import React, {useState, useEffect} from 'react'

function ImageOnload({src, alt, cssClass}) {

  const [status, setStatus] = useState(false);
  const [blur, setBlur] = useState('hidden');
  console.log(status);

  useEffect(()=>{
    console.log('effect 1')

    status && setBlur('');

  },[status])

  useEffect(()=>{    
    console.log('effect 2')
    const img = new Image();
    img.src = {src};
    img.onload = function() {
      console.log(img.width, img.height);
    }

  },[src])

  return (
    <img 
    width="auto" height="auto"
    className={`${blur} ${cssClass}`}
    onLoad={()=>setStatus(true)}
    onError={()=>setStatus(false)}
    src={src} 
    alt={alt} 
    /> 
  )
}

export default ImageOnload
