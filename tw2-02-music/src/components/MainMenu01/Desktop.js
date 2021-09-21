import React from 'react';
import {Link} from 'react-router-dom';


function Desktop({menudata, length,menu}) {

  return (
    <div className="flex justify-between">
          <div className="px-3 text-xl font-extralight">YW Music Two</div>
          <div className="flex">
          { 
          length > 0 && 
          menudata.map((item)=>{
            const {attributes:{title}} = item;
            //return menu.some(el => el === title) &&
          return <div>
              <Link className="px-4 py-4 m-1 font-extralight 
              tracking-wider uppercase text-sm cursor-pointer" to="#">
              {title}</Link> 
            </div>
            })
          }
          </div>
      </div>
  )
}

export default Desktop
