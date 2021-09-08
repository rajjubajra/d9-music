import React,{useEffect} from 'react';
import ImageOnload from '../../components/ImageOnload';



function MusicDetail({singleData}) {

  // useEffect(()=>{
  //   setTimeout(() => {
  //     if(singleData === ''){ window.location.href = "/d9-music/themes/tw2-01/music"}
  //     console.log("three sec gone")
  //   }, 3000);
  // },[singleData])
  
  
  console.log("single data",singleData);
  console.log("passsing",typeof(singleData));

  console.log("If undefined", singleData  !== undefined && singleData.title)
  

  return (
    <div>
      {
        singleData !== undefined &&
        <div className="m-5 p-3">
            <h2 className="my-2">{singleData.title}</h2>
            <ul className="m-5 border p-4">
              <ImageOnload
                src={singleData.image[0].url}
                alt="Cover"
              />
            </ul>   
            <div dangerouslySetInnerHTML={{__html: singleData.body}} />
            <div>
              <h3>Play songs</h3>
              
            </div>
      </div>
      }
    </div>
  )
}

export default MusicDetail