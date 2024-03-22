import { Noto_Sans, Noto_Serif } from "next/font/google";

export const fontheading = Noto_Sans({
  subsets: ["latin"],
  variable: '--font-heading',
  display: 'swap',
});

export const fontbody = Noto_Serif({ 
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});