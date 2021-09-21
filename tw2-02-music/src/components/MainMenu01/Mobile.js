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
            const {attributes:{title, url}} = item;
            /** URL Manupulation in order to multiple use of main manu */
            const newurl = url.split('/');
              newurl[0] = 'd9-music';
              newurl[1] = 'themes';
              newurl[2] = 'tw2-02';
              const useUrl = newurl.join('/');
            return menu.some(el => el === title) &&
            <div className="my-2">
              <Link onClick={() => setShow(false)} className="px-4 py-2 m-1 font-extralight 
              tracking-wider uppercase text-sm cursor-pointer" to={`/${useUrl}`}>
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
