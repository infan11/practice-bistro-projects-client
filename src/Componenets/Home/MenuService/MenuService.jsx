import ButtonShare from "../../Section/ButtonShare/ButtonShare";
import SectionTitle from "../../SectionTiltle/SectionTitle/SectionTitle";

const MenuService = () => {
  return (
    <div data-aos="fade-up">
      <div
        className="hero min-h-screen mt-10 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/yBQ14jh/featured.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>

        <div className="hero-content px-4 md:px-0">
          {/* Flexbox layout for mobile and larger screens */}
          <div className="flex flex-col md:flex-row items-center justify-center bg-[#ffffff5d] bg-opacity-90 p-6 md:p-12 lg:p-20 rounded-lg shadow-lg gap-8 lg:gap-12 max-w-6xl mx-auto">
            
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                className="image-zoom w-full h-auto object-cover rounded-lg shadow-md"
                src="https://i.ibb.co.com/yBQ14jh/featured.jpg"
                alt="Featured"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left text-black">
              <h1 className="mb-4 text-2xl lg:text-4xl font-bold mt-10">
                March 20, 2023
              </h1>

              <p className="mb-3 text-lg lg:text-2xl font-semibold">
                WHERE CAN I GET SOME?
              </p>

              <p className="text-sm lg:text-lg mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas quasi.
                Eaque repellat recusandae ad laudantium tempore consequatur
                consequuntur omnis ullam maxime tenetur.
              </p>

              <ButtonShare button={"Read More"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuService;
