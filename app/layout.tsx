'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const nameDomain = "https://www.blancoenelblanco.com";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "https://www.blancoenelblanco.com",
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "7143729"
    },
	"review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
	"author": {
            "@type": "Person",
            "name": "Dewidewitoto : Slot Gacor Gampang Maxwin Pragmatic Play Dan Slot Deposit Pulsa 5000 Tanpa Potongan",
            "reviewBody": "Dewidewitoto : Slot Gacor Gampang Maxwin Pragmatic Play Dan Slot Deposit Pulsa 5000 Tanpa Potongan, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!"
          }
        },
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "IDR"
    }
  }
  `,
    };
  }

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <meta charSet="utf-8" />
        <title>Dewidewitoto : Slot Gacor Gampang Maxwin Pragmatic Play Dan Slot Deposit Pulsa 5000 Tanpa Potongan</title>
        <meta name="description" content="Dewidewitoto hadir sebagai platform terbaik untuk Anda yang mencari pengalaman bermain slot online berkualitas. Dengan koleksi game dari provider ternama seperti Pragmatic Play, Dewidewitoto menjamin sensasi bermain yang seru dan penuh peluang menang besar. Game slot gacor yang disediakan memiliki RTP tinggi, sehingga peluang Anda untuk meraih Maxwin semakin besar" />
        <meta name="keywords" content="Dewidewitoto, Slot Gacor Gampang Maxwin Pragmatic Play, Slot Gacor, Slot Deposit Pulsa 5000 Tanpa Potongan, Situs Slot Gacor Mahjong Ways, Situs Slot Daftar Dapat Bonus, Situs Slot Cashback Terbesar, Slot Depo 10K Bonus 20K" />
        <meta name="google-site-verification" content="5jKaHiX9buQrqRvvo7RFk38fZApn4e4t8l5sDBLPON8" />
        <meta name="application-name" content="dewidewitoto" />
        <link rel="author" href={nameDomain} />
        <link rel="canonical" href={nameDomain} />
        <meta name="author" content="dewidewitoto" />
        <meta name="publisher" content="dewidewitoto" />
        <meta name="copyright" content="dewidewitoto" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="category" content="slot" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="id-ID" />
        <meta name="rating" content="general" />
        <meta name="geo.country" content="ID" />
        <meta name="page-locale" content="id,en" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="distribution" content="global" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="Dewidewitoto : Slot Gacor Gampang Maxwin Pragmatic Play Dan Slot Deposit Pulsa 5000 Tanpa Potongan" />
        <meta property="og:description" content="Dewidewitoto : Slot Gacor Gampang Maxwin Pragmatic Play Dan Slot Deposit Pulsa 5000 Tanpa Potongan, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta property="og:url" content={nameDomain} />
        <meta property="og:site_name" content="dewidewitoto" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={nameDomain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="dewidewitoto" />
        <meta name="twitter:title" content="Dewidewitoto : Slot Gacor Gampang Maxwin Pragmatic Play Dan Slot Deposit Pulsa 5000 Tanpa Potongan" />
        <meta name="twitter:description" content="Dewidewitoto : Slot Gacor Gampang Maxwin Pragmatic Play Dan Slot Deposit Pulsa 5000 Tanpa Potongan, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta name="twitter:image" content={nameDomain} />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="next-size-adjust" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
