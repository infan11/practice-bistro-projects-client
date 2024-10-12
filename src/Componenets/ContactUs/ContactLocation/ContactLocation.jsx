import React from 'react';
import SectionTitle from '../../SectionTiltle/SectionTitle/SectionTitle';
import { BiSolidPhoneCall } from "react-icons/bi";
const ContactLocation = () => {
    return (
        <div>
            <SectionTitle heading={"---Visit Us---"} subHeading={"OUR LOCATION"}/>
            <div data-aos="fade-up" className='grid  md:grid-cols-3   max-w-7xl mx-auto gap-8  px-10 md:px-28'>
                 <div className=' '>
                       <div >
                          <div className=' w-80  justify-center items-center border-2'>
                             <section className='bg-orange-400 w-80 '> 
                             <p className='flex  text-center justify-center items-center p-3 text-white text-2xl font-bold'><BiSolidPhoneCall/></p>
                             </section>
                             <section className='w-60 mx-auto h-40 pt-10 bg-slate-100 '>
                                     <p className='text-center text-xl font-bold mb-2'>PHONE</p>
                                     <p className='text-center text-[12px] font-bold'>+38 (012) 34 56 789</p>
                             </section>
                          </div>
                       </div>
                 </div>
                 <div className=''>
                       <div >
                          <div className=' w-80  justify-center items-center border-2'>
                             <section className='bg-orange-400 w-80 '> 
                             <p className='flex  text-center justify-center items-center p-3 text-white text-2xl font-bold'><BiSolidPhoneCall/></p>
                             </section>
                             <section className='w-60 mx-auto h-40 pt-10 bg-slate-100 '>
                                     <p className='text-center text-xl font-bold mb-2'>PHONE</p>
                                     <p className='text-center text-[12px] font-bold'>+38 (012) 34 56 789</p>
                             </section>
                          </div>
                       </div>
                 </div>
                 <div className=''>
                       <div >
                          <div className=' w-80  justify-center items-center border-2'>
                             <section className='bg-orange-400 w-80 '> 
                             <p className='flex  text-center justify-center items-center p-3 text-white text-2xl font-bold'><BiSolidPhoneCall/></p>
                             </section>
                             <section className='w-60 mx-auto h-40 pt-10 bg-slate-100 '>
                                     <p className='text-center text-xl font-bold mb-2'>PHONE</p>
                                     <p className='text-center text-[12px] font-bold'>+38 (012) 34 56 789</p>
                             </section>
                          </div>
                       </div>
                 </div>
               
            </div>
        </div>
    );
};

export default ContactLocation;