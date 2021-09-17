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
    {/*
      length > 0 &&
        data.map(item => {
          const {attributes:{title, field_event_details, field_event_location, field_buy_ticket}} = item;
        return <div>
          <h1 className="text-2xl">{title}</h1>
          <div>
            <h2>Details:</h2>
            <div dangerouslySetInnerHTML={{__html: field_event_details.value}} />
            <h2>Location:</h2>
            <div dangerouslySetInnerHTML={{__html: field_event_location.value}} />
            <h2>Ticket</h2>
            <div><Link to={field_buy_ticket.uri}>{field_buy_ticket.title}</Link></div>
          </div>
          </div>
      })
     */}
    </div>
  )
}

export default Tour
