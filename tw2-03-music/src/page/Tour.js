import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionTour} from '../redux/actions';



function Tour() {
  const dispatch = useDispatch();

  const tourdata = useSelector(state => state.reducderTour.tour_data);

  console.log(tourdata);

  useEffect(()=>{
    dispatch(actionTour());
  },[dispatch])

  return (
    <div>
      this is test page
    </div>
  )
}

export default Tour
