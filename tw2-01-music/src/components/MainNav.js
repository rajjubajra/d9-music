import React from 'react';
import {useSelector} from 'react-redux';


function MainNav() {

  const state = useSelector(state => state.reducerNav.nav_data);

  console.log("Nav",state);


  return (
    <div>
      
    </div>
  )
}

export default MainNav
