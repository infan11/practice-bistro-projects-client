import React from 'react';
import SectionTitle from '../../SectionTiltle/SectionTitle/SectionTitle';
import { FaTelegramPlane } from "react-icons/fa";
const ContactForm = () => {
    return (
        <div>
            <SectionTitle heading={"---Send Us a Message---"} subHeading={"CONTACT FORM"}/>
            <div className='max-w-7xl mx-auto  md:px-20'>
              
                     <div className=" md:px-7 pt-5 bg-slate-100  w-80 mx-auto md:w-full  shrink-0 shadow-2xl">
      <form className="card-body">
     <div className=''>
     <div className="">  
      
         <div className='grid md:grid-cols-2 gap-3 '>
            
         <input type="email"  placeholder="Email" className=" w-60 md:w-full p-2 mt-3 " required />
         <input type="email" placeholder="Name" className=" w-60 md:w-full p-2 mt-3  " required />
         </div>
         <input type="email" placeholder="Phone" className=" w-60 md:w-full p-2 mt-3  " required />
         <textarea className="textarea textarea-success  w-60 md:w-full mt-5" placeholder="Bio"></textarea>
        </div>
   
       <div className='w-80 mx-auto mt-5 px-5 md:px-16'>
       <button className='btn  bg-yellow-300  '>SEND MESSAGE <FaTelegramPlane /></button>
       </div>
     </div>
      </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;