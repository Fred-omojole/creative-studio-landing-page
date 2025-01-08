import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const open_Sans = Open_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inflatable | Modern Landing Page Design",
  description:
    "A custom-designed, responsive landing page inspired by Inflatable, built to elevate your brand's digital presence and drive user engagement.",
  icons: {
    icon: ["/ic-logo.svg?v=4"],
    shortcut: ["/ic-logo.svg"],
  },
  openGraph: {
    title: "Inflatable | Modern Landing Page Design",
    description:
      "Showcasing a visually captivating and conversion-focused landing page inspired by Inflatable. Perfect for brands aiming to enhance their digital presence.",
    url: "https://creative-studio-landing-page.vercel.app/",
    siteName: "creative-studio-landing-page.vercel.app",
    images: [
      {
        url: "https://github.com/Fred-omojole/creative-studio-landing-page/blob/master/public/images/inflatable-17.png?raw=true", // Create a custom Open Graph image (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "Inflatable Landing Page Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inflatable | Modern Landing Page Design",
    description:
      "Experience a cutting-edge landing page inspired by Inflatable. Designed to captivate users and drive engagement for your brand.",
    images: [
      "https://github.com/Fred-omojole/creative-studio-landing-page/blob/master/public/images/inflatable-17.png?raw=true",
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_Sans.className}>{children}</body>
    </html>
  );
}
