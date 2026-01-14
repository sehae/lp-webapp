import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "Marci Metzger Homes - Real Estate Agent, Real Estate, Realtor"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
