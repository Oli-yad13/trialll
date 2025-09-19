import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfit = localFont({
  src: [
    {
      path: "../../public/fonts/Outfit-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Birrama - Creative Agency",
  description: "Consume smart. A creative agency specializing in branding, digital experiences, and innovative marketing solutions.",
  keywords: "creative agency, branding, digital marketing, design, Ethiopia, Addis Ababa",
  authors: [{ name: "Birrama" }],
  openGraph: {
    title: "Birrama - Creative Agency",
    description: "Consume smart. A creative agency specializing in branding, digital experiences, and innovative marketing solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${poppins.variable} font-outfit antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
