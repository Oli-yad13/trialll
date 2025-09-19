import type { Metadata } from "next";
import { Inter_Tight, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import LoadingProvider from "@/components/providers/LoadingProvider";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mavuno AI - The Intelligence Behind the Harvest",
  description: "IRIF combines hyperlocal field sensors, satellite data, and predictive AI to deliver farm-specific intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${nunitoSans.variable} font-inter-tight antialiased`}
      >
        <LoadingProvider>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
}
