import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      {/* Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Müşteri Hizmetleri */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">
              Müşteri Hizmetleri
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services">Müşteri Hizmetlerine Genel Bakış</Link>
              </li>
              <li>
                <Link href="/order-tracking">Sipariş Takibi</Link>
              </li>
              <li>
                <Link href="/shipping">Nakliye</Link>
              </li>
              <li>
                <Link href="/returns">İade ve Değişim</Link>
              </li>
              <li>
                <Link href="/contact">Bize Ulaşın</Link>
              </li>
              <li>
                <Link href="/size-guide">Ölçü rehberi</Link>
              </li>
              <li>
                <Link href="/store-info">Mağaza Bilgileri</Link>
              </li>
            </ul>
          </div>

          {/* Hakkımızda */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Hakkımızda</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">Swarovski Hakkında</Link>
              </li>
              <li>
                <Link href="/sustainability">Sürdürülebilirlik</Link>
              </li>
              <li>
                <Link href="/careers">İşler & Kariyer</Link>
              </li>
              <li>
                <Link href="/alumni">Alumni Community</Link>
              </li>
              <li>
                <Link href="/corporate-gifts">Kurumsal Hediyeler</Link>
              </li>
              <li>
                <Link href="/professionals">Profesyoneller İçin</Link>
              </li>
              <li>
                <Link href="/site-map">Site Haritası</Link>
              </li>
              <li>
                <Link href="/kristallwelten">Kristallwelten</Link>
              </li>
              <li>
                <Link href="/mobility">Swarovski Mobility</Link>
              </li>
              <li>
                <Link href="/code-of-conduct">Code of Conduct</Link>
              </li>
            </ul>
          </div>

          {/* Yasal Koşullar */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Yasal Koşullar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms">Kullanım Koşulları</Link>
              </li>
              <li>
                <Link href="/pre-info">Ön bilgilendirme koşulları</Link>
              </li>
              <li>
                <Link href="/privacy">Gizlilik politikası</Link>
              </li>
              <li>
                <Link href="/cookie-consent">Çerez Onayı</Link>
              </li>
              <li>
                <Link href="/service-provider">Hizmet sağlayıcı</Link>
              </li>
              <li>
                <Link href="/reach">REACH hakkında bilgi</Link>
              </li>
              <li>
                <Link href="/data-protection">Veri Koruma Onay Beyanı</Link>
              </li>
              <li>
                <Link href="/sales-agreement">MESAFELİ SATIŞ SÖZLEŞMESİ</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Language and Location */}
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-gray-400">🌐 Türkiye | tr</span>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <Link href="/facebook" className="text-gray-400 hover:text-white">
                Facebook
              </Link>
              <Link
                href="/pinterest"
                className="text-gray-400 hover:text-white"
              >
                Pinterest
              </Link>
              <Link
                href="/instagram"
                className="text-gray-400 hover:text-white"
              >
                Instagram
              </Link>
              <Link href="/tiktok" className="text-gray-400 hover:text-white">
                TikTok
              </Link>
              <Link href="/x" className="text-gray-400 hover:text-white">
                X
              </Link>
            </div>
          </div>

          {/* Logo */}
          <div className="text-center mt-6">
            <h2 className="text-lg font-serif">MONACO CHAIN™</h2>
            <p className="text-gray-400 text-sm">by SOZER</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
