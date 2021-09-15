import React, {useState, useEffect} from 'react';
import {baseurl} from '../config/config';
import { useDispatch, useSelector } from 'react-redux';
import ajax from '../config/ajax';
import {actionSubscriptionForm} from '../redux/actions';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';



function SubscriptionForm() {

  const dispatch = useDispatch();
  const form = useSelector(state => state.reducerSubscriptionForm.subscription_form_data.data);
  const form_fetched = useSelector(state => state.reducerSubscriptionForm.subscription_form_fetched);

  //console.log("Conf message", form_fetched && form);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [submitForm, setSubmitForm] = useState(false);


  useEffect(()=>{
    
    dispatch(actionSubscriptionForm())

    submitForm &&
    setName('');
    setEmail('');
    setRegion('');
    setCountry('');


  },[dispatch, submitForm])
  


  console.log(name, email, region, country,"sumbited", submitForm);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    /** NOTE: Permission need to allowed to anonymouse user
     * RESTful Web Services
     *   - Access POST on Webform Submit resource
     */
    
    const data = {
      "webform_id": "fansclub",
      "name": name,
      "email": email,
      "country": country,
      "state": region,
    }
    console.log("DATA submitted",data);
    const webform_rest_url = `${baseurl.URL}/webform_rest/submit`;

    try{
      const axios = await ajax(); //wait for initalized axios object
      const response = await axios.post(webform_rest_url, data);
      response.status === 200 && setSubmitForm(true);
      console.log("Data Posted:",response);
    }catch(e){
      console.log("Submit Error",e);
    }

  }

  return (
    <div className="w-full md:p-10">
      <h1 className="text-3xl">
        {form_fetched && form.attributes.title} 
      </h1>
      <div>
        {form_fetched && !submitForm && form.attributes.description}
      </div>
      <div className="text-1xl">
        {submitForm && form_fetched && form.attributes.settings.confirmation_message }
      </div>

       {/** SUBSCRIPTION FORM */}
      <div className={ submitForm ?  "hidden" : "w-full flex"}>
        <form onSubmit={handleSubmit}  method="post" class="w-full mt-5 flex flex-col">
        <div>
          <input
          className="w-full outline-none p-2 border-gray-500 
          border" 
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
          border-l border-r"
          required  
          type="text" 
          id="email" 
          name="email" 
          placeholder="Email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <CountryDropdown 
          classes="w-full outline-none border-gray-500 p-2 border"
          required  
          type="text" 
          id="country" 
          name="country"
          placeholder="Country"
          value={country}
          onChange={(val)=>setCountry(val)}
          />
          <RegionDropdown
          classes="border-l border-r border-b border-gray-500 outline-none px-3 py-2 w-full"
          country={country}
          value={region}
          onChange={(val) => setRegion(val)} />
        </div>
        
        <div>
          <input  
          className="border border-gray-500 px-4 py-2 mt-5 hover:bg-gray-500 hover:text-white cursor-pointer"  type="submit" 
          id="submit" 
          name="submit" 
          value="Submit" />
        </div>          
        </form>
        
      </div>
  

      {/** FORM SUBMITTED MESSAGE  */}
      <div className={ submitForm ? "flex" : "hidden"} >
        <div dangerouslySetInnerHTML={{__html:form_fetched 
        && form.attributes.settings.submission_exception_message}}  />
      </div>
  
    </div>
  )
}

export default SubscriptionForm