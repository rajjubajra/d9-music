import React,{useState} from 'react';
import MenuIcon from './MenuIcon';
import {Link} from 'react-router-dom';

function Mobile({menudata,length ,menu}) {

  const [show, setShow] = useState(false);

  return (
    <div>
    <div onClick={() => setShow( show ? false : true)}><MenuIcon crossed={show} /></div>
    {show && 
      <div className="flex flex-col my-5">
        { 
          length > 0 && 
          menudata.map((item)=>{
            const {attributes:{title}} = item;
            //return menu.some(el => el === title) &&
            <div>
              <Link onClick={() => setShow(false)} className="px-4 py-4 m-1 font-extralight 
              tracking-wider uppercase text-sm cursor-pointer" to="#">
              {title}</Link> 
            </div>
            })
        }
      </div>
    }
    
    </div>
  )
}

export default Mobile
