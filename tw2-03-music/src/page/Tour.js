import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionTour} from '../redux/actions';
import TourList02 from './TourList02';
import TourDetail02 from './TourDetail02';



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
    
    setEventDate(fetched && tourdata[event].attributes.field_event_date);
    setTitle(fetched && tourdata[event].attributes.title);
    setVenue(fetched && tourdata[event].attributes.field_event_location.processed);
    setBody(fetched && tourdata[event].attributes.field_event_details.processed);

  },[fetched, tourdata, event])

  const view = (index) => ( setEvent(index) );

  const dateFormat = (date) => {
    const monthArr = ["","Jan","Feb","Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dt = new Date(date);
    return dt.getDate()+" "+ monthArr[dt.getMonth()]+ ", "+ dt.getFullYear()
  }


  //console.log(eventDate, title, venue, event, body);


  return (
    <div className="w-full max-w-screen-xl m-auto p-10 relative
    grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-2 font-extralight">
    
    {/** TOUR LIST */}
      <div>
        <h2 className="text-3xl">Tour</h2>
        {
          fetched &&
          tourdata.map((item, index) => {
            const {attributes:{field_event_date:date, title, 
            field_event_location:{processed:venue}}} = item;
            return <TourList02
                id={item.id}
                date={dateFormat(date)}
                title={title}
                venue={venue}
                index={index}
                view={view}
              />
          })
        }
        </div>
         {/* * TOUR DETAILS */}
        <div>
        {fetched &&
          <TourDetail02 
            event_title={title}
            date={dateFormat(eventDate)}
            venue={venue}
            body={body}
          />
        }  
        </div>

  </div>
  )
}

export default Tour