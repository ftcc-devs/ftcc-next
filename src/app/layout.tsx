import type { Metadata } from "next";
import "./globals.css";
import { openGraphImage } from "./shared-metadata";
import { fontheading, fontbody } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL('https://ftcc.org.au'),
  title: {
    default: 'FTCC - Filipino Tech Community Canberra',
    template: '%s | FTCC',
  },
  description: "Filipino Tech Community Canberra",
  ...openGraphImage,
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"scroll-smooth scroll-pt-24"}>
      <body id="top" className={`${fontbody.variable} ${fontheading.variable}`}>
        
        {children}

      </body>
    </html>
  );
}

