import { data } from 'autoprefixer';
import React from 'react';
import {Link} from 'react-router-dom';

function TourList({tourdata}) {

  const month = ["","Jan","Feb","Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return (
      <div className="max-w-screen-xl m-auto p-10 mb-6 font-extralight">
      {
        tourdata.length > 0 &&
        tourdata.map( item => {
          const {attributes:{title, field_event_date, field_event_details, field_event_location:{processed}, field_buy_ticket}} = item;
          const date = new Date(field_event_date);

          return <div key={item.id} 
          className="grid grid-rows-3 gap-1
                    md:grid-cols-7 md:grid-rows-1 mb-8">
            <div className="border border-gray-300 p-2 col-span-2 
                            md:col-span-1">
                            {month[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
                            </div>
            <div className="border border-gray-300 col-span-2
                            md:col-span-4 p-2">
              <div>
                <h2>{title}</h2>
                <div><div dangerouslySetInnerHTML={{__html: processed }} /></div>
              </div>
            </div>
            <div className="border border-gray-300 
                            md:col-span-1 p-2">
                <Link to="#">Details</Link>
            </div>  
            <div className="border border-gray-300 p-2">Ticket</div>      
          </div>
        })
      }
      
    </div>
  )
}

export default TourList
