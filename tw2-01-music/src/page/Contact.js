import React, {useState} from 'react';





function Contact() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  

  console.log(name, email, message);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(name, email, message);
  }

  return (
    <div>
      <h1 className="text-3xl text-center m-5">Contact Form</h1>
      <div className="w-full flex justify-center align-middle">
        <form onSubmit={handleSubmit} method="post" class="w-full md:w-3/6 p-4 m-5 flex flex-col">
        <div>
          <input 
          className="w-full md:w-1/2 border md:border-l md:border-r md:border-t md:border-b-0 border-gray-500 p-2 outline-none" 
          type="text" 
          id="name"  
          name="name"  
          placeholder="Name" 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
          <input 
          className="w-full md:w-1/2 border md:border-l-0 md:border-r md:border-t md:border-b-0 border-gray-500 p-2 outline-none"  
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
