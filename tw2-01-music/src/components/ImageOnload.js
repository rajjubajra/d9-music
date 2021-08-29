import React, {useState, useEffect} from 'react'

function ImageOnload({src, alt, cssClass, height, width}) {

  const [status, setStatus] = useState(false);
  //const [blur, setBlur] = useState('hidden');
  const [imgHeight, setImgHeight] = (height/10);
  const [imgWidth, setImgWidth] = (width/10);
  console.log(status);

  useEffect(()=>{

    status && setImgHeight('auto');
    status && setImgWidth('auto');
  },[status])


  return (
    <img 
    width={imgWidth} height={imgHeight}
    className={`${cssClass}`}
    onLoad={()=>setStatus(true)}
    onError={()=>setStatus(false)}
    src={src} 
    alt={alt} 
    /> 
  )
}

export default ImageOnload
