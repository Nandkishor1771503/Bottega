import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import goldenCup from "../images/gold-coffee-cup.jpg";
import "swiper/css";

export default function InfiniteScroller() {
  const imgStyle = "w-8 sm:w-10 md:w-14 lg:w-16 h-auto"; // 👈 balanced scaling
  const items = ["Hello", "Welcome", "To", "Bottega", "Cafe"];

  return (
    <div className="bg-black py-3 sm:py-5 h-20 sm:h-24 text-[#d68b0c]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView="auto"
        loop={true}
        freeMode={true}
        freeModeMomentum={false}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
      >
        {[1, 2].map((row) => (
          <SwiperSlide key={row}>
            <div
              className="
                flex items-center justify-center 
                gap-8 sm:gap-12 md:gap-16 lg:gap-20
                w-full bg-black text-[#d68b0c] 
                text-base sm:text-lg md:text-xl lg:text-2xl
                px-2 sm:px-4
              "
            >
              {items.map((el, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 sm:gap-3 whitespace-nowrap"
                >
                  <img src={goldenCup} alt="icon" className={imgStyle} />
                  <h2 className="font-light">{el}</h2>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
