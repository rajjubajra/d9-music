import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionTour} from '../redux/actions'
import {Link} from 'react-router-dom';
import TourList from './TourList';

function Tour() {

  const dispatch = useDispatch();

  const data = useSelector(state => state.reducerTour.tour_data.data);
  const length = useSelector(state => state.reducerTour.tour_dataLength);

  console.log(data, "length", length);

  useEffect(()=>{
    dispatch(actionTour());
  },[dispatch])


  return (
    <div>
      <TourList tourdata={length > 0 ? data : []} /> 
    </div>
  )
}

export default Tour
