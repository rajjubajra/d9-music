import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionTour} from '../redux/actions'


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
      <h1>Tour Page</h1>
    </div>
  )
}

export default Tour
