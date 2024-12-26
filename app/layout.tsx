import { Main } from "next/document";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

export const metadata = {
  title: "Monaco Chain",
  description: "Luxury chain website",
};

export default function RootLayout({ children }) {
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
        <main>{children}</main>
        <footer className="bg-gray-100 text-black p-4 text-center">
          © 2025 Monaco Chain. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
