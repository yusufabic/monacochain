import Image from "next/image";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <>
      <section className="relative w-full h-screen">
        <div className="relative w-full h-full">
          <Image
            src="/about-top-banner.png"
            alt="Innovative Section Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-start justify-center pl-10 pb-[350px] text-left text-white bg-black bg-opacity-30">
          <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-wide mb-4">
            Innovative Leader, <br /> Global Player
          </h2>
          <p className="max-w-lg text-sm md:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </section>
      <section className="bg-white py-20 px-6">
        {/* Başlık */}
        <div className="text-start mb-12 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl  uppercase tracking-wide">
            This Is The New Classic
          </h2>
        </div>

        {/* İçerik */}
        <div className="grid grid-cols-1 text-sm md:grid-cols-2 gap-12 max-w-6xl mx-auto text-gray-800">
          {/* Sol Taraf */}
          <div>
            <p className="mb-6 font-sans">
              Since its inception in 1985, Sözer Jewelry has grown into a
              distinguished family-owned luxury brand, operating across more
              than 90 countries. With over 40 visionary designers, we remain at
              the cutting edge of global trends, driven by our relentless
              pursuit of innovation.
            </p>
            <p>
              We are proud to introduce Monaco Chain, the pinnacle of our
              offerings, setting new standards in the world of gold chains over
              the past decade. Crafted with unparalleled technology and
              impeccable artistry, Monaco Chain is celebrated for producing the
              world’s lightest and strongest gold chain. Our creations are
              marked by their exceptional durability, our exclusive ‘S’ logo
              lock design, and a secure double-click locking system.
            </p>
          </div>

          {/* Sağ Taraf */}
          <div>
            <p className="mb-6 font-sans">
              At Monaco Chain, inclusivity is woven into the fabric of our
              brand. We are committed to crafting jewelry that transcends
              boundaries, appealing to a diverse clientele from ages 7 to 70.
              Our collections are thoughtfully designed to complement every mood
              and occasion— whether it be a sporty outing, a chic gathering, a
              casual day, or a formal event.
            </p>
            <p>
              We are proud to introduce Monaco Chain, the pinnacle of our
              offerings, setting new standards in the world of gold chains over
              the past decade. Crafted with unparalleled technology and
              impeccable artistry, Monaco Chain is celebrated for producing the
              world’s lightest and strongest gold chain. Our creations are
              marked by their exceptional durability, our exclusive ‘S’ logo
              lock design, and a secure double-click locking system.
            </p>
          </div>
        </div>
      </section>
      <section className="relative w-full h-[500px]">
        <Image
          src="/about-bottom-banner.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </section>
    </>
  );
};

export default AboutUs;
