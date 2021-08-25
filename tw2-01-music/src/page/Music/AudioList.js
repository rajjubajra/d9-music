import React from 'react'


function AudioList(props) {

  //console.log("test - data", props.data);

  return (
    props.data.map(item =>{
      const {title, uri} = item;
      return <li>
        <h3>{title}</h3>
        <div>Audio link: {uri.url}</div>
      </li>
    })
  )

}

export default AudioList
