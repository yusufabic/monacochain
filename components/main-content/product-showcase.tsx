// components/ProductShowcase.js
import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      {/* Başlık ve Açıklama */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold tracking-wide uppercase text-gray-900">
          Originality Proof; Uniq “S” Lock
        </h2>
        <p className="text-gray-600 mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      {/* Ürün Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Kart 1 */}
        <div className="text-center">
          <Image
            src="/show-case1.png" // Görsel yolunu buraya ekleyin
            alt="Male Model"
            width={300}
            height={400}
            className="mx-auto"
          />
          <h3 className="text-lg font-semibold mt-4">Lorem Ipsum</h3>
          <p className="text-sm text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Kart 2 */}
        <div className="text-center">
          <Image
            src="/show-case2.png" // Görsel yolunu buraya ekleyin
            alt="Gold Chain"
            width={300}
            height={400}
            className="mx-auto"
          />
          <h3 className="text-lg font-semibold mt-4">Lorem Ipsum</h3>
          <p className="text-sm text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Kart 3 */}
        <div className="text-center">
          <Image
            src="/show-case3.png" // Görsel yolunu buraya ekleyin
            alt="Female Model"
            width={300}
            height={400}
            className="mx-auto"
          />
          <h3 className="text-lg font-semibold mt-4">Lorem Ipsum</h3>
          <p className="text-sm text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>
    </section>
  );
}
