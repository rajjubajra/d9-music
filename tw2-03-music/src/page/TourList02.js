import {GrFormNextLink} from 'react-icons/gr';



function TourList02({date, title, venue, view, index}) {


    return (
    <div className="grid grid-cols-12 grid-flow-row gap-2 py-5
              border-t border-gray-300">
          <div className="col-span-12">{date}</div>
              <div className="col-span-12">
                  <h2 className="text-2xl">{title}</h2>
                  <div><div dangerouslySetInnerHTML={{__html:venue}} /></div>
              </div>
              <div className="col-span-6 border border-gray-200">
                  <div className="cursor-pointer p-2 text-sm flex"
                    onClick={() => view(index)} >
                  <div>View Detail</div>
                  <div className="pt-1 px-2"><GrFormNextLink /></div>
              </div>
          </div>
          <div className="col-span-6 border border-gray-200 p-2">Ticket</div>
      </div>
    )
}

export default TourList02