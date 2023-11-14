import "@/faust.config.js";
import "./globals.css";
import { Rubik } from "next/font/google";
import Navbar from "@/components/Navbar";
const rubik = Rubik({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
