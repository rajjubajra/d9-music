import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function MainNav() {

  const state = useSelector(state => state.reducerNav.nav_data.data);
  const length = useSelector(state => state.reducerNav.nav_dataLength);
  

  console.log("Nav", state);
  
  console.log("Length:",length);


  return (
    <div>
      <h1>Main Nav</h1>
      {
        length > 0
        ? state.map((item, index)=>{
          const {attributes:{title}} = item;
          return <Link key={index}>{title}</Link>
        })
        : 'data not loaded yet'
      }
    
    </div>
  )
}

export default MainNav
