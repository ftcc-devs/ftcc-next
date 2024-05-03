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
    <html lang="en" className={"scroll-smooth"}>
      <body id="top" className={`${fontbody.variable} ${fontheading.variable} bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50`}>
        
        {children}

      </body>
    </html>
  );
}

