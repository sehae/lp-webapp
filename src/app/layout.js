import Navbar from "@/components/navbar";
import "./globals.css";
import { Playfair_Display, Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import CookiePopup from "@/components/cookie";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export const metadata = {
  title: "Marci Metzger Homes - Real Estate Agent, Real Estate, Realtor"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${sourceSans3.variable}`}>
      <body>
        <Navbar />
        {children}
        <CookiePopup />
      </body>
        

    </html>
  );
}

