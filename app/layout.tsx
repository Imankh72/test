import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mani = localFont({
  src: [
    {
      path: "../public/fonts/mj-mani/mj-mani.ttf",
      style: "normal",
    },
  ],
  variable: "--font-mani",
});

const vazir = localFont({
  src: [
    {
      path: "../public/fonts/vazir/Vazir-Thin.ttf",
      style: "normal",
      weight: "100",
    },
    {
      path: "../public/fonts/vazir/Vazir-Light.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "../public/fonts/vazir/Vazir.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/fonts/vazir/Vazir-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../public/fonts/vazir/Vazir-Bold.ttf",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: "ZarvanTrip",
  description: "Generated by Iman Khorshidi",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${inter.variable} ${mani.variable} ${vazir.variable} antialiased max-w-screen`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
