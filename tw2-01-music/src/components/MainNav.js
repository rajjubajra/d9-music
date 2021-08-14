import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function MainNav() {

  const state = useSelector(state => state.reducerNav.nav_data);
  const length = useSelector(state => state.reducerNav.nav_dataLength);
  

  console.log("Nav", state);
  console.log("data nav", state.data );
  
  console.log("Length:",length);


  return (
    <div>
      <h1>Main Nav</h1>
     
    </div>
  )
}

export default MainNav
