import React, {useState, useEffect} from 'react';
import {baseurl} from '../config/config';
import { useDispatch, useSelector } from 'react-redux';
import ajax from '../config/ajax';
import {actionBasicContactForm} from '../redux/actions';



function Contact() {

  const dispatch = useDispatch();
  const contact_form = useSelector(state => state.reducerBasicContactForm.contact_form_data.data);
  const contact_form_fetched = useSelector(state => state.reducerBasicContactForm.contact_form_fetched);
  console.log("Conf message", contact_form_fetched && contact_form);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitMessage, setSubmitMessage] = useState(false);


  useEffect(()=>{
    
    dispatch(actionBasicContactForm())


    submitMessage &&
    setName('');
    setEmail('');
    setMessage('');
    

  },[dispatch, submitMessage])
  


  console.log(name, email, message, "sumbited", submitMessage);

  const handleSubmit = async (e) =>{
    e.preventDefault();

    console.log(name, email, message);

    const data = {
      "webform_id": "contact",
      "name": name,
      "email": email,
      "message": message
    }

    const webform_rest_url = `${baseurl.URL}/webform_rest/submit`;

    try{
      const axios = await ajax(); //wait for initalized axios object
      const response = await axios.post(webform_rest_url, data);
      response.status === 200 && setSubmitMessage(true);
      //console.log("Data Posted:",response);
    }catch(e){
      console.log(e);
    }

  }

  return (

    <div className="md:p-10">
      <h1 className="text-3xl font-extralight my-5">
        {contact_form_fetched && contact_form.attributes.title}
      </h1>
      <div className="font-extralight tracking-wider">
        {contact_form_fetched && !submitMessage && contact_form.attributes.description}</div>
      <div className="text-1xl text-center">
        {submitMessage && contact_form_fetched && contact_form.attributes.settings.confirmation_message }
      </div>

      { !submitMessage &&
      <form onSubmit={handleSubmit}  method="post">
        <div className="grid grid-cols-2 grid-flow-row">
          <div className="col-span-2 md:col-span-1">
            <input 
            required
            className="border-t border-l border-r 
            md:border-r-0 border-gray-300 
            outline-none p-1 w-full" 
            type="text" 
            placeholder="Name" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
          </div>  
          <div className="col-span-2 md:col-span-1">
            <input 
            required
            className="border-t border-l border-r border-gray-300 
            outline-none p-1 w-full" 
            type="text" 
            placeholder="Email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="h-20 col-span-2">
            <textarea 
            required
            className="col-span-2 border border-gray-300 
            outline-none p-1 w-full h-20" placeholder="Message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}></textarea>
          </div>
          <div className="col-span-2 mt-2">
            <input 
            className="px-4 py-1 h-10 border border-gray-400 
            outline-none text-gray-500 cursor-pointer" 
            type="submit" 
            value="Submit" />
          </div>  
        </div>
      </form>
      }
    </div>
    
  )
}

export default Contact