import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arjan van Hugten",
  description: "Arjan van Hugten, Software Developer @ Aviva Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script src="/sw.js" defer />
      </Head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-QQ2SRTNSNE" />
    </html>
  );
}
