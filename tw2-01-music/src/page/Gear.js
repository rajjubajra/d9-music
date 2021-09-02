import React from 'react'
import ImageOnload from '../components/ImageOnload';

function Gear(props) {

  return (
    <div className="p-10">
    <div className="grid w-full
    md:w-1/2 md:m-10 lg:max-w-screen-sm bg-gray-200 ">
      
      <div>
        <ImageOnload src="./images/Music2011_3.jpeg" 
        alt="Music Gear" 
        cssClass="w-full"
        />
      </div>
        
      <div className="mt-2 px-3">
        <h3 className="text-2xl">{props.title ? props.title : 'Title'}</h3>
      </div>
      <div className="px-3 py-2">
        {props.text 
          ? <div dangerouslySetInnerHTML={{__html: props.text}}  /> 
          : 'Text contents goes here'}
      </div>
    </div>
    </div>
  )
}

export default Gear