import React, {useState, useEffect} from 'react'

function ImageOnload({src, alt, cssClass, height, width}) {

  const [status, setStatus] = useState(false);
  const [blur, setBlur] = useState('blur-3xl');
  const [imgHeight, setImgHeight] = useState(parseInt(height)/1000);
  const [imgWidth, setImgWidth] = useState(parseInt(width)/1000);
  console.log(status);

  useEffect(()=>{

    status && setImgHeight('auto') && setImgWidth('auto') && setBlur('blur-none')

  },[status])

  console.log("image size",imgWidth, imgHeight);

  return (
    <img 
    width={imgWidth} height={imgHeight}
    className={`${blur} ${cssClass}`}
    onLoad={()=>setStatus(true)}
    onError={()=>setStatus(false)}
    src={src} 
    alt={alt} 
    /> 
  )
}

export default ImageOnload
