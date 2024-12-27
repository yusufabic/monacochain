"use client";
import BestSellers from "@/components/main-content/best-seller";
import HeroSection from "@/components/main-content/hero";
import MainProducts from "@/components/main-content/main-products";
import ProductShowcase from "@/components/main-content/product-showcase";
import SliderSection from "@/components/main-content/slider";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="relative w-full h-[700px]">
        <Image
          src="/navigation.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </section>
      <MainProducts />
      <BestSellers />
      <HeroSection />
      <section className="relative w-full h-[500px]">
        <Image
          src="/main-banner.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </section>
      <ProductShowcase />
      <SliderSection />
      <section className="relative w-full h-screen bg-gray-50 h-[500px]">
        <div className="relative w-full h-full">
          <Image
            src="/bottom-banner.png"
            alt="Unique Lock"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-end text-black text-center pb-20">
          <h2 className="text-xl md:text-2xl font-serif uppercase tracking-widest">
            Unique "S" Lock
          </h2>
          <p className="mt-4 max-w-xl text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </section>
    </>
  );
}
