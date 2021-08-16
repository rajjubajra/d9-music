import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionMusic} from '../redux/actions';

function Music() {
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(actionMusic());
  },[dispatch])

  

  return (
    <div>
      <h1>Music Page</h1>
    </div>
  )
}

export default Music
