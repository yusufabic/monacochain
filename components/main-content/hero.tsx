// components/HeroSection.js
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center bg-white justify-center text-center py-20">
      {/* Image for "your daily chain" */}
      <div className="relative w-[500px] h-[100px] mb-6">
        <Image
          src="/text.png" // Image yolunu burada güncelleyin
          alt="Your Daily Chain"
          layout="fill"
          objectFit="contain"
        />
      </div>
      {/* Description Text */}
      <p className="text-gray-600 max-w-md">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </section>
  );
};

export default HeroSection;
