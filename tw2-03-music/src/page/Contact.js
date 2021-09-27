import ContactForm from './Contact/ContactForm';
import ContactInfo from './Contact/ContactInfo';



function Contact() {
  

  return (
    <div className="grid grid-cols-12 max-w-screen-xl m-auto p-10">

      <div className="col-span-12 mt-10 md:mt-0">
        <ContactForm />
      </div>
      
    </div>
  )
}

export default Contact