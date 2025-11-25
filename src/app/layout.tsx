import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://adelphibiosciences.com"),
  title: {
    default: "Adelphi Biosciences | Pharmaceutical Regulatory Affairs Consulting",
    template: "%s | Adelphi Biosciences",
  },
  description:
    "Strategic regulatory affairs consulting for life sciences. From IND to FDA approval — executive-level expertise that delivers results. Founded by Peter Parsonson, named on FDA approval letter for Ekterly®.",
  keywords: [
    "regulatory affairs consulting",
    "FDA consulting",
    "pharmaceutical consulting",
    "IND submission",
    "NDA submission",
    "BLA submission",
    "regulatory strategy",
    "drug approval",
    "life sciences consulting",
    "Peter Parsonson",
    "Ekterly",
    "HAE treatment",
  ],
  authors: [{ name: "Peter Parsonson", url: "https://adelphibiosciences.com/about" }],
  creator: "Adelphi Biosciences",
  publisher: "Adelphi Biosciences",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adelphibiosciences.com",
    siteName: "Adelphi Biosciences",
    title: "Adelphi Biosciences | Pharmaceutical Regulatory Affairs Consulting",
    description:
      "Strategic regulatory affairs consulting for life sciences. From IND to FDA approval — executive-level expertise that delivers results.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adelphi Biosciences - Pharmaceutical Regulatory Affairs Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adelphi Biosciences | Pharmaceutical Regulatory Affairs Consulting",
    description:
      "Strategic regulatory affairs consulting for life sciences. From IND to FDA approval.",
    images: ["/og-image.png"],
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
  verification: {
    // Add your verification tokens when available
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://adelphibiosciences.com" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
