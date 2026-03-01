import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { getHospitalJsonLd, getLocalBusinessJsonLd, getFaqJsonLd } from "@/lib/seo";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://rimshospitalhathras.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0ea5e9" },
    { media: "(prefers-color-scheme: dark)", color: "#0284c7" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "R.I.M.S Hospital | Best Multi-Specialty Hospital in Hathras, UP",
    template: "%s | R.I.M.S Hospital Hathras",
  },
  description:
    "R.I.M.S Hospital (Rajput Institute of Medical Sciences) — Best multi-specialty hospital in Hathras, Uttar Pradesh. 24x7 emergency care, orthopedics & joint replacement, plastic surgery, burns unit, hair transplantation. Call 9457302031.",
  keywords: [
    "RIMS Hospital",
    "RIMS Hospital Hathras",
    "Rajput Institute of Medical Sciences",
    "best hospital in Hathras",
    "hospital near me Hathras",
    "orthopedics hospital Hathras",
    "joint replacement Hathras",
    "plastic surgery Hathras",
    "hair transplantation Hathras UP",
    "burns treatment hospital UP",
    "24x7 emergency hospital Hathras",
    "Dr Anil Rajput",
    "multi specialty hospital Uttar Pradesh",
    "hospital in Ruheri",
    "ambulance service Hathras",
    "pharmacy 24 hours Hathras",
    "best doctor Hathras",
    "medical college Hathras",
  ],
  authors: [{ name: "R.I.M.S Hospital", url: BASE_URL }],
  creator: "R.I.M.S Hospital",
  publisher: "R.I.M.S Hospital",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "R.I.M.S Hospital | Best Multi-Specialty Hospital in Hathras",
    description:
      "24x7 emergency care, orthopedics, plastic surgery, burns unit, hair transplantation. Trusted healthcare in Hathras, Uttar Pradesh. Call 9457302031.",
    url: BASE_URL,
    siteName: "R.I.M.S Hospital - Rajput Institute of Medical Sciences",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "R.I.M.S Hospital - Rajput Institute of Medical Sciences, Hathras",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "R.I.M.S Hospital | Best Hospital in Hathras",
    description:
      "24x7 emergency care, orthopedics, plastic surgery, burns unit. Trusted healthcare in Hathras, UP.",
    images: [`${BASE_URL}/og-image.png`],
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
    // Add your actual verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "Healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hospitalJsonLd = getHospitalJsonLd();
  const localBusinessJsonLd = getLocalBusinessJsonLd();
  const faqJsonLd = getFaqJsonLd();

  return (
    <html lang="en" dir="ltr">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* GEO meta tags for local SEO */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Hathras" />
        <meta name="geo.position" content="27.5963;78.0519" />
        <meta name="ICBM" content="27.5963, 78.0519" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
