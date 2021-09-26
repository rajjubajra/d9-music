import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionTour} from '../redux/actions';



function Tour() {
  const dispatch = useDispatch();

  const tourdata = useSelector(state => state.reducerTour.tour_data.data);
  const fetched = useSelector(state => state.reducerTour.tour_fetched);

  console.log(tourdata);

  useEffect(()=>{
    dispatch(actionTour());
  },[dispatch])



  console.log(tourdata, "fetched", fetched);

  const [event, setEvent] = useState(0)
  const [eventDate, setEventDate] = useState('');
  const [title, setTitle] = useState('');
  const [venue, setVenue] = useState('');
  const [body, setBody] = useState('');

  useEffect(()=>{
    const {attributes:{field_event_date, title, 
      field_event_location:{processed}}
    } = tourdata;

    // setEventDate(field_event_date);
    // setTitle(title);
    // setVenue(venue);
    // setBody(body);
  },[tourdata, event])

  const view = (index) => ( setEvent(index) );

  console.log(eventDate, title, venue, event, body);


  return (
    <div>
      this is test page
    </div>
  )
}

export default Tour
