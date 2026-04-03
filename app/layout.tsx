import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ProDiets — AI-Powered Nutrition & Diet Plans",
  description:
    "India's most comprehensive AI nutrition platform. Get personalised 7-day meal plans, recipes, BMI calculator, fitness routines and Ayurvedic wisdom — free, no sign-up needed.",
  keywords: [
    "AI diet plan",
    "Indian meal plan",
    "nutrition app",
    "weight loss",
    "BMI calculator",
    "Ayurvedic diet",
    "healthy recipes India",
    "prodiets",
  ],
  authors: [{ name: "ProDiets" }],
  creator: "ProDiets",
  openGraph: {
    title: "ProDiets — Smart Nutrition for Every Household",
    description:
      "Personalised AI diet plans, Indian recipes, BMI tracker, fitness routines and Ayurvedic wisdom — all free.",
    type: "website",
    locale: "en_IN",
    siteName: "ProDiets",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProDiets — AI-Powered Nutrition",
    description: "Personalised diet plans powered by AI. Free, no sign-up.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3B9B43",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
