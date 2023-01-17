import TestimonialSlide from "./TestimonialSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import HeadingText from "../../shared/HeadingText";
import { useRef } from "react";
import { ICarousalRef } from "../../../global/types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Testimonials = () => {
  const carousalRef = useRef<ICarousalRef>();

  const handleNext = () => {
    carousalRef.current?.handleNext();
  };

  const handleBack = () => {
    carousalRef.current?.handleBack();
  };
  return (
    <>
      <div>
        <HeadingText
          text="People love "
          secondaryText="unibox"
          variant="h3"
          sx={{
            mt: 15,
            mb: 7,
            px: { xs: 8, md: 0 },
            textAlign: "center",
          }}
          text1={<div>So Would You?</div>}
        />

        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
          >
            {testimonialsList.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialSlide
                  key={testimonial.id}
                  handleNext={handleNext}
                  handleBack={handleBack}
                  bgColor={testimonial.bgColor}
                  author={testimonial.author}
                  imgSrc={testimonial.imgSrc}
                  testimonial={testimonial.testimonial}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

const testimonialsList = [
  {
    id: 1,
    author: "Julia Xang",
    bgColor: "green",
    imgSrc: "/assets/vector%202%20%5B2%5D-700w.png",
    testimonial:
      '"I found your website to be an invaluable resource in my college search. The ability to search for universities based on my specific needs and preferences was extremely helpful, and I was impressed by the wide range of institutions available in your database."',
  },
  {
    id: 2,
    author: "Bill Smith",
    imgSrc: "/assets/vector%202-700w.png",
    testimonial:
      '"I am a high school student who just started looking for universities and your service was a lifesaver. The website helped me to find the universities that match my preferences and criteria. The free email subscription was also very helpful as it keeps me updated with the latest news and events. I can easily keep track of all my universities in one place. I highly recommend your service to anyone looking to further their education."',
  },
];

export default Testimonials;
