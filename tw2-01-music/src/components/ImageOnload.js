import React, {useState} from 'react'

function ImageOnload({src, alt}) {

  const [status, setStatus] = useState(false);
  console.log(status);

  return (
    <img 
    onLoad={()=>setStatus(true)}
    onError={()=>setStatus(false)}
    src={src} 
    alt={alt} 
    />
    
  )
}

export default ImageOnload
