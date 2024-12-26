"use client"; // Next.js App Router kullanımı için
import Image from "next/image";

const BestSellers = () => {
  const products = [
    {
      name: "CLASSIC / PLAIN",
      price: "$890",
      image: "/best-seller.png",
    },
    {
      name: "CLASSIC / PLAIN",
      price: "$890",
      image: "/best-seller.png",
    },
    {
      name: "CLASSIC / PLAIN",
      price: "$890",
      image: "/best-seller.png",
    },
    {
      name: "CLASSIC / PLAIN",
      price: "$890",
      image: "/best-seller.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      {/* Başlık */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif tracking-wide text-gray-800">
          BEST SELLERS
        </h2>
      </div>

      {/* Ürünler */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-16">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center"
          >
            <Image
              src={product?.image}
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h3 className="text-sm font-semibold text-gray-800">
              {product.name}
            </h3>
            <p className="text-gray-600 mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
