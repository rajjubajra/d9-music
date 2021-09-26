import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionTour} from '../redux/actions'
import TourList02 from './TourList02';

function Tour() {

  const dispatch = useDispatch();

  const data = useSelector(state => state.reducerTour.tour_data.data);
  const length = useSelector(state => state.reducerTour.tour_dataLength);

  console.log(data, "length", length);

  useEffect(()=>{
    dispatch(actionTour());
  },[dispatch])

  
  function ViewDetail(index){
    return console.log("index passed",index);

  }



  const monthArr = ["","Jan","Feb","Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div>
      <TourList02 
      tourdata={length > 0 ? data : []} monthArr={monthArr} 
      viewDetail={ViewDetail}/> 
    </div>
  )
}

export default Tour
