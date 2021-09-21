import React from 'react';
import {Link} from 'react-router-dom';


function Desktop({menudata, menu}) {

  return (
    <div className="flex justify-between">
          <div className="px-3 text-xl font-extralight">YW Music Two</div>
          <div className="flex">
          { 
          menudata.length > 0 && 
          menudata.map((item)=>{
            return menu.some(el => el === item.title) &&
            <div>
              <Link className="px-4 py-4 m-1 font-extralight 
              tracking-wider uppercase text-sm cursor-pointer" to="#">
              {item.title}</Link> 
            </div>
            })
          }
          </div>
      </div>
  )
}

export default Desktop
