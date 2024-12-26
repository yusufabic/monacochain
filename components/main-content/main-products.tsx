"use client";
import Image from "next/image";

const MainProducts: React.FC = () => {
  const products = [
    {
      name: "CLASSIC",
      image: "/gold.png",
    },
    {
      name: "EDGE",
      image: "/gold.png",
    },
    {
      name: "FIGARO",
      image: "/gold.png",
    },
    {
      name: "LUXE",
      image: "/gold.png",
    },
    {
      name: "SHADE",
      image: "/gold.png",
    },
    {
      name: "RONDO",
      image: "/gold.png",
    },
    {
      name: "CAVO",
      image: "/gold.png",
    },
    {
      name: "REY",
      image: "/gold.png",
    },
    {
      name: "CURVE",
      image: "/gold.png",
    },
    {
      name: "LOOP",
      image: "/gold.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      {/* Başlık ve Açıklama */}
      <div className="text-center">
        <h2 className="text-2xl font-serif tracking-widest text-gray-800">
          WE ARE MONACO CHAIN
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      {/* Ürün Çeşitleri */}
      <div className="mt-10 text-center">
        <ul className="flex flex-wrap justify-center space-x-4 text-sm font-serif tracking-widest text-gray-800">
          {products.map((product, index) => (
            <li key={index} className="px-2">
              {product.name}
              <span className="ml-5">|</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Ürün Görselleri */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-6 w-2/3 mx-auto">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={product.image}
              alt={product.name}
              width={50}
              height={50}
              className="object-contain"
            />
            <p className="mt-2 text-sm font-medium text-gray-800">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainProducts;
