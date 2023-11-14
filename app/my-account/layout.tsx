import "@/faust.config.js";

import { Rubik } from "next/font/google";
import Navbar from "./Navbar";
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
