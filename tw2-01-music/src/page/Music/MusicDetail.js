import React,{useEffect, useState} from 'react';
import ImageOnload from '../../components/ImageOnload';


function MusicDetail({singleData}) {
  
  
  console.log("single data",singleData);
  console.log("passsing",typeof(singleData));

  console.log("If undefined", singleData  !== undefined && singleData.title)
  

  return (
    <div>
      {
        singleData !== undefined &&
        <div className="m-5 p-3">
            <h2 className="my-2">{singleData.title}</h2>
            <div dangerouslySetInnerHTML={{__html: singleData.body}} />
            <ul className="m-5 border p-4">
              
            </ul>            
      </div>
      }
    </div>
  )
}

export default MusicDetail