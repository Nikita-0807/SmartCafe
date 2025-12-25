import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/Testimonial/img 1.png"
import img2 from "../../assets/Testimonial/img 2.png"
import img3 from "../../assets/Testimonial/img 3.png"
import img4 from "../../assets/Testimonial/img 4.png"

const TestimonialData = [
  {
    id: 1,
    name: "Rohan Patil",
    text: "The aroma, the taste,and the calm vibe-everthing feels natural here. Best place to enjoy eco-friendly coffee in the city. ",
    img: img1
  },
  {
    id: 2,
    name: "Sneha Kulkarni",
    text: "Loved the smooth coffee and peaceful environment. You can really feel the freshness in every sip.",
    img: img2
  },
  {
    id: 3,
    name: "Amit Deshmukh",
    text: "A perfect blend of taste and sustainability. This cafe truly cares about quality and nature.",
    img: img3
  },
  {
    id: 4,
    name: "Pooja Sharma",
    text: "The coffee tastes fresh and pure, and the eco-friendly concept makes it even better. A relaxing place to enjoy quality coffee with a greeen touch.",
    img: img4
  },

];
const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-12">
      <div className="container">
        {/* Header section */}
        <div 
        data-aos="fade-up"
        className="text-center mb-10">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards section */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data, index) => {
              return (
                <div key={data.id}>
                  <div className="flex flex-col gap-4 shadow-lg py-6 px-6 mx-4 rounded-xl bg-primary/10 relative">
                    {/* Image section */}
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    {/* content section */}
                    <div className="flex flex-col gap-4 items-center">
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500">{data.text}</p>
                        <h1 className="text-xl font-bold text-black/60 font-cursive ">{data.name}</h1>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
