"use client";
import { useEffect } from "react";
import { Inter, Hanken_Grotesk } from "next/font/google";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/bootstrap.min.css";
import "yet-another-react-lightbox/styles.css";
import "../../public/assets/css/style.css";
import ScrollProgress from "@/components/common/ScrollProgress";
import useWow from "@/hooks/useWow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hankenGrotesk",
  display: "swap",
});
export default function RootLayout({ children }) {
  useWow();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en" className={`${inter.variable} ${hankenGrotesk.variable}`}>
      <head>
        <link
          rel="icon"
          
          type="image/x-icon"
          sizes="24x24"
        />
        <title>Odel Business Solutions</title>
      </head>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
