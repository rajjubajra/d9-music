import {useState, useEffect} from 'react';

function Logo() {

  const [loaded, setLoaded] = useState(false);
  const [imgUrl, setimgUrl] = useState('');

  const url = ['./yellow-website-square150x150.png', './../yellow-website-square150x150'];
  
  for(let i = 0; i < url.length && !loaded ; i++) {
    setimgUrl(url[i])
    loaded && setLoaded(true);
  }

  return (
    <div>
      <img 
        width='50px'
        height='auto'
        src={imgUrl}
        onLoad= {() => setLoaded(true)}
        onError= {() => setLoaded(false)}
        alt="logo" />
    </div> 
  )
}

export default Logo