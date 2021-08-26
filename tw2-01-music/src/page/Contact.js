import React from 'react'

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <div className="w-full">
        <form class="w-full md:w-3/6 border border-gray-300 p-4 m-5 flex justify-center align-middle flex-col">
        <div>
          <input className="w-full md:w-1/2 border md:border-l md:border-r md:border-t md:border-b-0 border-gray-500 p-2" type="text" id="name"  name="name"  placeholder="Name" />
          <input className="w-full md:w-1/2 border md:border-l md:border-r md:border-t-0 md:border-b-0 border-gray-500 p-2"  type="text" id="email" name="email" placeholder="Email" />
        </div>
        <div>
          <textarea className="w-full border border-gray-500 p-2 h-60"  name="message" id="message"  placeholder="Message"></textarea>
        </div>
        <div>
          <input  className="border border-gray-500 p-4"  type="submit" id="submit" name="submit" value="Submit" />
        </div>          
        </form>
      </div>
    </div>
  )
}

export default Contact
