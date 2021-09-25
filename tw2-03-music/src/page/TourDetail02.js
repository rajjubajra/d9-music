import {useState} from 'react'



function TourDetail02() {

  const [viewDetail, setViewDetail] = useState(false);
  const [event, setEvent] = useState(0);

  function view(index){
    setEvent(index);
    setViewDetail(true);
  }


  return (
      <div className={`${viewDetail ? 'block' : 'hidden'} 
      absolute top-0 md:relative z-10 bg-white
      p-10 md:block`}>

        <div className="w-full flex justify-end">
          <div className="cursor-pointer md:hidden" 
                onClick={() => setViewDetail(false)} >
            <GrClose />
          </div>    
        </div>
        
        
        <h2 className="text-3xl">
          {fetched && tourdata[event].attributes.title}
        </h2>
        <div className="grid grid-col-12 grid-flow-row gap-5">
          <div className="col-span-6">
            <div className="h-40 flex justify-center items-center border border-gray-300">
              {fetched &&  dateFormat(tourdata[event].attributes.field_event_date, month)}
            </div>
          </div>
          <div className="col-span-6">
            <div className="h-40 flex justify-center items-center border border-gray-300">
              Ticket
            </div>
          </div>

          <div className="col-span-12">
            <h3>Location</h3>
            <div>{fetched && 
              <div dangerouslySetInnerHTML={{__html: 
              tourdata[event].attributes.field_event_location.processed }} /> }
            </div>
          </div>
          
          <div className="col-span-12">
            <div>{ fetched && 
              <div dangerouslySetInnerHTML={{__html: 
              tourdata[event].attributes.field_event_details.processed }} />
              } 
            </div>
          </div>
        </div>
      </div>      
    
  )
}

export default TourDetail02
