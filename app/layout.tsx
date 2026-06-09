import type { Metadata } from "next";
import { Holtwood_One_SC, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LilyLocksPopup from "@/components/LilyLocksPopup";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Suspense } from "react";

const holtwood = Holtwood_One_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-holtwood",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "LilyLocks",
  description: "Custom ponytails built for elite cheer teams & gyms",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${holtwood.variable} ${montserrat.variable} bg-black text-white antialiased`}
      >
        <Navbar />
        <LilyLocksPopup />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>

        <main className="min-h-screen">
          {children}
        </main>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        

        <Footer />
      </body>
    </html>
  );
}