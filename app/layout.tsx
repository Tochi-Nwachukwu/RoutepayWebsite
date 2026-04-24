import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Routepay - Innovative Payment Solutions Beyond Barriers",
  description: "Routepay provides cutting-edge payment solutions that go beyond barriers, making transactions seamless and secure.",
  keywords: ["Routepay", "payment solutions", "fintech", "quick payments", "secure transactions", "digital payments"],
  authors: [{ name: "Routepay" }],
  icons: {
    icon: "/Routepay-favicon.png",
  },
  openGraph: {
    title: "Routepay - Innovative Payment Solutions Beyond Barriers",
    description: "Routepay provides seamless and secure quick payment solutions for businesses and individuals.",
    images: [{ url: "https://routepay.com/routepay-logo.png" }],
    url: "https://routepay.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Routepay - Innovative Payment Solutions Beyond Barriers",
    description: "Seamless and secure quick payment solutions with Routepay.",
    images: ["https://routepay.com/routepay-logo.png"],
    site: "@Routepay",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Routepay",
    "url": "https://routepay.com",
    "logo": "https://routepay.com/routepay-logo.png",
    "description": "Routepay provides innovative quick payment solutions.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234 913 444 6536",
      "contactType": "customer service"
    }
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
