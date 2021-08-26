import React, {useState} from 'react';





function Contact() {


  const [postData, setPostData] = useState();


  const handleSubmit = (e) =>{
    e.prventDefault();
    console.log(e)
  }

  return (
    <div>
      <h1 className="text-3xl text-center m-5">Contact Form</h1>
      <div className="w-full flex justify-center align-middle">
        <form onSubmit={handleSubmit} class="w-full md:w-3/6 p-4 m-5 flex flex-col">
        <div>
          <input 
          className="w-full md:w-1/2 border md:border-l md:border-r md:border-t md:border-b-0 border-gray-500 p-2 outline-none" 
          type="text" 
          id="name"  
          name="name"  
          placeholder="Name" 

          />
          <input 
          className="w-full md:w-1/2 border md:border-l-0 md:border-r md:border-t md:border-b-0 border-gray-500 p-2 outline-none"  
          type="text" 
          id="email" 
          name="email" 
          placeholder="Email" 
          />
        </div>
        <div>
          <textarea 
          className="w-full border border-gray-500 p-2 h-60 outline-none"  
          name="message" 
          id="message"  
          placeholder="Message"></textarea>
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
