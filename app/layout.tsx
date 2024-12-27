import { Main } from "next/document";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Monaco Chain",
  description: "Luxury chain website",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MainHeader />
        <main className="mt-[164px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
