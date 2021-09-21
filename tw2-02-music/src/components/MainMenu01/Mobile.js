import React,{useState} from 'react';
import MenuIcon from './MenuIcon';
import {Link} from 'react-router-dom';

function Mobile({menudata, menu}) {

  const [show, setShow] = useState(false);

  return (
    <div>
    <div onClick={() => setShow( show ? false : true)}><MenuIcon crossed={show} /></div>
    {show && 
      <div className="flex flex-col my-5">
        { 
          menudata.length > 0 && 
          menudata.map((item)=>{
            return menu.some(el => el === item.title) &&
            <div>
              <Link onClick={() => setShow(false)} className="px-4 py-4 m-1 font-extralight 
              tracking-wider uppercase text-sm cursor-pointer" to="#">
              {item.title}</Link> 
            </div>
            })
        }
      </div>
    }
    
    </div>
  )
}

export default Mobile
