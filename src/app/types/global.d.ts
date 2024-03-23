import { ObjectHTMLAttributes } from "react";

export {};

declare global {
  interface GalleryImage {
    id: string;
    src: string;
    link: string;
    title: string;
    album: string;
    date: string;
  }
  type GalleryImages = GalleryImage[]

  interface FTCCEvent {
    id: string;
    date: string;
    title: string;
    venue: string;
    fblink: string;
    googlecalendarlink: string;
    highlight: boolean;
  }

  interface Blog {
    id: string;
    date: string;
    title: string;
    slug: string;
    author: string;
    link: string;
    featuredimage: GalleryImage;
    blogimages: GalleryImages;
  }

  interface Mention {
    id: string;
    date: string;
    title: string;
    source: string;
    sourcelink: string;
    author: string;
    authorlink: string;
    featuredimage: GalleryImage;
  }

  interface Pillar {
    id: string;
    icon: ObjectHTMLAttributes;
    title: string;
    blurb: string;
    description: string;
  }

  interface Testimonial {
    id: string;
    blurb: string;
    fullstatement: string;
    name: string;
    ftccdesignation: string;
    link1: string;
    link2: string;
    link3: string;
    avatar: string;
  }

}