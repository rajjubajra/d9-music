import React, {useState} from 'react'

function ImageOnload({src, alt, cssClass}) {

  const [status, setStatus] = useState(false);
  console.log(status);

  return (
    status &&
    <img 
    className={cssClass}
    onLoad={()=>setStatus(true)}
    onError={()=>setStatus(false)}
    src={src} 
    alt={alt} 
    />
    
  )
}

export default ImageOnload
