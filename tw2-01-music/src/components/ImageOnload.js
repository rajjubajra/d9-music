import React, {useState, useEffect} from 'react'

function ImageOnload({src, alt, cssClass}) {

  const [status, setStatus] = useState(false);
  const [blur, setBlur] = useState('hidden');
  console.log(status);

  useEffect(()=>{

    status && setBlur('');
    const img = new Image();
    img.onload = function() {
      alert(`${this.width} x ${this.height}`);
    }
    img.src = {src};

  },[src, status])

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
