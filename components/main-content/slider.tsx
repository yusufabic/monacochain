// components/SliderSection.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import Image from "next/image";

export default function SliderSection() {
  return (
    <section className="py-10 bg-gray-100">
      {/* Başlık */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-serif tracking-wide uppercase text-gray-800">
          We Are Monaco Chain
        </h2>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[600px]">
            <Image
              src="/show-case1.png" // Resim yolunu buraya ekleyin
              alt="Slider Image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[600px]">
            <Image
              src="/show-case2.png" // Resim yolunu buraya ekleyin
              alt="Slider Image 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[600px]">
            <Image
              src="/show-case3.png" // Resim yolunu buraya ekleyin
              alt="Slider Image 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
