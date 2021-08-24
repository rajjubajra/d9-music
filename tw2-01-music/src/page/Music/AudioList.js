import React from 'react'


function AudioList(data) {
  return (
    
    data.map(item =>{
      const {title, uri:{url}} = item;
      return <li>
        <h3>{title}</h3>
        <div>{url}</div>
      </li>
    })
    
  )
}

export default AudioList
