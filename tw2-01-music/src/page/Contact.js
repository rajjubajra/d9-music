import React from 'react'

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <div className="w-full">
        <form class="w-full md:3/6 border border-gray-50 p-4 m-5">
          <input type="text" id="name" name="name" placeholder="Name" />
          <input type="text" id="email" name="email" placeholder="email" />
          <input type="submit" id="submit" name="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Contact
