import { Noto_Sans, Noto_Serif, Gantari, Albert_Sans } from "next/font/google";

export const fontheading = Gantari({
  subsets: ["latin"],
  variable: '--font-heading',
  display: 'swap',
});

export const fontbody = Noto_Serif({ 
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});