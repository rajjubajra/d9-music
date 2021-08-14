import React, {useEffect} from 'react';
import {action} from '../redux/actions';
import {useDispatch} from 'react-redux';

function Homepage() {

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(action());
  },[dispatch])

  return (
    <div>
      <h1>Test Page</h1>      
    </div>
  )
}

export default Homepage
