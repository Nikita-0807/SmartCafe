import React from "react";
import Img2 from "../../assets/coffee2.png";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
     "Strong and bold coffee shot for real coffee lovers. ",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description:
      "Smooth black coffee made by adding hot water to rich espresso. ",
    aosDelay: "300",
  },
  {
    id: 1,
    img: Img2,
    name: "Cappuccino",
    description:
      "perfect blend of espresso, steamed milk and creamy foam. ",
    aosDelay: "500",
  },
  {
    id: 1,
    img: Img2,
    name: "Latte",
    description:
      "Mild espresso mixed with steamed milk for a smooth taste. ",
    aosDelay: "500",
  },
  {
    id: 1,
    img: Img2,
    name: "Mocha",
    description:
      "Coffee with chocolate flavor and a hint of sweetness. ",
    aosDelay: "500",
  },
  {
    id: 1,
    img: Img2,
    name: "Cold Brew",
    description:
      "Slow brewed coffee served chilled for a refreshing experience. ",
    aosDelay: "500",
  },

];
const Services = () => {
  return (
    <> 
    <span id="services"></span>
    <div className="py-10">
      <div className="container">
        {/* Header title */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Best Eco Coffee For You
          </h1>
        </div>

        {/* Service card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {ServicesData.map((data, index) => {
            return (
              <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
                key={index}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px group relative]"
              >
                {/* Image section */}
                <div className="h-[122px] ">
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
                  />
                </div>

                {/* text  content */}
                <div className="p-6 text-center">
                  <h1 className="text-xl font-bold">{data.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
          <div></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
