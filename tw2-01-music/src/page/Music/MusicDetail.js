import React,{useEffect, useState} from 'react';
import ImageOnload from '../../components/ImageOnload';


function MusicDetail({singleData}) {
  
  
  console.log("passsing",singleData);
  

  return (
    <div>
      <h1>Music Page</h1>
      {
        singleData.length > 0 &&
        <div className="m-5 p-3">
            <h2 className="my-2">{singleData[0].title}</h2>
            
            <div dangerouslySetInnerHTML={{__html: singleData[0].body}} />
          
            <ul className="m-5 border p-4">
              
            </ul>            
          </div>
      }
    </div>
  )
}

export default MusicDetail