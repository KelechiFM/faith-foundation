import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const recursive = Recursive({
  variable: "--font-recursive",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Faith Mmesomachukwu Kelechi Foundation",
  description: "Empowering communities through faith, hope, and action.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${recursive.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
