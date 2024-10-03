
const SectionTitle = ({heading , subHeading , button}) => {
    return (
        <div className="justify-center items-center">
           <p className="text-yellow-400 text-[15px] text-center italic font-bold mb-2">{heading}</p>
           <div className="divider w-60 mx-auto"></div>
           <p className="text-black font-bold text-2xl text-center mt-2 mb-2">{subHeading}</p>
           <div className="divider w-60 mx-auto "></div>
        
        </div>
    );
};

export default SectionTitle;