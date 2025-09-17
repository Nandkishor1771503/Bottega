import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import goldenCup from "../images/gold-coffee-cup.jpg";
import "swiper/css";

export default function InfiniteScroller() {
  const imgStyle = "w-12 sm:w-16 md:w-20 lg:w-24 h-auto"; // 👈 responsive image size
  const items = ["Hello", "Welcome", "To", "Bottega", "Cafe"];
  return (
    <div className="bg-black p-3 sm:p-5 h-20 sm:h-24 text-[#d68b0c]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0} // 👈 smaller default gap (works with flex gaps below)
        slidesPerView="auto"
        loop={true}
        freeMode={true}
        freeModeMomentum={false}
        speed={6500} // smooth long scroll
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
                gap-20 md:gap-16 lg:gap-20 
                w-full bg-black text-[#d68b0c] 
                text-lg sm:text-xl md:text-2xl lg:text-3xl 
                px-3 sm:px-5
              "
            >
              {
                items.map((el, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3">
                    <img src={goldenCup} alt="icon" className={imgStyle} />
                    <h2>{el}</h2>
                  </div>
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
