
const MenuBanner = () => {
    return (
        <div>
            <div data-aos="fade-up">
                <div
                    className="hero p-8   md:p-48 bg-fixed "
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/LrJqBfD/banner3.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60 "></div>
                    <div className="hero-content text-neutral-content px-8 text-center ">
                        <div className="  p-5 md:p-20 text-white rounded-xl  ">
                            <p className='text-3xl md:text-4xl mb-3  font-bold   uppercase image-zoom'>OUR MENU</p>
                            <p className='text-xl image-zoom font-bold uppercase md:text-base'>

                                Would you like to try a dish?</p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBanner;