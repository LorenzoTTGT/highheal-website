import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HIGH HEAL - Music Label",
  description: "gathering of soulmates to heal through music. safe space to be vulnerable.",
  icons: {
    icon: '/icon.jpg',
    apple: '/apple-icon.jpg',
  },
  openGraph: {
    title: "HIGH HEAL - Music Label",
    description: "gathering of soulmates to heal through music. safe space to be vulnerable.",
    url: 'https://high-heal.com',
    siteName: 'HIGH HEAL',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HIGH HEAL Music Label',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "HIGH HEAL - Music Label",
    description: "gathering of soulmates to heal through music. safe space to be vulnerable.",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
