import type { Metadata } from "next";
import "./globals.css";
import { openGraphImage } from "./shared-metadata";

export const metadata: Metadata = {
  metadataBase: new URL('https://ftcc.org.au'),
  title: "FTCC - Filipino Tech Community Canberra",
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
    <html lang="en" className={"scroll-smooth"}>
      <body className="">{children}</body>
    </html>
  );
}
