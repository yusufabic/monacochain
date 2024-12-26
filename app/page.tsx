"use client";
import Footer from "@/components/footer";
import BestSellers from "@/components/main-content/best-seller";
import HeroSection from "@/components/main-content/hero";
import MainProducts from "@/components/main-content/main-products";
import ProductShowcase from "@/components/main-content/product-showcase";
import SliderSection from "@/components/main-content/slider";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <MainProducts />
      <BestSellers />
      <HeroSection />
      <section className="relative w-full h-[500px]">
        {/* Banner Image */}
        <Image
          src="/main-banner.png" // Resim yolunu burada güncelleyin
          alt="Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </section>
      <ProductShowcase />
      <SliderSection />
      <section className="relative w-full h-screen bg-gray-50 h-[500px]">
        {/* Background Image */}
        <div className="relative w-full h-full">
          <Image
            src="/main-banner.png" // Resim yolunu buraya ekleyin
            alt="Unique Lock"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-30">
          <h2 className="text-2xl md:text-4xl font-serif uppercase tracking-widest text-white">
            Unique "S" Lock
          </h2>
          <p className="text-gray-300 mt-4 max-w-xl text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
