import React from 'react';
import {useSelector} from 'react-redux';


function Tour() {

  const data = useSelector(state => state.reducerTour.tour_data.data);
  const length = useSelector(state => state.reducerTour.tour_dataLength);

  console.log(data, "length", length);


  return (
    <div>
      <h1>Tour Page</h1>
    </div>
  )
}

export default Tour
