import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function MainNav() {

  const state = useSelector(state => state.reducerNav.nav_data.data);
  const length = useSelector(state => state.reducerNav.nav_dataLength);
  

  console.log("Nav", state);
  
  console.log("Length:",length);


  return (
    <div className="w-full h-8 bg-gray-100 flex justify-center align-middle">
      {
        length > 0
        ? state.map((item, index) =>{
          const {attributes:{title, url}} = item;
          /** URL Manupulation in order to multiple use of main manu */
          const newurl = url.split('/');
          newurl[0] = 'd9-music';
          newurl[1] = 'themes';
          newurl[2] = 'tw2-01';
          console.log("new url",newurl);
          return <Link className="m-1" to={url}>{title}</Link>
        })
        : 'data not loaded yet'
      }
    
    </div>
  )
}

export default MainNav
