import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionContactInfo} from '../redux/actions';
import ImageOnload from '../components/ImageOnload';


function ContactInfo() {

  const dispatch = useDispatch()

  const data = useSelector(state =>    state.reducerContactInfo.contact_info_data.data);
  const fetched = useSelector(state => state.reducerContactInfo.contact_info_fetched);
  
  useEffect(()=> {
    dispatch(actionContactInfo());
  },[dispatch]);

  
  return (
        <>
            <h2 className="text-3xl py-10">Contact</h2>

            <ImageOnload 
            cssClass="w-1/2 h-96 object-cover"
            src="./images/Music2011_5.jpeg" 
            alt="Music Page"
            />

            <div className="py-10">
              <h3 className="text-2xl">{fetched && data[0].attributes.title}</h3>
              <p>{fetched && data[0].attributes.field_contact_email}</p>  
            </div>

            <div className="py-10">
              <h3 className="text-2xl mb-3">Booking Agencies</h3>
              <ul className="grid gap-y-4">
                {
                  fetched && 
                  data[0].attributes.field_contact_booking_agency.map(item=>{
                    return <li>{item.uri}|{item.title}</li>
                  })
                }
              </ul>
            </div>
      </>
  )
}

export default ContactInfo
