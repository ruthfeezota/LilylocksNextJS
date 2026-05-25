import type { Metadata } from "next";
import { Holtwood_One_SC, Montserrat } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={`${holtwood.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}