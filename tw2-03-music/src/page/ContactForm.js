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
    <div>
      <h1 className="text-3xl text-center m-5">
        {contact_form_fetched && contact_form.attributes.title}
      </h1>
      <div className="text-center">
        {contact_form_fetched && !submitMessage && contact_form.attributes.description}</div>
      <div className="text-1xl text-center">
        {submitMessage && contact_form_fetched && contact_form.attributes.settings.confirmation_message }
      </div>
      <div className="w-full flex justify-center align-middle">
        <form onSubmit={handleSubmit}  method="post" class="w-full md:w-3/6 p-4 m-5 flex flex-col">
        <div>
          <input 
          className="w-full md:w-1/2 outline-none p-2 border-gray-500 
          border-l border-r border-t border-b-0
          md:border-l md:border-r md:border-t md:border-b-0" 
          required
          type="text" 
          id="name"  
          name="name"  
          placeholder="Name" 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
          <input 
          className="w-full md:w-1/2 outline-none border-gray-500 p-2
          border-l border-r border-t border-b-0 
          md:border-l-0 md:border-r md:border-t md:border-b-0"
          required  
          type="text" 
          id="email" 
          name="email" 
          placeholder="Email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div>
          <textarea 
          className="w-full border border-gray-500 p-2 h-60 outline-none"  
          required
          name="message" 
          id="message"  
          placeholder="Message"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
        </div>
        <div>
          <input  
          className="border cursor-pointer border-gray-500 p-4 outline-none"  type="submit" 
          id="submit" 
          name="submit" 
          value="Submit" />
        </div>          
        </form>
      </div>
    </div>
  )
}

export default Contact
