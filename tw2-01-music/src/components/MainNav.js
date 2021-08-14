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
          return <Link className="m-1" to={url}>{title}</Link>
        })
        : 'data not loaded yet'
      }
    
    </div>
  )
}

export default MainNav
