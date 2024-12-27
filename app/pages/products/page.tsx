"use client";
import BestSellers from "@/components/main-content/best-seller";
import SliderSection from "@/components/main-content/slider";
import Image from "next/image";
import React from "react";

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      title: "CLASSIC",
      subtitle: "PLAIN / PLAIN LOCK",
      image: "/gold.png", // Görsel yolunu buraya ekleyin
    },
    {
      id: 2,
      title: "CLASSIC",
      subtitle: "PLAIN / PLAIN LOCK",
      image: "/gold.png", // Görsel yolunu buraya ekleyin
    },
    {
      id: 3,
      title: "CLASSIC",
      subtitle: "PLAIN / PLAIN LOCK",
      image: "/gold.png", // Görsel yolunu buraya ekleyin
    },
    {
      id: 4,
      title: "CLASSIC",
      subtitle: "PLAIN / PLAIN LOCK",
      image: "/gold.png", // Görsel yolunu buraya ekleyin
    },
    {
      id: 5,
      title: "CLASSIC",
      subtitle: "PLAIN / PLAIN LOCK",
      image: "/gold.png", // Görsel yolunu buraya ekleyin
    },
    {
      id: 6,
      title: "CLASSIC",
      subtitle: "PLAIN / PLAIN LOCK",
      image: "/gold.png", // Görsel yolunu buraya ekleyin
    },
    {
      id: 7,
      title: "CLASSIC",
      subtitle: "PLAIN / PLAIN LOCK",
      image: "/gold.png", // Görsel yolunu buraya ekleyin
    },
    {
      id: 8,
      title: "CLASSIC",
      subtitle: "PLAIN / PLAIN LOCK",
      image: "/gold.png", // Görsel yolunu buraya ekleyin
    },
    {
      id: 9,
      title: "CLASSIC",
      subtitle: "PLAIN / PLAIN LOCK",
      image: "/gold.png", // Görsel yolunu buraya ekleyin
    },
    {
      id: 10,
      title: "CLASSIC",
      subtitle: "PLAIN / PLAIN LOCK",
      image: "/gold.png", // Görsel yolunu buraya ekleyin
    },
  ];
  return (
    <>
      <section className="relative w-full h-[600px]">
        {/* Arka Plan Görseli */}
        <div className="absolute inset-0">
          <Image
            src="/main-banner.png" // Resim yolunu buraya ekleyin
            alt="Classic"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Metin İçeriği */}
        <div className="absolute pb-60 inset-0 flex flex-col items-end justify-center pr-20 text-black">
          <div className="text-start">
            <h2 className="text-xl text-start md:text-5xl font-serif uppercase tracking-wide mb-6">
              Classic
            </h2>
            <p className="text-xs md:text-xs leading-relaxed max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-6">
        {/* Başlık ve Açıklamalar */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-serif uppercase tracking-wide mb-6">
            This Is The New Classic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto text-gray-800">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10 text-gray-800">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* Zincir Görseli */}
        <div className="relative max-w-4xl mx-auto">
          <Image
            src="/product-first.png"
            alt="Gold Chain"
            width={800}
            height={400}
            className="mx-auto"
          />
        </div>
      </section>
      <SliderSection />
      <BestSellers />
      <section className="bg-white pt-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif uppercase tracking-wide">
            Overview
          </h2>
        </div>
        <div className="container mx-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-4 w-5/6 mx-auto">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <h3 className="text-xl font-serif mt-4">{product.title}</h3>
              <p className="text-xs text-gray-600">{product.subtitle}</p>
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
