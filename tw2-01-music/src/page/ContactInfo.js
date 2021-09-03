import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {actionContactInfo} from '../redux/actions';
import ImageOnload from '../components/ImageOnload';


function ContactInfo() {

  const dispatch = useDispatch()
  
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
              <h3 className="text-2xl">General Enquiries</h3>
              <p>infor@example.com</p>  
            </div>

            <div className="py-10">
              <h3 className="text-2xl mb-3">Booking Agencies</h3>
              <ul className="grid gap-y-4">
                <li>Agency one</li>
                <li>Agency one</li>
                <li>Agency one</li>
                <li>Agency one</li>
              </ul>
            </div>
      </>
  )
}

export default ContactInfo
