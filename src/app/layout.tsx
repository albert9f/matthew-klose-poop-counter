import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Matthew Klose Poop Counter - The Most Advanced Poop Tracking Experience",
  description: "Track, analyze, and compare poops like never before. Built for Matthew Klose and Ozzie Klose.",
  keywords: ["poop tracker", "health analytics", "pet health", "bowel movement tracker"],
  authors: [{ name: "Matthew Klose" }],
  openGraph: {
    title: "Matthew Klose Poop Counter",
    description: "The world's most advanced poop tracking application",
    url: "https://poop.matthewklose.com",
    siteName: "Matthew Klose Poop Counter",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Matthew Klose Poop Counter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Klose Poop Counter",
    description: "The world's most advanced poop tracking application",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
