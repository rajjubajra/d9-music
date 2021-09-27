import React from 'react'
import {GrClose} from 'react-icons/gr';


function TourDetail02({event_title, date, venue, body}) {

  //console.log(event_title, date, venue, body);

  return (
      <div className={`absolute top-0 md:relative z-10 bg-white
      p-10 md:block`}>

        <div className="w-full flex justify-end">
          <div className="cursor-pointer md:hidden" >
            <GrClose />
          </div>    
        </div>
        
        
        <h2 className="text-3xl">{event_title}</h2>
        <div className="grid grid-col-12 grid-flow-row gap-5">
          <div className="col-span-6">
            <div className="h-40 flex justify-center items-center border border-gray-300">{date}</div>
          </div>
          <div className="col-span-6">
            <div className="h-40 flex justify-center items-center border border-gray-300">Ticket</div>
          </div>

          <div className="col-span-12">
            <h3>Location</h3>
            <div><div dangerouslySetInnerHTML={{__html: venue}} /></div>
          </div>
          
          <div className="col-span-12">
            <div>
              <div dangerouslySetInnerHTML={{__html: body}} />
            </div>
          </div>

        </div>
      </div>

      
  )
}

export default TourDetail02
