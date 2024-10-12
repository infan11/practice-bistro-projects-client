
const SoupBanner = () => {
    return (
        <div>
             <div>
            <div data-aos="fade-up">
                <div
                    className="hero p-8   md:p-48 bg-fixed "
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/BnYcGVB/soup-bg.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60 "></div>
                    <div className="hero-content text-neutral-content px-8 text-center ">
                        <div className="  p-5 md:p-20 text-white rounded-xl  ">
                            <p className='text-3xl md:text-4xl mb-3  font-bold   uppercase image-zoom'>
                                SOUPS</p>
                            <p className=' text-[10px] md:text-[14px] image-zoom font-bold uppercase'>

                            A warm, comforting bowl of soup with tender vegetables, savory broth, and delicate herbs is perfect for chilly days..</p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SoupBanner;