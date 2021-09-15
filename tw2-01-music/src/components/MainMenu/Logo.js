import {useState} from 'react';

function Logo() {

  const url_1 = './yellow-website-square150x150.png';
  const url_2 = '../yellow-website-square150x150.png'

  const [imageLoaded, setImageLoaded] = useState(false);



  return (
    <div>
      <img 
        width='50px'
        height='auto'
        src={imageLoaded ? url_1 : url_2 }
        onLoad={()=>setImageLoaded(true)} 
        onError={()=>setImageLoaded(false)}
        alt="logo" />
    </div> 
  )
}

export default Logo