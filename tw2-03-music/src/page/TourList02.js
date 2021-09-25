import React,{useEffect, useState} from 'react';
import {GrFormNextLink, GrClose} from 'react-icons/gr';



function TourList02({tourdata, monthArr}) {


  return (
    <div className="w-full max-w-screen-xl m-auto p-10 relative grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-2 font-extralight">

      {/** TOUR LIST */}
      <div>
        <h2 className="text-3xl">Tour</h2>
        {
          tourdata.length > 0 &&
          tourdata.map((item, index) => {
              const {attributes:{title, field_event_date, field_event_details, field_event_location:{processed}, field_buy_ticket}} = item;
          
              return  <div key={item.id} className="grid grid-cols-12 grid-flow-row gap-2 py-5
              border-t border-gray-300">
                <div className="col-span-12">
                  {field_event_date}
                </div>
                <div className="col-span-12">
                  <h2 className="text-2xl">{title}</h2>
                  <div><div dangerouslySetInnerHTML={{__html: processed}} /></div>
                </div>
                <div className="col-span-6 border border-gray-200">
                  <div className="cursor-pointer p-2 text-sm flex">
                  <div>View Detail</div>
                  <div className="pt-1 px-2">
                    <GrFormNextLink />
                  </div>
                </div>
                </div>
                <div className="col-span-6 border border-gray-200 p-2">Ticket</div>
              </div>
          })
        }
      </div>


    
    
    </div>
  )
}

export default TourList02
