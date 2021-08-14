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
      <h1>Main Nav</h1>
      {
        state.data.length > 0 
        ? state.data.map(item=>{
          const {attributes:{title}} = item;
          return <Link to="#">{title}</Link>
        })
        : "DATA NOT LOADED"

      }
    </div>
  )
}

export default MainNav
