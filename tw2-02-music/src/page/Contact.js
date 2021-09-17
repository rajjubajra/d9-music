//import ContactForm from './ContactForm';
import SubscriptionFrom from './SubscriptionForm';
import ContactInfo from './ContactInfo';



function Contact() {
  

  return (
    <div className="grid grid-cols-12 max-w-screen-xl m-auto p-10">
      
      <div className="col-span-12 md:col-span-4">
        <ContactInfo />
      </div>

      <div className="col-span-12 md:col-span-8 mt-10 md:mt-0">
        <SubscriptionFrom />
      </div>
      
    </div>
  )
}

export default Contact