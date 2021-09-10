//import ContactForm from './ContactForm';
import SubscriptionFrom from './SubscriptionForm';
import ContactInfo from './ContactInfo';



function Contact() {
  

  return (
    <div className="grid grid-cols-12 max-w-screen-xl m-auto p-10">
      
      <div className="col-span-12 md:col-span-4">
        <ContactInfo />
      </div>

      <div className="cols-span-12 md:col-span-8">
        <SubscriptionFrom />
      </div>
      
    </div>
  )
}

export default Contact