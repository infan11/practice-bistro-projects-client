import ContactForm from "../ContactForm/ContactForm";
import ContactLocation from "../ContactLocation/ContactLocation";
import ContactUsBanner from "../ContactUsBanner/ContactUsBanner";

const ContactUs = () => {
    return (
        <div>
          <ContactUsBanner/>
          <ContactLocation/>
          <ContactForm/> 
        </div>
    );
};

export default ContactUs;