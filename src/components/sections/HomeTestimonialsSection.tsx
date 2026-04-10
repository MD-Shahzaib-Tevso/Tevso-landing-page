"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    author: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    image: "/banner2.png", // Placeholder for image
  },
  {
    quote: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    author: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    image: "/banner2.png",
  },
  {
    quote: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    author: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    image: "/banner2.png",
  },
  {
    quote: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    author: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    image: "/banner2.png",
  },
];

export function HomeTestimonialsSection() {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-center theme-heading  mb-12 lg:mb-16">
          Hear from our business clients
        </h2>

        <div className="testimonials-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !w-2.5 !h-2.5 !bg-brand/30 !opacity-100",
              bulletActiveClass: "!bg-brand !opacity-100",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-20"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <article className="h-full rounded-[12px] bg-brand p-8 md:p-10 text-white shadow-[0_10px_30px_rgba(49,30,230,0.15)] flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(49,30,230,0.3)] group cursor-default">
                  {/* Quote Icon */}
                  <div className="mb-6 transition-transform duration-500 group-hover:scale-110">
                    <svg
                      width="60"
                      height="45"
                      viewBox="0 0 60 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white opacity-100"
                    >
                      <path
                        d="M0 24.18H14.18L6.44 44.18H18.26L26 24.18V0.18H0V24.18ZM34 24.18H48.18L40.44 44.18H52.26L60 24.18V0.18H34V24.18Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  {/* Quote Text */}
                  <p className="font-body text-[16px] md:text-[18px] leading-[1.6] flex-grow">
                    {testimonial.quote}
                  </p>

                  {/* Divider */}
                  <div className="my-8 border-t-[2px] border-white" />

                  {/* Author Header */}
                  <div className="flex items-center gap-4">
                    <div className="relative h-[80px] w-[80px] overflow-hidden rounded-full bg-white/20 shrink-0">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-brand-light flex items-center justify-center text-white/50 text-xs text-center p-2">
                          <div className="w-full h-full bg-slate-400/30 rounded-full" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-heading text-[18px] font-semibold text-white">
                        {testimonial.author}
                      </h4>
                      <p className="font-body text-[14px] opacity-70 leading-snug mt-[10px]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}