import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "qlabs — app studio",
  description:
    "An independent software studio designing and building apps across iOS, Android, and the web.",
  metadataBase: new URL("https://qlabs.studio"),
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' fill='white'>q</text></svg>",
  },
  openGraph: {
    title: "qlabs — app studio",
    description:
      "An independent software studio designing and building apps across iOS, Android, and the web.",
    type: "website",
    url: "https://qlabs.studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
