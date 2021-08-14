import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function MainNav() {

  const state = useSelector(state => state.reducerNav.nav_data);
  const length = useSelector(state => state.reducerNav.nav_dataLength);
  

  console.log("Nav", state);
  console.log("data nav", state.data );


  return (
    <div>
      {
      length > 0 
      ? state.data.map(item =>{
        const { attribution:{title, url}} = item
        return <Link to={url}>{title}</Link>
      })
      : "Data not loaded" 
      
      }
      
    </div>
  )
}

export default MainNav
