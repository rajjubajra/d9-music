import React, {useState, useEffect} from 'react';
import {baseurl} from '../config/config';
import { useDispatch, useSelector } from 'react-redux';
import ajax from '../config/ajax';
import {actionSubscriptionForm} from '../redux/actions';



function SubscriptionForm() {

  const dispatch = useDispatch();
  const form = useSelector(state => state.reducerSubscriptionForm.subscription_form_data.data);
  const form_fetched = useSelector(state => state.reducerSubscriptionForm.subscription_form_fetched);
  console.log("Conf message", form_fetched && form);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [submitForm, setSubmitForm] = useState(false);


  useEffect(()=>{
    
    dispatch(actionSubscriptionForm())

    submitForm &&
    setName('');
    setEmail('');
    setCity('');
    setCountry('');


  },[dispatch, submitForm])
  


  console.log(name, email, city, country,"sumbited", submitForm);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    const data = {
      "webform_id": "subscription",
      "name": name,
      "email": email,
      "city": city,
      "country": country
    }

    const webform_rest_url = `${baseurl.URL}/webform_rest/submit`;

    try{
      const axios = await ajax(); //wait for initalized axios object
      const response = await axios.post(webform_rest_url, data);
      response.status === 200 && setSubmitForm(true);
      //console.log("Data Posted:",response);
    }catch(e){
      console.log(e);
    }

  }

  return (
    <div>
      <h1 className="text-3xl text-center m-5">
        {form_fetched && form.attributes.title}
      </h1>
      <div className="text-center">
        {form_fetched && !submitForm && form.attributes.description}</div>
      <div className="text-1xl text-center">
        {submitForm && form_fetched && form.attributes.settings.confirmation_message }
      </div>
      <div className="w-full flex justify-center align-middle">
        <form onSubmit={handleSubmit}  method="post" class="w-full md:w-3/6 p-4 m-5 flex flex-col">
        <div>
          <input 
          className="w-full outline-none p-2 border-gray-500 
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
          className="w-full outline-none border-gray-500 p-2
          border-l border-r border-t border-b-0 
          md:border-l md:border-r md:border-t md:border-b-0"
          required  
          type="text" 
          id="email" 
          name="email" 
          placeholder="Email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <input 
          className="w-full  outline-none border-gray-500 p-2
          border-l border-r border-t border-b-0 
          md:border-l md:border-r md:border-t md:border-b-0"
          required  
          type="text" 
          id="city" 
          name="city" 
          placeholder="City" 
          value={city}
          onChange={(e)=>setCity(e.target.value)}
          />
          <input 
          className="w-full  outline-none border-gray-500 p-2
          border-l border-r border-t border-b-0 
          md:border-l md:border-r md:border-t md:border-b"
          required  
          type="text" 
          id="country" 
          name="country" 
          placeholder="Country" 
          value={country}
          onChange={(e)=>setCountry(e.target.value)}
          />
        </div>
        
        <div>
          <input  
          className="border cursor-pointer border-gray-500 p-4 mt-4 outline-none"  type="submit" 
          id="submit" 
          name="submit" 
          value="Submit" />
        </div>          
        </form>
      </div>
    </div>
  )
}

export default SubscriptionForm